import React from "react";
import Pokemon from "@Components/Pokemon";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";

storiesOf("Pokemon", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Pikachu", () => (
    <Pokemon id={25} name="Pikachu" fontSize={15} size={200} />
  ))
  .add("Charmander", () => (
    <Pokemon id={4} name="Charmander" fontSize={15} size={200} />
  ))
  .add("Charmeleon", () => (
    <Pokemon id={5} name="Charmeleon" fontSize={15} size={200} />
  ))
  .add("Charizard", () => (
    <Pokemon id={6} name="Charizard" fontSize={15} size={200} />
  ))
  .add("Drowzee", () => (
    <Pokemon id={96} name="Drowzee" fontSize={15} size={200} />
  ))
  .add("Hypno", () => (
    <Pokemon id={97} name="Hypno" fontSize={15} size={200} />
  ));
