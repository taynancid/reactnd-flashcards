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
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    };
  };

  addCard = title => {
    this.props.navigation.navigate("CreateQuestionView", { title });
  };

  startQuiz = questions => {
    Reactotron.log("quizview");
    this.props.navigation.navigate("QuizView", { questions });
  };

  render() {
    const { title, cardsCount, questions } = this.props;
    return (
      <View>
        <Button onPress={() => this.startQuiz(questions)} title="start quiz" />
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
    questions: deck.questions,
    cardsCount: deck.questions.length
  };
}

export default connect(mapStateToProps)(DeckView);
