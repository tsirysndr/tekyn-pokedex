import ShuffleIcon from "@Components/ShuffleIcon";
import { render } from "@testing-library/react-native";

test("renders the ShuffleIcon", () => {
  const tree = render(
    <ShuffleIcon />
  );
  expect(tree).toMatchSnapshot();
});
