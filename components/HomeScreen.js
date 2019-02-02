import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class HomeScreen extends Component {
  goAddDeck = e => {
    console.log("oi");
  };

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

export default HomeScreen;
