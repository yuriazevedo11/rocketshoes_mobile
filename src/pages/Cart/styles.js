import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Wrapper = styled.View`
  padding: 10px;
  border-radius: 4px;
  background: ${colors.light};
`;

export const Products = styled.View``;

export const Product = styled.View`
  padding: 10px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  justify-content: center;
  padding: 10px;
  margin-left: 5px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 2px;
`;

export const ProductRemove = styled.TouchableOpacity`
  padding: 4px;
  justify-content: center;
`;

export const ProductController = styled.View`
  padding: 8px;
  background: #eee;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
`;

export const QuantityButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  editable: false,
})`
  padding: 0 8px;
  margin: 0 5px;
  background: ${colors.light};
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 50px;
`;

export const ProductSubTotal = styled.Text`
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  text-align: right;
`;

export const TotalContainer = styled.View`
  margin: 25px 0;
  align-items: center;
`;

export const TotalText = styled.Text`
  color: #999;
  font-weight: bold;
`;

export const TotalAmount = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const FinishOrder = styled.TouchableOpacity`
  background: ${colors.primary};
  border-radius: 4px;
  padding: 10px;
`;

export const FinishOrderText = styled.Text`
  text-align: center;
  color: ${colors.light};
  font-weight: bold;
`;

export const EmptyCart = styled.View`
  padding: 10px;
  border-radius: 4px;
  background: ${colors.light};
  align-items: center;
`;

export const EmptyCartText = styled.Text`
  margin: 10px;
  font-size: 24px;
`;
