import { createContext, useEffect, useReducer } from 'react';

const CardsContext = createContext();

const CardsActionTypes = {
	FETCH_CARDS: 'FETCH_CARDS'
};

const reducer = (state, action) => {
	switch (action.type) {
		case CardsActionTypes.FETCH_CARDS:
			return action.payload;
		default:
			console.error('Unknown action type');
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
