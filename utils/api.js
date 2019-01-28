import { AsyncStorage } from "react-native";
import { FLASHCARDS_KEY, GetResults } from "./_decks";

export function fetchResults() {
  return AsyncStorage.getItem(FLASHCARDS_KEY).then(GetResults);
}

// export function submitEntry({ entry, key }) {
//   return AsyncStorage.mergeItem(
//     FLASHCARDS_KEY,
//     JSON.stringify({
//       [key]: entry
//     })
//   );
// }

// export function removeEntry(key) {
//   return AsyncStorage.getItem(FLASHCARDS_KEY).then(results => {
//     const data = JSON.parse(results);
//     data[key] = undefined;
//     delete data[key];
//     AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(data));
//   });
// }
