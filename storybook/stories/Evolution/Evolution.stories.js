import React from "react";
import Evolution from "@Components/Evolution";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";
import { pokemon, pokemonspecies } from "./data";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@Themes/default";

storiesOf("Evolution", module)
  .addDecorator((getStory) => (
    <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>
  ))
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <Evolution id={158} pokemon={pokemon} pokemonSpecies={pokemonspecies} />
  ));
