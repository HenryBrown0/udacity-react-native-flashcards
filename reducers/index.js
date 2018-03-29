import {
	FETCH_DECKS,
	FETCH_DECK_QUESTIONS,
	ADD_DECK_QUESTION
} from '../actions';

function decks(state = {}, action){
	switch (action.type){
		case FETCH_DECKS:
			const { decks } = action;
			console.log("FETCH DECKS");
			return {
				...state,
				decks
			}
		case FETCH_DECK_QUESTIONS:
			const { deckQuestions } = action;
			return {
				...state,
				...deckQuestions
			}
		case ADD_DECK_QUESTION:
			const { id, question, answer } = action;
			console.log("ADD DECK QUESTION");
			let deck = state.decks.filter(d => d.id === id).pop();
			deck.cardCount += 1;
			deck.questions.push({question, answer});
			decks = deck;
			return {
				...state,
				...decks
			}
		default :
			return state
	}
}

export default decks;
