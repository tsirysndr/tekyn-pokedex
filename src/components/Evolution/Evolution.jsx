import React from "react";
import PropTypes from "prop-types";
import { SvgUri } from "react-native-svg";
import styled from "@emotion/native";
import { POKEMON_IMAGE_URL } from "src/constants/urls";

const Container = styled.View`
`;

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

