import BackIcon from "@Components/BackIcon";
import { render } from "@testing-library/react-native";

test("renders the BackIcon", () => {
  const tree = render(<BackIcon />);
  expect(tree).toMatchSnapshot();
});
