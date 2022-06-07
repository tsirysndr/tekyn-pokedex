import React from "react";
import Evolution from "@Components/Evolution";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";

storiesOf("Evolution", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => <Evolution id={6}/>);
