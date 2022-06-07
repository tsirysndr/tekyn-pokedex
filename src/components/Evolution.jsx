import React from "react";
import PropTypes from "prop-types";
import { SvgUri } from "react-native-svg";
import styled from "@emotion/native";

const Container = styled.View`
`;

const POKEMON_IMAGE_URL =
  "https://github.com/PokeAPI/sprites/raw/f301664fbbce6ccbe09f9561287e05653379f870/sprites/pokemon/other/dream-world";

export default function Next(props) {
  return (
    <Container>
      <SvgUri width={300} uri={`${POKEMON_IMAGE_URL}/${props.id}.svg`} />
    </Container>
  );
}

Next.propTypes = {
  id: PropTypes.number.isRequired,
};

