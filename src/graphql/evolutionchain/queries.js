import { gql } from "@apollo/client";

export const GET_EVOLUTIONCHAIN = gql`
  query GetEvolutionChain($id: Int) {
    pokemon_v2_evolutionchain(where: {pokemon_v2_pokemonspecies: {id: {_eq: $id}}}) {
      pokemon_v2_pokemonspecies {
        id
        pokemon_v2_pokemons {
          name
        }
        pokemon_v2_pokemonspeciesflavortexts(where: {pokemon_species_id: {_eq: $id}, language_id: {_eq: 9}}) {
          language_id
          flavor_text
        }
      }
      id
    }
  }
`;
