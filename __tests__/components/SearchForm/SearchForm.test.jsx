import SearchForm from "@Components/SearchForm";
import { ThemeProvider } from "@emotion/react";
import { render } from "@testing-library/react-native";
import { theme } from "@Themes/default";

test("renders the SearchForm", () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <SearchForm/>
    </ThemeProvider>
    
  );
  expect(tree).toMatchSnapshot();
});
