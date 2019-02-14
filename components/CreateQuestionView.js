import React, { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import { handleCreateQuestion } from "../actions";
import Reactotron from "reactotron-react-native";

class CreateQuestionView extends Component {
  static navigationOptions = {
    title: "New Card"
  };

  state = {
    question: "",
    answer: ""
  };

  changeText = e => {
    this.setState(prevState => {
      return {
        ...prevState,
        [e.target]: e.text
      };
    });
  };

  handleAdd = e => {
    const { dispatch, deck } = this.props;
    dispatch(
      handleCreateQuestion(deck, this.state.question, this.state.answer)
    );
  };

  render() {
    const { deck } = this.props;
    return (
      <View>
        <Text>{deck}</Text>
        <Text>Question</Text>
        <TextInput
          style={{ height: 40, borderColor: "red", borderWidth: 3 }}
          onChangeText={text => this.changeText({ target: "question", text })}
          value={this.state.question}
        />
        <Text>Answer</Text>
        <TextInput
          style={{ height: 40, borderColor: "red", borderWidth: 3 }}
          onChangeText={text => this.changeText({ target: "answer", text })}
          value={this.state.answer}
        />
        <Button onPress={this.handleAdd} title="add" />
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    deck: props.navigation.state.params.title
  };
}

export default connect(mapStateToProps)(CreateQuestionView);
