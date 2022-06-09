import Text from "@Components/Text";
import { render } from "@testing-library/react-native";

test("renders Text", () => {
  const tree = render(
    <Text>Hello</Text>
  );
  expect(tree).toMatchSnapshot();
});
