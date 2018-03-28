export const FETCH_DECKS = 'FETCH_DECKS';

export function fetchDecks(){
  const decks = [
    {
      id: 1,
      title: 1,
      cardCount: 1,
    },{
      id: 2,
      title: 2,
      cardCount: 2,
    }
  ]
  return {
    type: FETCH_DECKS,
    decks
  }
}
