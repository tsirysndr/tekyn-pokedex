import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "@emotion/native";
import PropTypes from "prop-types";

const Container = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default function GradientBackground({ children }) {
  return <Container colors={["#F4A261", "#141A2B"]}>{children}</Container>;
}

GradientBackground.defaultProps = {
  children: null,
};

GradientBackground.propTypes = {
  children: PropTypes.node,
};
