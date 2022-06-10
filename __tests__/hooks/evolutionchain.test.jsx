import { MockedProvider } from "@apollo/client/testing";
import Evolution from "@Components/Evolution";
import { ThemeProvider } from "@emotion/react";
import { useEvolutionchain } from "@Hooks/evolutionchain";
import { render, waitFor } from "@testing-library/react-native";
import { mocks, pokemon } from "__mock__";
import { theme } from "@Themes/default";
import _ from "lodash";

const Component = ({ spy }) => {
  const { evolutionChain, pokemonSpecies } = useEvolutionchain(6);
  spy({ evolutionChain });
  return <Evolution id={6} pokemon={pokemon} pokemonSpecies={pokemonSpecies} />;
};

test("get evolution chain and pokemon species", async () => {
  const spy = jest.fn();
  render(
    <MockedProvider mocks={mocks}>
      <ThemeProvider theme={theme}>
        <Component spy={spy} />
      </ThemeProvider>
    </MockedProvider>
  );
  await waitFor(() =>
    expect(spy).toBeCalledWith({
      evolutionChain: _.get(mocks[2].result.data, "pokemon_v2_evolutionchain"),
    })
  );
});
