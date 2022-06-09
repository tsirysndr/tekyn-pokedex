import Card from "@Components/Card";
import { render } from "@testing-library/react-native";

test("renders the Card", () => {
  const tree = render(<Card />);
  expect(tree).toMatchSnapshot();
});
