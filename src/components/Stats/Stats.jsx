import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "@emotion/native";
import { View } from "react-native";
import DefaultText from "@Components/Text";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import _ from "lodash";

const Container = styled.View`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: #c4c4c4;
  padding: 4px;
  padding-bottom: 0;
`;

const Cell = styled.View`
  flex: 1;
  border-bottom-width: 0.5px;
  border-bottom-color: #c4c4c4;
  border-right-width: 0.2px;
  border-right-color: #c4c4c4;
  ${({ active }) =>
    active &&
    css`
      background-color: #38a8d5;
    `}
`;

const Indicators = styled.View`
  flex-direction: row;
`;

const Text = styled(DefaultText)`
  font-family: "Roboto_700Bold";
  font-size: 6px;
`;

const Centered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 10px;
`;

const WhiteBrackground = styled.View`
  flex: 1;
  background-color: #fff;
  flex-direction: row;
`;

const Level = ({ value }) => {
  const [fontsLoaded] = useFonts({ Roboto_700Bold });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      <Cell active={value >= 15}></Cell>
      <Cell active={value >= 14}></Cell>
      <Cell active={value >= 13}></Cell>
      <Cell active={value >= 12}></Cell>
      <Cell active={value >= 11}></Cell>
      <Cell active={value >= 10}></Cell>
      <Cell active={value >= 9}></Cell>
      <Cell active={value >= 8}></Cell>
      <Cell active={value >= 7}></Cell>
      <Cell active={value >= 6}></Cell>
      <Cell active={value >= 5}></Cell>
      <Cell active={value >= 4}></Cell>
      <Cell active={value >= 3}></Cell>
      <Cell active={value >= 2}></Cell>
      <Cell active={value >= 1}></Cell>
    </View>
  );
};

Level.defaultProps = {
  value: 0,
};

Level.propTypes = {
  value: PropTypes.number,
};

export default function Stats(props) {
  const computeValue = (x) => Math.floor(_.get(x, "base_stat", 0) / 10);
  return (
    <Container {...props}>
      <WhiteBrackground>
        <Level
          value={computeValue(
            props.pokemonstats.find((x) => x["pokemon_v2_stat"].name === "hp")
          )}
        />
        <Level
          value={computeValue(
            props.pokemonstats.find(
              (x) => x["pokemon_v2_stat"].name === "attack"
            )
          )}
        />
        <Level
          value={computeValue(
            props.pokemonstats.find(
              (x) => x["pokemon_v2_stat"].name === "defense"
            )
          )}
        />
        <Level
          value={computeValue(
            props.pokemonstats.find(
              (x) => x["pokemon_v2_stat"].name === "special-attack"
            )
          )}
        />
        <Level
          value={computeValue(
            props.pokemonstats.find(
              (x) => x["pokemon_v2_stat"].name === "special-defense"
            )
          )}
        />
        <Level
          value={computeValue(
            props.pokemonstats.find(
              (x) => x["pokemon_v2_stat"].name === "speed"
            )
          )}
        />
      </WhiteBrackground>
      <Indicators>
        <Centered>
          <Text color="#000">HP</Text>
        </Centered>
        <Centered>
          <Text color="#000">Atack</Text>
        </Centered>
        <Centered>
          <Text color="#000">Defense</Text>
        </Centered>
        <Centered>
          <Text color="#000">Spe A</Text>
        </Centered>
        <Centered>
          <Text color="#000">Spe D</Text>
        </Centered>
        <Centered>
          <Text color="#000">Speed</Text>
        </Centered>
      </Indicators>
    </Container>
  );
}

Stats.defaultProps = {
  height: 346,
  width: 215,
  pokemonstats: [],
};

Stats.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  pokemonstats: PropTypes.array.isRequired,
};
