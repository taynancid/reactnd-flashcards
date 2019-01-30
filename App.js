import React from "react";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { StyleSheet, Text, View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import DecksPage from "./components/DecksPage";
import AddDeck from "./components/AddDeck";
if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

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
        <View style={styles.container}>
          <AddDeck />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
