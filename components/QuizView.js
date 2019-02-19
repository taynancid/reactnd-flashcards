import React, { Component, Fragment } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import Reactotron from "reactotron-react-native";

class QuizView extends Component {
  static navigationOptions = {
    title: "Quiz"
  };

  state = {
    score: 0,
    currQuestion: 0,
    showAnswer: false,
    result: false
  };

  handlePress = result => {
    this.setState(prevState => {
      return {
        ...prevState,
        score: result ? prevState.score + 1 : prevState.score,
        showAnswer: false,
        currQuestion: prevState.currQuestion + 1
      };
    });
  };

  handleShowAnswer = e => {
    Reactotron.log(e);
    this.setState(prevState => {
      return {
        ...prevState,
        showAnswer: true
      };
    });
  };

  render() {
    const { currQuestion, showAnswer } = this.state;
    const { questions } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        {currQuestion !== questions.length ? (
          <View style={styles.card}>
            <Text style={styles.question}>
              {questions[currQuestion].question}
            </Text>
            {showAnswer ? (
              <Text style={styles.answer}>
                {questions[currQuestion].answer}
              </Text>
            ) : (
              <TouchableOpacity
                style={styles.icon}
                onPress={() => this.handleShowAnswer()}
              >
                <Entypo name="eye" size={50} />
              </TouchableOpacity>
            )}
            <View style={styles.btnContainer}>
              {showAnswer === true && (
                <Fragment>
                  <TouchableOpacity onPress={() => this.handlePress(true)}>
                    <Text style={styles.correctBtn}>Correct</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.handlePress(false)}>
                    <Text style={styles.wrongBtn}>Wrong</Text>
                  </TouchableOpacity>
                </Fragment>
              )}
            </View>
          </View>
        ) : (
          <View>
            <Text>result</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  question: {
    textAlign: "center",
    fontSize: 30
  },
  answer: {
    textAlign: "center",
    fontSize: 20
  },
  icon: {
    alignItems: "center"
  },
  card: {
    flex: 0.9,
    width: 300,
    backgroundColor: "#2E9298",
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between"
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  correctBtn: {
    backgroundColor: "green",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 12,
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    overflow: "hidden",
    padding: 7,
    textAlign: "center",
    margin: 3,
    width: 100
  },
  wrongBtn: {
    backgroundColor: "red",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 12,
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    overflow: "hidden",
    padding: 7,
    textAlign: "center",
    margin: 3,
    width: 100
  }
});

export default connect()(QuizView);
