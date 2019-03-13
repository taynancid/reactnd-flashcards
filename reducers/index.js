import { LOAD_DECKS, CREATE_DECK, CREATE_QUESTION } from "../actions/index";

function decks(state = {}, action) {
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
