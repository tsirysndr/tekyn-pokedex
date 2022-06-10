import React from "react";
import SearchForm from "@Components/SearchForm";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@Themes/default";

storiesOf("SearchForm", module)
  .addDecorator((getStory) => (
    <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>
  ))
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <SearchForm onSearch={() => {}} onShufflePokemon={() => {}} />
  ));
