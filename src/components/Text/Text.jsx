import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight } from "react-native";
import styled, { css } from "@emotion/native";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";

const StyledText = styled.Text`
  color: ${(props) => props.color};
  ${({ fontsLoaded }) =>
    fontsLoaded &&
    css`
      font-family: "Roboto_500Medium";
    `}
`;

export default function Text(props) {
  const [fontsLoaded] = useFonts({ Roboto_500Medium });
  return (
    <StyledText {...props} fontsLoaded={fontsLoaded}>
      {props.children}
    </StyledText>
  );
}

Text.defaultProps = {
  children: null,
  color: "#fff",
};

Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};
