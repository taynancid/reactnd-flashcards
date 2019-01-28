import { AsyncStorage } from "react-native";

export const FLASHCARDS_KEY = "Flashcards::key";

function setDummyData() {
  let dummyData = {
    Decks: {
      React: {
        title: "React",
        questions: [
          {
            question: "What is React?",
            answer: "A library for managing user interfaces"
          },
          {
            question: "Where do you make Ajax requests in React?",
            answer: "The componentDidMount lifecycle event"
          }
        ]
      },
      JavaScript: {
        title: "JavaScript",
        questions: [
          {
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared."
          }
        ]
      }
    }
  };
  AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(dummyData));

  return dummyData;
}

export function GetResults(results) {
  return results ? setDummyData() : JSON.parse(results);
}
