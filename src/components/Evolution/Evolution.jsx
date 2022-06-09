import React from "react";
import PropTypes from "prop-types";
import { SvgUri } from "react-native-svg";
import styled from "@emotion/native";
import { POKEMON_IMAGE_URL } from "src/constants/urls";
import zeropad from "zeropad";
import Next from "@Components/Next";
import { Image, View, Dimensions } from "react-native";
import Card from "@Components/Card";
import Stats from "@Components/Stats";
import DefaultButton, {
  ButtonText as DefaultButtonText,
} from "@Components/Button";
import Pokemon from "@Components/Pokemon";
import _ from "lodash";
import Text from "@Components/Text";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { ScrollView } from "react-native";
import Infos from "@Components/Infos";
import { StyleSheet } from "react-native";

const Container = styled.View`
  flex: 1;
`;

const ButtonGroup = styled.View`
  flex-direction: row;
`;

const Button = styled(DefaultButton)`
  height: 30px;
  width: 70px;
  border-radius: 10px;
  margin-right: 15px;
`;

const ButtonText = styled(DefaultButtonText)`
  font-size: 12px;
`;

const InfosWrapper = styled.View`
  flex: 1;
  align-items: center;
`;

const PokemonWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StatsWrapper = styled.View`
  flex: 1;
  align-items: center;
`;

const PokemonDetails = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const Separator = (props) => <Next height={44.44} width={30} />;

const EvolutionChain = styled.View`
  flex: 0.5;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PokemonImageWrapper = styled.View`
  flex: 1;
  align-items: center;
`;

export default function Evolution(props) {
  const height =
    Dimensions.get("window").height > Dimensions.get("window").width
      ? Dimensions.get("window").width
      : Dimensions.get("window").height;
  const imgSize = (height * 38) / 100;
  const statsSize = imgSize - 10;
  const infosSize = imgSize - 20;

  return (
    <Container>
      <PokemonDetails>
        <StatsWrapper>
          <Stats
            style={{ borderRadius: 0 }}
            height={statsSize - 50}
            width={statsSize}
            pokemonstats={_.get(props.pokemon, "pokemon_v2_pokemonstats", [])}
          />
        </StatsWrapper>
        <PokemonImageWrapper>
          <Image
            style={{ height: imgSize, width: imgSize }}
            resizeMode="cover"
            source={{ uri: `${POKEMON_IMAGE_URL}/${zeropad(props.id, 3)}.png` }}
          />
          <ButtonGroup>
            {_.get(props.pokemon, "pokemon_v2_pokemontypes", []).map(
              (item, index) => (
                <Button
                  key={index}
                  color={_.get(item, "pokemon_v2_type.name", "fire")}
                >
                  <ButtonText>
                    {_.capitalize(
                      _.replace(
                        _.replace(
                          _.replace(
                            _.get(item, "pokemon_v2_type.name", "fire"),
                            "flying",
                            "flight"
                          ),
                          "fighting",
                          "fight"
                        ),
                        "electric",
                        "electrique"
                      )
                    )}
                  </ButtonText>
                </Button>
              )
            )}
          </ButtonGroup>
        </PokemonImageWrapper>
        <InfosWrapper>
          <Infos
            size={infosSize}
            pokemon={props.pokemon}
            pokemonSpecies={props.pokemonSpecies}
          />
        </InfosWrapper>
      </PokemonDetails>
      <EvolutionChain>
        <ScrollView
          contentContainerStyle={styles.scrollview}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {props.pokemonSpecies.map((item, index) => (
            <PokemonWrapper key={index}>
              <Pokemon
                id={item.id}
                name={_.get(item, "pokemon_v2_pokemons.0", {}).name}
              />
              {index + 1 < props.pokemonSpecies.length && <Separator />}
            </PokemonWrapper>
          ))}
        </ScrollView>
      </EvolutionChain>
    </Container>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

Evolution.defaultProps = {
  pokemonSpecies: [],
};

Evolution.propTypes = {
  id: PropTypes.number.isRequired,
  pokemonSpecies: PropTypes.array,
  pokemon: PropTypes.object.isRequired,
};
