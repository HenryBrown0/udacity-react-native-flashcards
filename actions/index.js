export const FETCH_DECKS = 'FETCH_DECKS';
export const FETCH_DECK_QUESTIONS = 'FETCH_DECK_QUESTIONS';

export function fetchDecks(){
  const decks = [
    {
      id: 1,
      title: 'Great Britain quiz',
      cardCount: 2,
    },{
      id: 2,
      title: null,
      cardCount: 0,
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