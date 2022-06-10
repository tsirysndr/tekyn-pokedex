import SearchForm from "@Components/SearchForm";
import { ThemeProvider } from "@emotion/react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { theme } from "@Themes/default";

test("renders the SearchForm", () => {
  const onSearch = jest.fn();
  const onShufflePokemon = jest.fn();
  const tree = render(
    <ThemeProvider theme={theme}>
      <SearchForm onSearch={onSearch} onShufflePokemon={onShufflePokemon} />
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});

test("enter pokemon name and click SearchButton", async () => {
  const onSearch = jest.fn();
  const onShufflePokemon = jest.fn();
  const { getByPlaceholderText, getAllByRole } = render(
    <ThemeProvider theme={theme}>
      <SearchForm onSearch={onSearch} onShufflePokemon={onShufflePokemon} />
    </ThemeProvider>
  );
  fireEvent.changeText(getByPlaceholderText("name or id"), "Pikachu");
  const buttons = getAllByRole("button");
  fireEvent.press(buttons[0]);
  await waitFor(() => expect(onSearch).toBeCalledWith({ nameOrId: "Pikachu" }));
});

test("click SearchButton, skip if input is empty", () => {
  const onSearch = jest.fn();
  const onShufflePokemon = jest.fn();
  const { getAllByRole } = render(
    <ThemeProvider theme={theme}>
      <SearchForm onSearch={onSearch} onShufflePokemon={onShufflePokemon} />
    </ThemeProvider>
  );
  const buttons = getAllByRole("button");
  fireEvent.press(buttons[0]);
  expect(onSearch).not.toBeCalled();
});

test("click ShuffleButton", () => {
  const onSearch = jest.fn();
  const onShufflePokemon = jest.fn();
  const { getAllByRole } = render(
    <ThemeProvider theme={theme}>
      <SearchForm onSearch={onSearch} onShufflePokemon={onShufflePokemon} />
    </ThemeProvider>
  );
  const buttons = getAllByRole("button");
  fireEvent.press(buttons[1]);
  expect(onShufflePokemon).toBeCalled();
});
