import React from "react";
import SearchForm from "@Components/SearchForm";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";

storiesOf("SearchForm", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => <SearchForm />);
