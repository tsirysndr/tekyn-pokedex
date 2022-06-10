import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import { ActivityIndicator } from "react-native";
import styled from "@emotion/native";
import TextField from "@Components/TextField";
import Button, { ButtonText } from "@Components/Button";
import ShuffleIcon from "@Components/ShuffleIcon/ShuffleIcon";
import Pokeball from "@Images/pokeball.png";
import DefaultCard from "@Components/Card";
import Text from "@Components/Text";

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

const Label = styled(Text)`
  width: 250px;
  margin-bottom: 5px;
`;

export default function SearchForm({ onSearch, onShufflePokemon, loading }) {
  const { control, getValues, handleSubmit, reset } = useForm();
  const _onSearch = (data) => {
    if (getValues("nameOrId").length === 0) {
      return;
    }
    onSearch(data);
    reset({ nameOrId: "" });
  };
  const _onShufflePokemon = () => {
    onShufflePokemon();
    reset({ nameOrId: "" });
  };
  return (
    <Card>
      {loading && <ActivityIndicator size="large" color="#F4A261" />}
      {!loading && (
        <>
          <PokeballImage source={Pokeball} />
          <Label color="#8F8F8FDE">POKEMON NAME OR ID</Label>
          <TextField
            name="nameOrId"
            control={control}
            placeholder="name or id"
          />
          <ButtonGroup>
            <SearchButton
              onPress={handleSubmit(_onSearch)}
              accessibilityRole="button"
            >
              <ButtonText>Search!</ButtonText>
            </SearchButton>
            <RandomButton
              onPress={_onShufflePokemon}
              accessibilityRole="button"
            >
              <ShuffleIcon />
            </RandomButton>
          </ButtonGroup>
        </>
      )}
    </Card>
  );
}

SearchForm.defaultProps = {
  loading: false,
  onSearch: () => {},
  onShufflePokemon: () => {},
};

SearchForm.propTypes = {
  loading: PropTypes.bool,
  onSearch: PropTypes.func,
  onShufflePokemon: PropTypes.func,
};
