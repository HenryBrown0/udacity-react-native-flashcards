import {
	FETCH_DECKS,
	ADD_DECK_QUESTION,
	ADD_DECK,
	DELETE_DECK
} from '../actions';

function decks(state = {}, action){
	switch (action.type){
		case FETCH_DECKS:
			const { decks } = action;
			console.log("Reducer - FETCH DECKS");
			return {
				...state,
				decks
			}
		case ADD_DECK_QUESTION:
			const { id, questionId, question, answer } = action;
			console.log("Reducer - ADD DECK QUESTION");
			const newQuestion = state.decks.filter(d => d.id === id).map(d => ({
				cardCount: d.cardCount +=1,
				questions: d.questions.push({id: questionId, question, answer}),
				...d,
			}))
			let addQuestion = state.decks.slice();
			addQuestion.filter(d => d.id === id).splice(0, 1, newQuestion);
			return {
				...state,
				decks: addQuestion,
				
			}
		case ADD_DECK:
			const { newDeckId, newDeckTitle } = action;
			console.log("Reducer - ADD DECK");
			let addDeck = state.decks.slice();
			const newDeck = {
				id: newDeckId,
				title: newDeckTitle,
				cardCount: 0,
				questions: [],
			}
			addDeck.push(newDeck);
			return {
				...state,
				decks: addDeck,
			}
		case DELETE_DECK:
			const { deleteDeckId } = action;
			console.log("Reducer - DELECT DECK");
			return {
				...state,
				decks: state.decks.filter(d => d.id !== deleteDeckId)
			}
		default :
			return state
	}
}

export default decks;
