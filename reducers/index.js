import {
	FETCH_DECKS,
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
