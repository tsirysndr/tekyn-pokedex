import Next from "@Components/Next";
import { render } from "@testing-library/react-native";

test("renders Next", () => {
  const tree = render(
    <Next />
  );
  expect(tree).toMatchSnapshot();
});
