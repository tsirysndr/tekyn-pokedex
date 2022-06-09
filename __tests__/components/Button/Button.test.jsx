import { render } from "@testing-library/react-native";
import Button from "@Components/Button";

test("renders the Button", () => {
  const tree = render(<Button />);
  expect(tree).toMatchSnapshot();
});
