import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import Reactotron from "reactotron-react-native";
import { handleLoadDecks, handleCreateDeck } from "../actions";
import { connect } from "react-redux";

//TODO : Style, remove componentDidMount if turns out to be not a container Component

class AddDeck extends Component {
  state = {
    title: ""
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleLoadDecks());
  }

  handleSubmit = e => {
    const { dispatch } = this.props;
    dispatch(handleCreateDeck(this.state.title));
  };

  render() {
    const { title } = this.state;
    Reactotron.log(this.props);
    return (
      <View>
        <TextInput
          placeholder="Deck Title"
          style={styles.textInput}
          onChangeText={text => this.setState({ title: text })}
        />
        <Button
          title="Add Deck"
          disabled={title === "" ? true : false}
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    paddingLeft: 6
  },
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  }
});

function mapStateToProps(state) {
  return {
    decks: state
  };
}

export default connect(mapStateToProps)(AddDeck);
