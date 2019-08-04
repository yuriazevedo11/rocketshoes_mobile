import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { Container, LogoNav, Logo, CartNav, Counter } from './styles';
import colors from '../../styles/colors';

function Header({ navigation, cartSize }) {
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

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
