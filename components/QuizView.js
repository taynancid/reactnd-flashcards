import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Reactotron from "reactotron-react-native";

class QuizView extends Component {
  static navigationOptions = {
    title: "Quiz"
  };

  state = {
    score: 0,
    currQuestion: 0,
    result: false
  };

  handlePress = e => {
    this.setState(prevState => {
      return {
        ...prevState,
        currQuestion: prevState.currQuestion + 1
      };
    });
  };

  render() {
    const { currQuestion } = this.state;
    const { questions } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        {currQuestion !== questions.length ? (
          <View style={styles.card}>
            <Text>{questions[currQuestion].question}</Text>
            <Text>{questions[currQuestion].answer}</Text>
            <Button onPress={this.handlePress} title="correct" />
            <Button onPress={this.handlePress} title="wrong" />
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
  btnContainer: {
    margin: 10
  },
  questionContainer: {
    flex: 1,

    alignItems: "center"
  },
  title: {
    fontSize: 25,
    color: "#006400"
  },
  card: {
    flex: 0.9,
    width: 300,
    backgroundColor: "#2E9298",
    borderRadius: 10,
    padding: 10
  }
});

export default connect()(QuizView);
