import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import {
  handleLoadDecks,
  handleCreateDeck,
  handleCreateQuestion
} from "../actions";
import Reactotron from "reactotron-react-native";

class DecksPage extends Component {
  state = {
    decksArr: []
  };

  componentDidMount() {
    const { decks } = this.props;
    const arr = Object.values(decks);
    this.setState(prevState => {
      return {
        ...prevState,
        decksArr: arr
      };
    });
  }

  selectDeck = title => {
    Reactotron.log("title selected: ", title);
    this.props.navigation.navigate("DeckView", { title });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.decksArr}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.title}
              style={styles.flatview}
              onPress={() => this.selectDeck(item.title)}
            >
              <Text style={styles.name}>{item.title}</Text>
              <Text styles={styles.cards}>{`${
                item.questions.length
              } cards`}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  flatview: {
    justifyContent: "center",
    paddingTop: 30,
    borderRadius: 2
  },
  name: {
    fontSize: 18
  },
  cards: {
    color: "red"
  }
});

export default connect(mapStateToProps)(DecksPage);
