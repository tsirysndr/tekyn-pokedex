import React from "react";
import Header from "@Components/Header/Header";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";

storiesOf("Header", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => <Header></Header>);
