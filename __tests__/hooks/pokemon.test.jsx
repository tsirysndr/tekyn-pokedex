import SearchForm from "@Components/SearchForm";
import { usePokemon } from "@Hooks/pokemon";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { MockedProvider } from "@apollo/client/testing";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@Themes/default";
import { mocks } from "__mock__";

const Component = ({ spy }) => {
  const { searchPokemon, getRandomPokemon } = usePokemon();
  const onSearch = async (data) => {
    const result = await searchPokemon(data.nameOrId);
    spy(result);
  };
  const onShufflePokemon = async () => {
    const result = await getRandomPokemon(25, 25);
    spy(result);
  };
  return <SearchForm onSearch={onSearch} onShufflePokemon={onShufflePokemon} />;
};

test("get random pokemon", async () => {
  const spy = jest.fn();
  const { getByPlaceholderText, getAllByRole } = render(
    <MockedProvider mocks={mocks}>
      <ThemeProvider theme={theme}>
        <Component spy={spy} />
      </ThemeProvider>
    </MockedProvider>
  );
  const buttons = getAllByRole("button");
  fireEvent.press(buttons[1]);
  await waitFor(() =>
    expect(spy).toBeCalledWith(
      _.get(mocks[1].result.data, "pokemon_v2_pokemon")
    )
  );
});

test("search pokemon by name", async () => {
  const spy = jest.fn();
  const { getByPlaceholderText, getAllByRole } = render(
    <MockedProvider mocks={mocks}>
      <ThemeProvider theme={theme}>
        <Component spy={spy} />
      </ThemeProvider>
    </MockedProvider>
  );
  fireEvent.changeText(getByPlaceholderText("name or id"), "Kadabra");
  const buttons = getAllByRole("button");
  fireEvent.press(buttons[0]);
  await waitFor(() =>
    expect(spy).toBeCalledWith(
      _.get(mocks[0].result.data, "pokemon_v2_pokemon")
    )
  );
});

test("search pokemon by id", async () => {
  const spy = jest.fn();
  const { getByPlaceholderText, getAllByRole } = render(
    <MockedProvider mocks={mocks}>
      <ThemeProvider theme={theme}>
        <Component spy={spy} />
      </ThemeProvider>
    </MockedProvider>
  );
  fireEvent.changeText(getByPlaceholderText("name or id"), "699");
  const buttons = getAllByRole("button");
  fireEvent.press(buttons[0]);
  await waitFor(() =>
    expect(spy).toBeCalledWith(
      _.get(mocks[3].result.data, "pokemon_v2_pokemon")
    )
  );
});
