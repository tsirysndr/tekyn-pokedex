import Stats from "@Components/Stats";
import { render } from "@testing-library/react-native";

test("renders Stats", () => {
  const tree = render(
    <Stats />
  );
  expect(tree).toMatchSnapshot();
});
