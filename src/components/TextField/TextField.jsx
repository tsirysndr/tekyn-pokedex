import styled from "@emotion/native";
import React from "react";
import { View } from "react-native";

const TextInput = styled.TextInput`
  background-color: #fff;
  height: 50px;
  width: 250px;
  border-radius: 4px;
  color: #000;
  padding: 10px;
`;

export default function TextField(props) {
  return <View>
    <TextInput  />
  </View>;
}