import styled from 'styled-components/native';

import colors from '../../styles/colors';
import logo from '../../assets/logo.png';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
  aspectRatio: 277 / 36,
})`
  width: 180px;
`;

export const IconWrapper = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
  height: 24px;
  width: 24px;
`;

export const Counter = styled.Text`
  position: absolute;
  top: -10px;
  right: -10px;
  color: ${colors.light};
  background: ${colors.primary};
  width: 16px;
  height: 16px;
  border-radius: 8px;
  text-align: center;
  line-height: 16px;
  font-size: 12px;
`;
