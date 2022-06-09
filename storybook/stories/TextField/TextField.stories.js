import React from "react";
import TextField from "@Components/TextField";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";
import { useForm } from "react-hook-form";

const TextFieldWrapper = () => {
  const { control } = useForm();
  return <TextField control={control} name="nameOrId"/>
}

storiesOf("TextField", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => <TextFieldWrapper />);
