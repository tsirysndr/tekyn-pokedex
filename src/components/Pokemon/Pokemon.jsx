import React from "react";
import PropTypes from "prop-types";
import { Image, View } from "react-native";
import DefaultText from "@Components/Text";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import styled, { css } from "@emotion/native";
import zeropad from "zeropad";
import { POKEMON_IMAGE_URL } from "src/constants/urls";

const Container = styled.View`
  width: 100px;
  justify-content: center;
  align-items: center;
`;

const Text = styled(DefaultText)`
  font-family: "Roboto_700Bold";
  text-align: center;
`;

export default function Pokemon({ id, name, fontSize, size }) {
  const [fontsLoaded] = useFonts({ Roboto_700Bold });
  if (!fontsLoaded) {
    return null;
  }
  const format = (value) => `#${zeropad(value, 3)}`;
  return (
    <Container>
      <Image
        style={{ height: size, width: size }}
        resizeMode="cover"
        source={{ uri: `${POKEMON_IMAGE_URL}/${zeropad(id, 3)}.png` }}
      />
      <Text color="#264653" style={{ fontSize }}>
        {format(id)}
      </Text>
      <Text color="#264653" style={{ fontSize }}>
        {name}
      </Text>
    </Container>
  );
}

Pokemon.defaultProps = {
  fontSize: 10,
  size: 56,
};

Pokemon.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  size: PropTypes.number,
};
