import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styled from "@emotion/native";
import Text from "@Components/Text";
import Card from "@Components/Card";
import _ from "lodash";

const SmallText = styled(Text)`
  font-family: "Roboto_700Bold";
  font-size: 8px;
`;

const TextRow = styled.View`
  flex-direction: row;
  flex: 0.4;
`;

export default function Infos({ pokemon, pokemonSpecies, size }) {
  return (
    <Card height={size} width={size} style={{ padding: 8 }}>
      <TextRow>
        <SmallText color="#264653" style={{ flex: 1 }}>
          Weight
        </SmallText>
        <SmallText color="#E76F51">{pokemon.weight / 10} kg</SmallText>
      </TextRow>
      <TextRow>
        <SmallText color="#264653" style={{ flex: 1 }}>
          Height
        </SmallText>
        <SmallText color="#E76F51">{pokemon.height / 10} m</SmallText>
      </TextRow>
      <TextRow>
        <SmallText color="#264653" style={{ minWidth: 32 }}>
          Abilities
        </SmallText>
        <SmallText color="#E76F51" style={{ flex: 1, textAlign: "right" }}>
          {_.join(
            _.get(pokemon, "pokemon_v2_pokemonabilities", []).map(
              (item) => item["pokemon_v2_ability"].name
            ),
            ", "
          )}
        </SmallText>
      </TextRow>
      <View style={{ flex: 1 }}>
        <SmallText color="#264653" style={{ marginBottom: 5 }}>
          Description
        </SmallText>
        <SmallText
          color="#E76F51"
          style={{ textAlign: "center" }}
          numberOfLines={4}
        >
          {_.get(
            pokemonSpecies.find((item) => item.id === pokemon.id),
            "pokemon_v2_pokemonspeciesflavortexts.0.flavor_text",
            ""
          )}
        </SmallText>
      </View>
    </Card>
  );
}

Infos.defaultProps = {
  size: 137,
  pokemon: {},
  pokemonSpecies: [],
};

Infos.propTypes = {
  size: PropTypes.number,
  pokemon: PropTypes.object,
  pokemonSpecies: PropTypes.array,
};
