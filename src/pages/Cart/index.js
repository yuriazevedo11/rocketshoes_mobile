import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import * as CartActions from '../../store/modules/cart/actions';

import { Container } from '../../components/Container';
import {
  Wrapper,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductRemove,
  ProductController,
  QuantityButton,
  ProductAmount,
  ProductSubTotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  FinishOrder,
  FinishOrderText,
  EmptyCart,
  EmptyCartText,
} from './styles';

import { formatPrice } from '../../util/format';
import colors from '../../styles/colors';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart.length > 0 ? (
        <Wrapper>
          <Products>
            {cart.map(product => (
              <Product key={String(product.id)}>
                <ProductInfo>
                  <ProductImage source={{ uri: product.image }} />
                  <ProductDetails>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{product.priceFormatted}</ProductPrice>
                  </ProductDetails>
                  <ProductRemove
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  >
                    <Icon
                      name="delete-forever"
                      color={colors.primary}
                      size={24}
                    />
                  </ProductRemove>
                </ProductInfo>
                <ProductController>
                  <QuantityButton onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      color={colors.primary}
                      size={20}
                    />
                  </QuantityButton>
                  <ProductAmount value={String(product.amount)} />
                  <QuantityButton onPress={() => increment(product)}>
                    <Icon
                      name="add-circle-outline"
                      color={colors.primary}
                      size={20}
                    />
                  </QuantityButton>
                  <ProductSubTotal>{product.subtotal}</ProductSubTotal>
                </ProductController>
              </Product>
            ))}
          </Products>
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalAmount>{total}</TotalAmount>
          </TotalContainer>
          <FinishOrder>
            <FinishOrderText>FINALIZAR PEDIDO</FinishOrderText>
          </FinishOrder>
        </Wrapper>
      ) : (
        <EmptyCart>
          <Icon name="remove-shopping-cart" size={100} color="#ddd" />
          <EmptyCartText>Seu carrinho está vazio.</EmptyCartText>
        </EmptyCart>
      )}
    </Container>
  );
}

Cart.propTypes = PropTypes.shape({
  cart: PropTypes.shape({
    map: PropTypes.func,
  }),
  total: PropTypes.string,
  removeFromCart: PropTypes.func,
  updateAmountRequest: PropTypes.func,
}).isRequired;
