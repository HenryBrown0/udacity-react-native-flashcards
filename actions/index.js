export const FETCH_DECKS = 'FETCH_DECKS';
export const ADD_DECK_QUESTION = 'ADD_DECK_QUESTION';
export const ADD_DECK = 'ADD_DECK';

/**
 * @description Gets all the decks id, title and card count.
 */
export function fetchDecks(){
  const decks = [
    {
      id: 1,
      title: 'Great Britain quiz',
      cardCount: 0,
      questions: [],
    },{
      id: 2,
      title: null,
      cardCount: 0,
      questions: [],
    }
  ]
  return {
    type: FETCH_DECKS,
    decks
  }
}

/**
 * @description Adds a new question to a deck
 * @param {number} deckId Id of the deck to add to
 * @param {string} question Question to add
 * @param {string} answer Answer to add
 */
export function addDeckQuestion(deckId, question, answer){
  return {
    type: ADD_DECK_QUESTION,
    id: deckId,
    question,
    answer
  }
}

/**
 * @description Adds a new deck
 * @param {string} name Name of the new deck
 */
export function addDeck(name){
  return {
    type: ADD_DECK,
    newDeck: {
      id: 3,
      title: name,
      cardCount: 0,
      questions: [],
    }
  }
}