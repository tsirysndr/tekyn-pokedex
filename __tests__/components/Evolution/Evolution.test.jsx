import Evolution from "@Components/Evolution";
import { render } from "@testing-library/react-native";
import { pokemon, pokemonspecies } from "__mock__";

test("renders the Evolution", () => {
  const tree = render(
    <Evolution id={158} pokemon={pokemon} pokemonSpecies={pokemonspecies} />
  );
  expect(tree).toMatchSnapshot();
});
