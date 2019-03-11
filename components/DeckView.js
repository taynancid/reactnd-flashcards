import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { globalStyles } from "../utils/globalStyles";
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
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => this.startQuiz(questions)}
            disabled={cardsCount < 1}
          >
            <Text
              style={
                cardsCount < 1
                  ? globalStyles.buttonDisabled
                  : globalStyles.button
              }
            >
              Start Quiz
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addCard(title)}>
            <Text style={globalStyles.button}>Add Card</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.title}>{`${
            this.props.cardsCount
          } Questions`}</Text>
          <FlatList
            data={this.props.questions}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Text style={styles.question}>{item.question}</Text>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  btnContainer: {
    margin: 10
  },
  questionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 25,
    color: "#006400"
  },
  question: {
    backgroundColor: "#DDDDDD",
    borderColor: "white",
    fontSize: 15,
    overflow: "hidden",
    padding: 12,
    textAlign: "center",
    margin: 7,
    width: 300
  }
});

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
