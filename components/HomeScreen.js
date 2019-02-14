import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { handleLoadDecks } from "../actions";

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleLoadDecks());
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate("AddDeck")}
          title="Add a New Deck"
        />
        <Button
          onPress={() => this.props.navigation.navigate("DecksPage")}
          title="See Decks"
        />
      </View>
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

export default connect()(HomeScreen);
