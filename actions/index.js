export const FETCH_DECKS = 'FETCH_DECKS';
export const ADD_DECK_QUESTION = 'ADD_DECK_QUESTION';
export const ADD_DECK = 'ADD_DECK';
export const DELETE_DECK = 'DELECT_DECK';

/**
 * @description Gets all the decks id, title and card count.
 */
export function fetchDecks(){
  const decks = [
    {
      id: 1,
      title: 'Great Britain quiz',
      cardCount: 2,
      questions: [
        {id: 0, question: '1+1=?', answer: '2'},
        {id: 1, question: '1+5=?', answer: '6'}
      ],
    }
  ]
  return {
    type: FETCH_DECKS,
    decks
  }
}

/**
 * @description Adds a new question to a deck
 * @param {Object[]} newDeckQuestion - The new question
 * @param {number} newDeckQuestion[].deckId - The deck id of the deck to add to
 * @param {number} newDeckQuestion[].questionId - The id of the new question
 * @param {string} newDeckQuestion[].question - The question to add
 * @param {string} newDeckQuestion[].answer - The answer to add
 */
export function addDeckQuestion(newDeckQuestion){
  console.log(newDeckQuestion)
  return {
    type: ADD_DECK_QUESTION,
    id: newDeckQuestion.deckId,
    questionId: newDeckQuestion.questionId,
    question: newDeckQuestion.question,
    answer: newDeckQuestion.answer
  }
}

/**
 * @description Adds a new deck
 * @param {Object[]} newDeck - The new deck
 * @param {number} newDeck[].id - The id of the new deck
 * @param {string} newDeck[].title - The title of the new deck
 */
export function addDeck(newDeck){
  return {
    type: ADD_DECK,
    newDeckId: newDeck.id,
    newDeckTitle: newDeck.title,
  }
}

/**
 * @description Deletes a deck
 * @param {number} deckId - The id of the deck to be deleted
 */
export function deleteDeck(deckId){
  return {
    type: DELETE_DECK,
    deleteDeckId: deckId
  }
}