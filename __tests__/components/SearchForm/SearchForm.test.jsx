import SearchForm from "@Components/SearchForm";
import { render } from "@testing-library/react-native";

test("renders the SearchForm", () => {
  const tree = render(
    <SearchForm/>
  );
  expect(tree).toMatchSnapshot();
});
