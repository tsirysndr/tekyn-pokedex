import GradientBackground from "@Components/GradientBackground";
import { render } from "@testing-library/react-native";

test("renders the GradientBackground", () => {
  const tree = render(<GradientBackground />);
  expect(tree).toMatchSnapshot();
});
