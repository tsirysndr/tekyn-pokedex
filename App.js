import AppNavigator from "@Navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { connectToDevTools } from "react-devtools-core";
import { API_URL, ENABLE_STORYBOOK } from "@env";
import Storybook from "./storybook";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@Themes/default";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";

if (__DEV__) {
  connectToDevTools({
    host: "localhost",
    port: 8097,
  });
}

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

function App() {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <StatusBar style="light" backgroundColor="#F4A261" />
          <SafeAreaView style={styles.container}>
            <AppNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </ApolloProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ENABLE_STORYBOOK ? Storybook : App;
