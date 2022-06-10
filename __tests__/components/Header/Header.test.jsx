import Header from "@Components/Header";
import { render } from "@testing-library/react-native";

test("renders the Header", () => {
  const tree = render(
    <Header title="Pikachu #025" />
  );
  expect(tree).toMatchSnapshot();
});

test("renders the Header with white background", () => {
  const tree = render(
    <Header title="Pikachu #025"  backgroundColor="#fff"/>
  );
  expect(tree).toMatchSnapshot();
});
