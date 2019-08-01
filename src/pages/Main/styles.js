import styled from 'styled-components/native';
import { darken } from 'polished';

import colors from '../../styles/colors';

export const Product = styled.View`
  width: 220px;
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
  background: ${colors.light};
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 18px;
  padding: 0 10px;
`;

export const ProductPrice = styled.Text`
  margin: 10px 0px;
  font-size: 20px;
  font-weight: bold;
  padding: 0 10px;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: ${colors.primary};
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  background: ${darken(0.03, colors.primary)};
`;

export const ProductAmountText = styled.Text`
  margin-left: 5px;
  color: ${colors.light};
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  color: ${colors.light};
  font-weight: bold;
`;
