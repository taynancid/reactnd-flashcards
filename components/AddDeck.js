import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from "react-native";
import Reactotron from "reactotron-react-native";
import { handleLoadDecks, handleCreateDeck } from "../actions";
import { connect } from "react-redux";
import { globalStyles } from "../utils/globalStyles";

//TODO : Style, remove componentDidMount if turns out to be not a container Component

class AddDeck extends Component {
  static navigationOptions = {
    title: "New Deck"
  };

  state = {
    title: ""
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleLoadDecks());
  }

  handleSubmit = e => {
    const { dispatch, navigation } = this.props;
    dispatch(handleCreateDeck(this.state.title));
    navigation.goBack();
  };

  render() {
    const { title } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Deck Title"
          style={styles.textInput}
          onChangeText={text => this.setState({ title: text })}
        />
        <TouchableOpacity
          disabled={title === "" ? true : false}
          onPress={this.handleSubmit}
        >
          <Text
            style={
              title === "" ? globalStyles.buttonDisabled : globalStyles.button
            }
          >
            Add Deck
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    paddingLeft: 6,
    fontSize: 27
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
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
