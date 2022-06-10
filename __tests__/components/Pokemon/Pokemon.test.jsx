import Pokemon from "@Components/Pokemon";
import { render } from "@testing-library/react-native";
import { pokemon, pokemonspecies } from "__mock__";

test("renders Pokemon", () => {
  const tree = render(
    <Pokemon id={25} name="Pikachu" />
  );
  expect(tree).toMatchSnapshot();
});
