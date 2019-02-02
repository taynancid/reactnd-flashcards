import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import {
  handleLoadDecks,
  handleCreateDeck,
  handleCreateQuestion
} from "../actions";
import Reactotron from "reactotron-react-native";

class DecksPage extends Component {
  handlePress = e => {
    const { dispatch } = this.props;
    dispatch(
      handleCreateQuestion("Homemaranha", "Qual a cor do uniforme", "preto")
    );
  };

  componentDidMount() {
    Reactotron.log(this.props);
  }

  render() {
    return (
      <View>
        <Button title="button" onPress={this.handlePress} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(DecksPage);
