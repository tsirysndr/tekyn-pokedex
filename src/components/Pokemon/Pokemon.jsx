import React from "react";
import PropTypes from "prop-types";
import { Image, View } from "react-native";
import DefaultText from "@Components/Text";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import styled from "@emotion/native";
import zeropad from "zeropad";
import { POKEMON_IMAGE_URL } from "src/constants/urls";

const Container = styled.View`
  width: 100px;
  justify-content: center;
  align-items: center;
`;

const Text = styled(DefaultText)`
  font-size: 10px;
  font-family: "Roboto_700Bold";
  text-align: center;
`;

export default function Pokemon(props) {
  const [fontsLoaded] = useFonts({ Roboto_700Bold });
  if (!fontsLoaded) {
    return null;
  }
  const format = (value) => `#${zeropad(value, 3)}`;
  return (
    <Container>
      <Image
        style={{ height: 56, width: 56 }}
        resizeMode="cover"
        source={{ uri: `${POKEMON_IMAGE_URL}/${zeropad(props.id, 3)}.png` }}
      />
      <Text color="#264653">{format(props.id)}</Text>
      <Text color="#264653">{props.name}</Text>
    </Container>
  );
}

Pokemon.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
