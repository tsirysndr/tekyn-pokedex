import Evolution from "@Components/Evolution";
import { ThemeProvider } from "@emotion/react";
import { render } from "@testing-library/react-native";
import { pokemon, pokemonspecies } from "__mock__";
import { theme } from "@Themes/default";

test("renders the Evolution", () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Evolution id={158} pokemon={pokemon} pokemonSpecies={pokemonspecies} />
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});
