export const FETCH_DECKS = 'FETCH_DECKS';
export const FETCH_DECK_QUESTIONS = 'FETCH_DECK_QUESTIONS';
export const ADD_DECK_QUESTION = 'ADD_DECK_QUESTION';

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

export function fetchDeckQuestions(deckId){
  const decks = [
    {
      id: 1,
      questions: [
        {
          question: 'How tall is big ben?',
          answers: { meters: '96', feet: '315' },
        }, {
          question: 'How many countries are in Great Britain?',
          answers: 3,
        },
      ]
    },{
      id: 2,
      questions: []
    }
  ]
  const deckQuestions = decks.filter(d => d.id == deckId);
  return {
    type: FETCH_DECK_QUESTIONS,
    deckQuestions
  }
}

/**
 * @description Adds a new question to a deck
 * @param {number} deckId 
 * @param {string} question 
 * @param {string} answers 
 */
export function addDeckQuestion(deckId, question, answer){
  return {
    type: ADD_DECK_QUESTION,
    id: deckId,
    question,
    answer
  }
}