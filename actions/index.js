export const FETCH_DECKS = 'FETCH_DECKS';
export const ADD_DECK_QUESTION = 'ADD_DECK_QUESTION';

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
 * @param {number} deckId 
 * @param {string} question 
 * @param {string} answer
 */
export function addDeckQuestion(deckId, question, answer){
  return {
    type: ADD_DECK_QUESTION,
    id: deckId,
    question,
    answer
  }
}