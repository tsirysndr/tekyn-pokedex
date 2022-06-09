import GradientBackground from "@Components/GradientBackground";
import { useEvolutionchain } from "@Hooks/evolutionchain";
import { usePokemon } from "@Hooks/pokemon";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SearchForm from "@Components/SearchForm";

export default function SearchPage() {
  const { searchPokemon, getRandomPokemon, loading } = usePokemon();
  const navigation = useNavigation();
  const onSearch = async (data) => {
    const result = await searchPokemon(data.nameOrId);
    if (result.length > 0) {
      navigation.push("PokemonPage", { pokemon: result[0] });
    }
  };
  const onShufflePokemon = async () => {
    const result = await getRandomPokemon();
    if (result.length > 0) {
      navigation.push("PokemonPage", { pokemon: result[0] });
    }
  };

  return (
    <GradientBackground>
      <SearchForm
        onSearch={onSearch}
        loading={loading}
        onShufflePokemon={onShufflePokemon}
      />
    </GradientBackground>
  );
}
