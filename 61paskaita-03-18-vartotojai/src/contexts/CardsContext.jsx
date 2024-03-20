import { createContext, useEffect, useReducer } from 'react';

const CardsContext = createContext();

export const CardsActionTypes = {
	FETCH_CARDS: 'FETCH_CARDS',
	ADD_CARD: 'ADD_CARD',
	DELETE_CARD: 'DELETE_CARD',
	DELETE_COMMENT: 'DELETE_COMMENT',
	ADD_COMMENT: 'ADD_COMMENT'
};

const reducer = (state, action) => {
	switch (action.type) {
		case CardsActionTypes.FETCH_CARDS:
			return action.payload;
		case CardsActionTypes.ADD_CARD:
			fetch(`http://localhost:8080/cards`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(action.payload)
			});
			return [...state, action.payload];
		case CardsActionTypes.DELETE_CARD:
			fetch(`http://localhost:8080/cards/${action.payload}`, {
				method: 'DELETE'
			});
			return state.filter(card => card.id !== action.payload);
		case CardsActionTypes.ADD_COMMENT:
			const cardToChangeAddComment = state.find(
				card => card.id === action.payload.cardId
			);
			const changedCardAddComment = {
				...cardToChangeAddComment,
				comments: cardToChangeAddComment.comments
					? [...cardToChangeAddComment.comments, action.payload.newComment]
					: [action.payload.newComment]
			};
			fetch(`http://localhost:8080/cards/${action.payload.cardId}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(changedCardAddComment)
			});
			return state.map(card =>
				card.id === action.payload.cardId ? changedCardAddComment : card
			);

		case CardsActionTypes.DELETE_COMMENT:
			const cardToChange = state.find(
				card => card.id === action.payload.cardId
			);
			const changedCard = {
				...cardToChange,
				comments: cardToChange.comments.filter(
					comment => comment.id !== action.payload.commentId
				)
			};
			fetch(`http://localhost:8080/cards/${action.payload.cardId}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(changedCard)
			});
			return state.map(card =>
				card.id === action.payload.cardId ? changedCard : card
			);
		default:
			console.error(`Unknown action type ${action.type}`);
			return state;
	}
};

const CardsProvider = ({ children }) => {
	const [cards, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		fetch(`http://localhost:8080/cards`)
			.then(res => res.json())
			.then(data =>
				dispatch({ type: CardsActionTypes.FETCH_CARDS, payload: data })
			);
	}, []);

	return (
		<CardsContext.Provider value={{ cards, dispatch }}>
			{children}
		</CardsContext.Provider>
	);
};

export { CardsProvider };
export default CardsContext;
