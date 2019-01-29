import { AsyncStorage } from "react-native";

import initialDecks from "../utils/_decks";

export const FLASHCARDS_KEY = "Flashcards::store";
import Reactotron from "reactotron-react-native";

export const LOAD_DECKS = "LOAD_DECKS";
export const CREATE_DECK = "CREATE_DECK";
export const CREATE_QUESTION = "CREATE_QUESTION";

// HELPERS

const getDataFromStorage = async () => {
  const data = await AsyncStorage.getItem(FLASHCARDS_KEY);
  return JSON.parse(data);
};

const saveDataToStorage = async data => {
  const parsed = JSON.stringify(data);
  await AsyncStorage.setItem(FLASHCARDS_KEY, parsed);
};

// ACTIONS

const loadDecks = decks => {
  return {
    type: LOAD_DECKS,
    decks
  };
};

export function handleLoadDecks() {
  return async dispatch => {
    const data = await getDataFromStorage();
    Reactotron.log("data from storage: ", data);
    if (!data) {
      Reactotron.log(JSON.stringify(initialDecks));
      await saveDataToStorage(initialDecks);
      dispatch(loadDecks(initialDecks.decks));
    } else {
      Reactotron.log("has data: ", data.decks);
      dispatch(loadDecks(data.decks));
    }
  };
}

const createDeck = deck => {
  return {
    type: CREATE_DECK,
    deck
  };
};

export function handleCreateDeck(title) {
  return async dispatch => {
    const data = await getDataFromStorage();
    Reactotron.log("data from storage: ", data);
    const deck = {
      [title]: {
        title,
        questions: []
      }
    };
    await saveDataToStorage({
      ...data,
      decks: {
        ...data.decks,
        ...deck
      }
    });
    dispatch(createDeck(deck));
  };
}

const createQuestion = ({ deck, question }) => {
  return {
    type: CREATE_QUESTION,
    deck,
    question
  };
};

export function handleCreateQuestion(deck, question, answer) {
  return async dispatch => {
    const data = await getDataFromStorage();
    const newQuestion = { question, answer };
    await saveDataToStorage({
      ...data,
      decks: {
        ...data.decks,
        [deck]: {
          ...data.decks[deck],
          questions: [...data.decks[deck].questions, newQuestion]
        }
      }
    });
    dispatch(
      createQuestion({
        deck,
        question: newQuestion
      })
    );
  };
}
