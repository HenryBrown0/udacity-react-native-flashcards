import {
	FETCH_DECKS,
	ADD_DECK_QUESTION,
	ADD_DECK
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
			return {
				...state,
			}
		case ADD_DECK:
			const { newDeck } = action;
			console.log("ADD DECK");
			state.decks.push(newDeck)
			return {
				...state,
			}
		default :
			return state
	}
}

export default decks;
