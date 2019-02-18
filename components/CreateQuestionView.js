import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { handleCreateQuestion } from "../actions";
import { globalStyles } from "../utils/globalStyles";

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
    const { dispatch, deck, navigation } = this.props;
    dispatch(
      handleCreateQuestion(deck, this.state.question, this.state.answer)
    );
    navigation.goBack();
  };

  render() {
    const { deck } = this.props;
    const { question, answer } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.deckName}>{deck}</Text>
        <View>
          <TextInput
            placeholder="Question"
            style={styles.textInput}
            onChangeText={text => this.changeText({ target: "question", text })}
            value={this.state.question}
          />
          <TextInput
            placeholder="Answer"
            style={styles.textInput}
            onChangeText={text => this.changeText({ target: "answer", text })}
            value={this.state.answer}
          />
        </View>
        <TouchableOpacity
          onPress={this.handleAdd}
          disabled={question === "" && answer === ""}
        >
          <Text style={globalStyles.button}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    paddingLeft: 6,
    fontSize: 27,
    margin: 20
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  },
  textButton: {
    fontSize: 20,
    textAlign: "center",
    color: "#006400"
  },
  deckName: {
    justifyContent: "flex-end",
    fontSize: 30,
    textAlign: "center"
  }
});

function mapStateToProps(state, props) {
  return {
    deck: props.navigation.state.params.title
  };
}

export default connect(mapStateToProps)(CreateQuestionView);
