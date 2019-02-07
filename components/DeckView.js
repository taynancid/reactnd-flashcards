import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import Reactotron from "reactotron-react-native";

class DeckView extends Component {
  addCard = title => {
    Reactotron.log(title);
  };

  render() {
    const { title, cardsCount } = this.props;
    return (
      <View>
        <Button onPress={this.startQuiz} title="start quiz" />
        <Button onPress={() => this.addCard(title)} title="add a card" />
        <Text>{title}</Text>
        <Text>{cardsCount}</Text>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  const title = props.navigation.state.params.title;

  const decks = Object.values(state);
  const deck = decks.find(deck => deck.title === title);

  return {
    title: title,
    cardsCount: deck.questions.length
  };
}

export default connect(mapStateToProps)(DeckView);
