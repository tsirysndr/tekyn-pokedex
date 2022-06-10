import styled, { css } from "@emotion/native";
import React from "react";
import { View } from "react-native";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const TextInput = styled.TextInput`
  background-color: #fff;
  height: 50px;
  width: 250px;
  border-radius: 4px;
  color: #000;
  padding: 10px;
  ${({ fontsLoaded }) => css`
    font-family: "Roboto_700Bold";
  `}
`;

export default function TextField({ name, control, placeholder }) {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });
  const [fontsLoaded] = useFonts({ Roboto_700Bold });
  return (
    <View>
      <TextInput
        fontsLoaded
        placeholder={placeholder}
        placeholderTextColor={"#fff"}
        value={field.value}
        onChangeText={field.onChange}
      />
    </View>
  );
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
};
