import { useLazyQuery } from "@apollo/client";
import { SEARCH_POKEMON } from "@GraphQL/pokemon/queries";
import _ from "lodash-contrib";

export function usePokemon() {
  const [getPokemon] = useLazyQuery(SEARCH_POKEMON);

  const getRandomPokemon = () => {};

  const searchPokemon = async (keyword) => {
    const variables = _.isNumeric(keyword)
      ? { id: parseInt(keyword), name: "" }
      : { id: -1, name: keyword };
    const result = await getPokemon({ variables });
    return result;
  };

  return { getRandomPokemon, searchPokemon };
}
