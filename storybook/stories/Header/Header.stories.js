import React from "react";
import Header from "@Components/Header/Header";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";
import { text } from "@storybook/addon-knobs";

storiesOf("Header", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <Header
      backgroundColor="rgba(255, 255, 255, 0.8)"
      title={text("Title", "Charizard #006")}
    ></Header>
  ));
