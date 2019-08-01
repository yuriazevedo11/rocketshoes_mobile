import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, IconWrapper, Counter } from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <Logo />
      <IconWrapper onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <Counter>0</Counter>
      </IconWrapper>
    </Container>
  );
}

Header.propTypes = PropTypes.shape({
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}).isRequired;
