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

export default function Button(props) {
  const [fontsLoaded] = useFonts({ Roboto_700Bold });
  if (!fontsLoaded) {
    return null;
  }
  return <Container {...props}>{props.children}</Container>;
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
  color: "default",
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  color: PropTypes.oneOf([
    "default",
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "electrique",
    "ice",
    "fight",
    "fighting",
    "poison",
    "ground",
    "flight",
    "flying",
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
