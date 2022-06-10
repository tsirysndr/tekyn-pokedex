import { render, waitFor } from "@testing-library/react-native";
import Button from "@Components/Button";
import { Text } from "react-native";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@Themes/default";

test("renders default Button", () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Button>
        <Text>Default Button</Text>
      </Button>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});

test("renders normal button", async () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Button color="fire">
        <Text>Normal Button</Text>
      </Button>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});


test("renders fire button", async () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Button color="fire">
        <Text>Fire Button</Text>
      </Button>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});


test("renders water button", async () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Button color="water">
        <Text>Water Button</Text>
      </Button>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});

test("renders grass button", async () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Button color="grass">
        <Text>Grass Button</Text>
      </Button>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});

test("renders electric button", async () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Button color="electric">
        <Text>Electric Button</Text>
      </Button>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});


test("renders ice button", async () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Button color="ice">
        <Text>Ice Button</Text>
      </Button>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});

test("renders fight button", async () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Button color="fight">
        <Text>Flight Button</Text>
      </Button>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});

test("renders poison button", async () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Button color="poison">
        <Text>Poison Button</Text>
      </Button>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});

test("renders ground button", async () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Button color="ground">
        <Text>Ground Button</Text>
      </Button>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});

test("renders flight button", async () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Button color="flight">
        <Text>Flight Button</Text>
      </Button>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});

test("renders psychic button", async () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Button color="psychic">
        <Text>Psychic Button</Text>
      </Button>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});

test("renders bug button", async () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Button color="bug">
        <Text>Bug Button</Text>
      </Button>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});

test("renders rock button", async () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Button color="rock">
        <Text>Rock Button</Text>
      </Button>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});

test("renders ghost button", async () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Button color="ghost">
        <Text>Ghost Button</Text>
      </Button>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});


test("renders dragon button", async () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Button color="dragon">
        <Text>dragon Button</Text>
      </Button>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});

test("renders dark button", async () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Button color="dark">
        <Text>Dark Button</Text>
      </Button>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});

test("renders steel button", async () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Button color="steel">
        <Text>Steel Button</Text>
      </Button>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});


test("renders fairy button", async () => {
  const tree = render(
    <ThemeProvider theme={theme}>
      <Button color="fairy">
        <Text>Fairy Button</Text>
      </Button>
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});




