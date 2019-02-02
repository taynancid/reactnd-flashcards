import React from "react";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { StyleSheet, Text, View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import HomeScreen from "./components/HomeScreen";
import DecksPage from "./components/DecksPage";
import AddDeck from "./components/AddDeck";
if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    AddDeck: { screen: AddDeck },
    DecksPage: { screen: DecksPage }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

const loggerMiddleware = createLogger();

export default class App extends React.Component {
  render() {
    return (
      <Provider
        store={createStore(
          reducer,
          applyMiddleware(thunkMiddleware, loggerMiddleware)
        )}
      >
        <AppContainer />
      </Provider>
    );
  }
}
