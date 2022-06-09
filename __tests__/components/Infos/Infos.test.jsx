import Infos from "@Components/Infos";
import { render } from "@testing-library/react-native";
import { pokemon, pokemonspecies } from "__mock__";

test("renders the Infos", () => {
  const tree = render(
    <Infos pokemon={pokemon} pokemonSpecies={pokemonspecies} />
  );
  expect(tree).toMatchSnapshot();
});
