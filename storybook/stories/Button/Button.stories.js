import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import Button, { ButtonText } from "@Components/Button";
import Text from "@Components/Text";
import CenterView from "../CenterView";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@Themes/default";

storiesOf("Button", module)
  .addDecorator((getStory) => (
    <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>
  ))
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Normal", () => (
    <>
      <Button onPress={action("clicked-text")} color='normal'>
        <ButtonText>{text("Button text", "Normal")}</ButtonText>
      </Button>
    </>
  ))
  .add("Fire", () => (
    <>
      <Button onPress={action("clicked-text")} color='fire'>
        <ButtonText>{text("Button text", "Fire")}</ButtonText>
      </Button>
    </>
  ))
  .add("Water", () => (
    <>
      <Button onPress={action("clicked-text")} color='water'>
        <ButtonText>{text("Button text", "Water")}</ButtonText>
      </Button>
    </>
  ))
  .add("Grass", () => (
    <>
      <Button onPress={action("clicked-text")} color='grass'>
        <ButtonText>{text("Button text", "Grass")}</ButtonText>
      </Button>
    </>
  ))
  .add("Electrique", () => (
    <>
      <Button onPress={action("clicked-text")} color='electrique'>
        <ButtonText>{text("Button text", "Electrique")}</ButtonText>
      </Button>
    </>
  ))
  .add("Ice", () => (
    <>
      <Button onPress={action("clicked-text")} color='ice'>
        <ButtonText>{text("Button text", "ice")}</ButtonText>
      </Button>
    </>
  )).add("Fight", () => (
    <>
      <Button onPress={action("clicked-text")} color='fight'>
        <ButtonText>{text("Button text", "Fight")}</ButtonText>
      </Button>
    </>
  ))
  .add("Poison", () => (
    <>
      <Button onPress={action("clicked-text")} color='poison'>
        <ButtonText>{text("Button text", "Poison")}</ButtonText>
      </Button>
    </>
  ))
  .add("Ground", () => (
    <>
      <Button onPress={action("clicked-text")} color='ground'>
        <ButtonText>{text("Button text", "Ground")}</ButtonText>
      </Button>
    </>
  ))
  .add("Flight", () => (
    <>
      <Button onPress={action("clicked-text")} color='flight'>
        <ButtonText>{text("Button text", "Flight")}</ButtonText>
      </Button>
    </>
  ))
  .add("Psychic", () => (
    <>
      <Button onPress={action("clicked-text")} color='psychic'>
        <ButtonText>{text("Button text", "Psychic")}</ButtonText>
      </Button>
    </>
  ))
  .add("Bug", () => (
    <>
      <Button onPress={action("clicked-text")} color='bug'>
        <ButtonText>{text("Button text", "Bug")}</ButtonText>
      </Button>
    </>
  ))
  .add("Rock", () => (
    <>
      <Button onPress={action("clicked-text")} color='rock'>
        <ButtonText>{text("Button text", "Rock")}</ButtonText>
      </Button>
    </>
  ))
  .add("Ghost", () => (
    <>
      <Button onPress={action("clicked-text")} color='ghost'>
        <ButtonText>{text("Button text", "Ghost")}</ButtonText>
      </Button>
    </>
  ))
  .add("Dark", () => (
    <>
      <Button onPress={action("clicked-text")} color='dark'>
        <ButtonText>{text("Button text", "Dark")}</ButtonText>
      </Button>
    </>
  ))
  .add("Dragon", () => (
    <>
      <Button onPress={action("clicked-text")} color='dragon'>
        <ButtonText>{text("Button text", "Dragon")}</ButtonText>
      </Button>
    </>
  ))
  .add("Steel", () => (
    <>
      <Button onPress={action("clicked-text")} color='steel'>
        <ButtonText>{text("Button text", "Steel")}</ButtonText>
      </Button>
    </>
  ))
  .add("Fairy", () => (
    <>
      <Button onPress={action("clicked-text")} color='fairy'>
        <ButtonText>{text("Button text", "fairy")}</ButtonText>
      </Button>
    </>
  ));
