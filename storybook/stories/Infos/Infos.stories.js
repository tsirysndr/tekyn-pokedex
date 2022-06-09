import React from "react";
import Infos from "@Components/Infos";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";
import { pokemon, pokemonspecies } from "../../../__mock__";

storiesOf("Infos", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <Infos pokemon={pokemon} pokemonSpecies={pokemonspecies} />
  ));
