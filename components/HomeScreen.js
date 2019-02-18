import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
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
        <Text style={styles.title}>Flashcards</Text>
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AddDeck")}
          >
            <Text style={styles.button}>New Deck</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("DecksPage")}
          >
            <Text style={styles.button}>See Decks</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  title: {
    fontSize: 40,
    color: "#006400"
  },
  button: {
    backgroundColor: "#006400",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 12,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    overflow: "hidden",
    padding: 12,
    textAlign: "center",
    margin: 7
  }
});

export default connect()(HomeScreen);
