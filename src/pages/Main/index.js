import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import * as CartActions from '../../store/modules/cart/actions';

import { Container } from '../../components/Container';
import {
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import colors from '../../styles/colors';

export default function Main() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProducts({ item }) {
    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <AddButton onPress={() => handleAddProduct(item.id)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color={colors.light} size={20} />
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </Product>
    );
  }

  renderProducts.propTypes = PropTypes.shape({
    item: PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      title: PropTypes.string,
      priceFormattedid: PropTypes.string,
    }),
  }).isRequired;

  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderProducts}
        showsHorizontalScrollIndicator={false}
        extraData={amount}
      />
    </Container>
  );
}

Main.propTypes = PropTypes.shape({
  addToCartRequest: PropTypes.func,
  amount: PropTypes.array,
}).isRequired;
