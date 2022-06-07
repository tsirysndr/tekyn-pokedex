import React from "react";
import TextField from "@Components/TextField";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";

storiesOf("TextField", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => <TextField />);