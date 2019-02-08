import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import Reactotron from "reactotron-react-native";

class QuizView extends Component {
  state = {
    score: 0,
    currQuestion: 0,
    questions: [],
    result: false
  };

  componentDidMount() {
    this.setState(prevState => {
      return {
        ...prevState,
        questions: this.props.navigation.state.params.questions
      };
    });
  }

  render() {
    const { currQuestion } = this.state;
    const { questions } = this.props.navigation.state.params;
    return (
      <View>
        <Text>{questions[currQuestion].question}</Text>
        <Text>{questions[currQuestion].answer}</Text>
        <Button title="correct" />
        <Button title="wrong" />
      </View>
    );
  }
}

export default connect()(QuizView);
