import React from "react";
import Infos from "@Components/Infos";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";

storiesOf("Infos", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => <Infos />);
