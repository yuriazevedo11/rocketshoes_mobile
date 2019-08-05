import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { Container, LogoNav, Logo, CartNav, Counter } from './styles';
import colors from '../../styles/colors';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <LogoNav onPress={() => navigation.navigate('Main')}>
        <Logo />
      </LogoNav>
      <CartNav onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color={colors.light} size={24} />
        <Counter>{cartSize}</Counter>
      </CartNav>
    </Container>
  );
}

Header.propTypes = PropTypes.shape({
  cartSize: PropTypes.func,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}).isRequired;
