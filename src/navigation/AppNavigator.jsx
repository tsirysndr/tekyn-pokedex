import React from "react";
import SearchPage from "@Screens/SearchPage";
import PokemonPage from "@Screens/PokemonPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="SearchPage"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="SearchPage" component={SearchPage} />
    <Stack.Screen name="PokemonPage" component={PokemonPage} />
  </Stack.Navigator>
);

export default AppNavigator;
