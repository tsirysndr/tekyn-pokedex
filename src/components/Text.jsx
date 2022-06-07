import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight } from "react-native";
import styled from "@emotion/native";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";

const StyledText = styled.Text`
  color: ${props => props.color};
  font-family: 'Roboto_500Medium';
`;

export default function Text({ color, onPress, children }) {
  const [fontsLoaded] = useFonts({ Roboto_500Medium });
  if (!fontsLoaded) {
    return null;
  }
  return <StyledText color={color}>{children}</StyledText>;
}

Text.defaultProps = {
  children: null,
  color: "#fff",
};

Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};
