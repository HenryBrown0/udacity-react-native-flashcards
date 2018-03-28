import {
	FETCH_DECKS,
} from '../actions';

function decks(state = {}, action){
	switch (action.type){
		case FETCH_DECKS:
			const { decks } = action;
			return {
				...state,
				decks
			}
		default :
			return state
	}
}

export default decks;
