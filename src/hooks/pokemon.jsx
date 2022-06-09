import { useLazyQuery } from "@apollo/client";
import { SEARCH_POKEMON } from "@GraphQL/pokemon/queries";
import _ from "lodash-contrib";

export function usePokemon() {
  const [getPokemon, { loading }] = useLazyQuery(SEARCH_POKEMON);

  const getRandomPokemon = async () => {
    const { data } = await getPokemon({
      variables: {
        id: _.random(1, 898),
        name: "",
      },
    });
    return _.get(data, "pokemon_v2_pokemon", []);
  };

  const searchPokemon = async (keyword) => {
    const variables = _.isNumeric(keyword)
      ? { id: parseInt(keyword), name: "" }
      : { id: -1, name: keyword };
    const { data } = await getPokemon({ variables });
    return _.get(data, "pokemon_v2_pokemon", []);
  };

  return { getRandomPokemon, searchPokemon, loading };
}
