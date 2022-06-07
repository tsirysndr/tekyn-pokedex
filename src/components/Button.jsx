import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/native";
import Text from "@Components/Text";
import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto';

const Container = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors[props.color]};
  border-radius: 20px;
  width: 120px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled(Text)`
  font-family: 'Roboto_700Bold';
  font-size: 16px;
`;

export default function Button({ color, onPress, children }) {
  const [fontsLoaded] = useFonts({ Roboto_700Bold });
  if (!fontsLoaded) {
    return null;
  }
  return <Container color={color} onPress={onPress}>{children}</Container>;
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
  color: "fire",
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  color: PropTypes.oneOf([
    "normal",
    "fire",
    "water",
    "grass",
    "electrique",
    "ice",
    "fight",
    "poison",
    "ground",
    "flight",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
  ]),
};
