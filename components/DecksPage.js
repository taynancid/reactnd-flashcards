import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { receiveDecks } from "../actions";
import { fetchResults } from "../utils/api";

class DecksPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    fetchResults()
      .then(decks => dispatch(receiveDecks(decks)))
      .then(decks => console.log(decks));
  }

  render() {
    console.log(this.props);
    // const { decks } = this.props;
    return (
      <View>
        <Text>vai toma</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(DecksPage);
