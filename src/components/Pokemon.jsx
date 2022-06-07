import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import DefaultText from "./Text";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import styled from "@emotion/native";
import zeropad from "zeropad";
import { SvgUri } from "react-native-svg";

const Text = styled(DefaultText)`
  font-size: 24px;
  font-family: "Roboto_700Bold";
`;

const POKEMON_IMAGE_URL =
  "https://github.com/PokeAPI/sprites/raw/f301664fbbce6ccbe09f9561287e05653379f870/sprites/pokemon/other/dream-world";

  export default function Pokemon(props) {
  const [fontsLoaded] = useFonts({ Roboto_700Bold });
  if (!fontsLoaded) {
    return null;
  }
  const format = (value) => `#${zeropad(value, 3)}`;
  return (
    <View style={{ width: 150, height: 300 }}>
      <SvgUri width={150} uri={`${POKEMON_IMAGE_URL}/${props.id}.svg`} />
      <Text color="#264653">{format(props.id)}</Text>
      <Text color="#264653">{props.name}</Text>
    </View>
  );
}

Pokemon.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
