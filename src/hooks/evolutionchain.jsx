import { useQuery } from "@apollo/client";
import { GET_EVOLUTIONCHAIN } from "@GraphQL/evolutionchain/queries";
import _ from "lodash";

export function useEvolutionchain(id) {
  const { loading, error, data } = useQuery(GET_EVOLUTIONCHAIN, {
    variables: { id },
  });
  const evolutionChain = _.get(data, "pokemon_v2_evolutionchain", [])
  const pokemonSpecies = _.get(evolutionChain[0], 'pokemon_v2_pokemonspecies', [])
  return {
    evolutionChain,
    pokemonSpecies,
    loading,
    error,
  };
}
