import { LOAD_DECKS, CREATE_DECK, CREATE_QUESTION } from "../actions/index";
import Reactotron from "reactotron-react-native";

function decks(state = {}, action) {
  Reactotron.log("passou");
  Reactotron.log(action.type);
  switch (action.type) {
    case LOAD_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case CREATE_DECK:
      return {
        ...state,
        ...action.deck
      };
    case CREATE_QUESTION:
      console.log("action: ", action);
      return {
        ...state,
        [action.deck]: {
          ...state[action.deck],
          questions: [...state[action.deck].questions, action.question]
        }
      };

    default:
      return state;
  }
}

export default decks;
