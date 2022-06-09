import GradientBackground from "@Components/GradientBackground";
import Text from "@Components/Text";
import React, { useEffect } from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native";
import DefaultCard from "@Components/Card";
import styled from "@emotion/native";
import { useEvolutionchain } from "@Hooks/evolutionchain";
import { Dimensions } from "react-native";
import Header from "@Components/Header";
import zeropad from "zeropad";
import Evolution from "@Components/Evolution";

const Card = styled(DefaultCard)``;

export default function PokemonPage({ route, navigation }) {
  const { pokemon } = route.params;
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const { pokemonSpecies, loading } = useEvolutionchain(pokemon.id);
  return (
    <GradientBackground>
      <Card width={(windowWidth * 80) / 100} height={(windowHeight * 82) / 100}>
        {loading && <ActivityIndicator size="large" color="#F4A261" />}
        {!loading && (
          <>
            <Header
              title={`${pokemon.name} #${zeropad(pokemon.id, 3)}`}
              onGoBack={() => navigation.goBack()}
            />
            <Evolution
              id={pokemon.id}
              pokemonSpecies={pokemonSpecies}
              pokemon={pokemon}
            />
          </>
        )}
      </Card>
    </GradientBackground>
  );
}
