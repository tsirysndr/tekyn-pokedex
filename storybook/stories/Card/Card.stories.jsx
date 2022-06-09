import React from "react";
import Card from "@Components/Card";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";

storiesOf("Card", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => <Card />);
