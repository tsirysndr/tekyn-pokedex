import Header from "@Components/Header";
import { render } from "@testing-library/react-native";

test("renders the Header", () => {
  const tree = render(
    <Header />
  );
  expect(tree).toMatchSnapshot();
});
