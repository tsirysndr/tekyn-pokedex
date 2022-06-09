import Pokemon from "@Components/Pokemon";
import { render } from "@testing-library/react-native";
import { pokemon, pokemonspecies } from "__mock__";

test("renders Pokemon", () => {
  const tree = render(
    <Pokemon />
  );
  expect(tree).toMatchSnapshot();
});
