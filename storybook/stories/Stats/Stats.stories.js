import React from "react";
import Stats from "@Components/Stats";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";

storiesOf("Stats", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => <Stats />);
