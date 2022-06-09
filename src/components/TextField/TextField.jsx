import styled from "@emotion/native";
import React from "react";
import { View } from "react-native";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const TextInput = styled.TextInput`
  font-family: "Roboto_700Bold";
  background-color: #fff;
  height: 50px;
  width: 250px;
  border-radius: 4px;
  color: #000;
  padding: 10px;
`;

export default function TextField({ name, control }) {
 const { field } = useController({
    control,
    defaultValue: '',
    name,
  });
  const [fontsLoaded] = useFonts({ Roboto_700Bold });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <TextInput value={field.value} onChangeText={field.onChange} />
    </View>
  );
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
}
