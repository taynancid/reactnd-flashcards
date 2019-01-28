import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import DecksPage from "./components/DecksPage";
import { receiveDecks } from "./actions";
import { fetchResults } from "./utils/api";

export default class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    fetchResults()
      .then(decks => dispatch(receiveDecks(decks)))
      .then(decks => console.log(decks));
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <DecksPage />
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
