import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styled, { css } from "@emotion/native";
import DefaultText from "@Components/Text";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import BackIcon from "@Components/BackIcon";
import _ from "lodash";

const Text = styled(DefaultText)`
  font-size: 16px;
  color: #264653;
  flex: 1;
  text-align: center;
  margin-right: 50px;
  ${({ fontsLoaded }) =>
    fontsLoaded &&
    css`
      font-family: "Roboto_700Bold";
    `}
`;

const Container = styled.View`
  flex-direction: row;
  height: 50px;
  justify-content: center;
  align-items: center;
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
`;

const Separator = styled.View`
  height: 1px;
  background-color: #f4a261;
`;

const BackButton = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
`;

export default function Header({ title, onGoBack, backgroundColor }) {
  const [fontsLoaded] = useFonts({ Roboto_700Bold });
  return (
    <>
      <Container backgroundColor={backgroundColor}>
        <BackButton onPress={onGoBack}>
          <BackIcon height={20} width={20} />
        </BackButton>
        <Text fontsLoaded>{_.capitalize(title)}</Text>
      </Container>
      <Separator />
    </>
  );
}

Header.defaultProps = {
  title: "",
};

Header.propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  onGoBack: PropTypes.func.isRequired,
};
