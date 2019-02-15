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
            <Text style={styles.textButtons}>Add a New Deck</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("DecksPage")}
          >
            <Text style={styles.textButtons}>See Decks </Text>
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
  textButtons: {
    fontSize: 20,
    margin: 10,
    color: "#006400"
  }
});

export default connect()(HomeScreen);
