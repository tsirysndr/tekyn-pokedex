import { gql } from "@apollo/client";

export const SEARCH_POKEMON = gql`
  query SearchPokemon($name: String, $id: Int) {
    pokemon_v2_pokemon(
      where: { _or: [{ id: { _eq: $id } }, { name: { _eq: $name } }] }
    ) {
      base_experience
      height
      id
      is_default
      name
      order
      pokemon_species_id
      pokemon_v2_pokemonforms {
        form_name
        form_order
        id
        is_battle_only
        is_default
        is_mega
        name
        order
        pokemon_id
      }
      weight
      pokemon_v2_pokemonabilities {
        ability_id
        id
        is_hidden
        pokemon_id
        pokemon_v2_ability {
          name
          pokemon_v2_abilityflavortexts {
            id
          }
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        effort
        id
        pokemon_id
        stat_id
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemontypes {
        pokemon_id
        pokemon_v2_type {
          name
          pokemon_v2_generation {
            name
          }
        }
      }
    }
  }
`;
