import React from "react";
import Pokemon from "@Components/Pokemon";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";

storiesOf("Pokemon", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Charmander", () => <Pokemon id={4} name='Charmander' />)
  .add("Charmeleon", () => <Pokemon id={5} name='Charmeleon' />)
  .add("Charizard", () => <Pokemon id={6} name='Charizard' />)
  .add("Drowzee", () => <Pokemon id={96} name='Drowzee' />)
  .add("Hypno", () => <Pokemon id={97} name='Hypno' />);