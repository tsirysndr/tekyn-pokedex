import React from "react";
import Next from "@Components/Next";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";

storiesOf("Next", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => <Next />);
