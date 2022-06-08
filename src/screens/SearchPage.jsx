import DefaultCard from "@Components/Card";
import GradientBackground from "@Components/GradientBackground";
import Text from "@Components/Text";
import { useEvolutionchain } from "@Hooks/evolutionchain";
import { usePokemon } from "@Hooks/pokemon";
import React, { useEffect } from "react";
import Pokeball from "@Images/pokeball.png";
import styled from "@emotion/native";
import TextField from "@Components/TextField";
import Button, { ButtonText } from "@Components/Button";
import ShuffleIcon from "@Components/ShuffleIcon/ShuffleIcon";

const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 250px;
  margin-top: 25px;
`;

const Card = styled(DefaultCard)`
  justify-content: center;
  align-items: center;
`;

const PokeballImage = styled.Image`
  height: 50px;
  width: 50px;
  margin-bottom: 30px;
`;

const SearchButton = styled(Button)`
  height: 45px;
  width: 150px;
  border-radius: 24px;
`;

const RandomButton = styled(Button)`
  height: 45px;
  width: 45px;
  border-radius: 24px;
`;

export default function SearchPage() {
  /*
  const { evolutionChain } = useEvolutionchain(6);
  const { searchPokemon } = usePokemon();
  useEffect(() => {
    searchPokemon(6)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  */

  return (
    <GradientBackground>
      <Card>
        <PokeballImage source={Pokeball} />
        <Text color="#8F8F8FDE" style={{ width: 250, marginBottom: 5}}>POKEMON NAME OR ID</Text>
        <TextField />
        <ButtonGroup>
          <SearchButton>
            <ButtonText>Search!</ButtonText>
          </SearchButton>
          <RandomButton>
            <ShuffleIcon />
          </RandomButton>
        </ButtonGroup>
      </Card>
    </GradientBackground>
  );
}
