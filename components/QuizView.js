import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import Reactotron from "reactotron-react-native";

class QuizView extends Component {
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
      <View>
        {currQuestion !== questions.length ? (
          <View>
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

export default connect()(QuizView);
