import {
	FETCH_DECKS,
	FETCH_DECK_QUESTIONS,
} from '../actions';

function decks(state = {}, action){
	switch (action.type){
		case FETCH_DECKS:
			const { decks } = action;
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
		default :
			return state
	}
}

export default decks;
