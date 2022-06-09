import React from "react";
import Stats from "@Components/Stats";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";
import { pokemonstats } from "../../../__mock__";

storiesOf("Stats", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("empty", () => <Stats />)
  .add("with data", () => <Stats pokemonstats={pokemonstats} />);
