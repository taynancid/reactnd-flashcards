import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import Reactotron from "reactotron-react-native";

class QuizView extends Component {
  state = {
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
    return (
      <View>
        <Text>quiz</Text>
      </View>
    );
  }
}

export default connect()(QuizView);
