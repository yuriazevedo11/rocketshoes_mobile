import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

import colors from '../../styles/colors';

export default class Cart extends Component {
  state = {
    products: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
      {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
    ],
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        {products.length > 0 ? (
          <Wrapper>
            <Products>
              {products.map(product => (
                <Product key={String(product.id)}>
                  <ProductInfo>
                    <ProductImage source={{ uri: product.image }} />
                    <ProductDetails>
                      <ProductTitle>{product.title}</ProductTitle>
                      <ProductPrice>R$ {product.price}0</ProductPrice>
                    </ProductDetails>
                    <ProductRemove onPress={() => {}}>
                      <Icon
                        name="delete-forever"
                        color={colors.primary}
                        size={24}
                      />
                    </ProductRemove>
                  </ProductInfo>
                  <ProductController>
                    <QuantityButton onPress={() => {}}>
                      <Icon
                        name="remove-circle-outline"
                        color={colors.primary}
                        size={20}
                      />
                    </QuantityButton>
                    <ProductAmount value={String(2)} />
                    <QuantityButton onPress={() => {}}>
                      <Icon
                        name="add-circle-outline"
                        color={colors.primary}
                        size={20}
                      />
                    </QuantityButton>
                    <ProductSubTotal>R$ 123.00</ProductSubTotal>
                  </ProductController>
                </Product>
              ))}
            </Products>
            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalAmount>R$ 1000.00</TotalAmount>
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
}
