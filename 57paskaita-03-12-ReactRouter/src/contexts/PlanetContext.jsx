import { createContext, useEffect, useReducer } from 'react';

const PlanetContext = createContext();

const planetActionTypes = {
	ADD_NEW: 'add a new card',
	SET_DATA: 'fetch duomenis'
};

const reducer = (state, action) => {
	switch (action.type) {
		case planetActionTypes.SET_DATA:
			return action.payload;
		case planetActionTypes.ADD_NEW:
			return [...state, action.payload];
		default:
			console.error('Unknown action type', action.type);
			return state;
	}
};

const PlanetContextProvider = ({ children }) => {
	const [planets, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		fetch('http://localhost:8080/planets')
			.then(res => res.json())
			.then(planets =>
				dispatch({ type: planetActionTypes.SET_DATA, payload: planets })
			);
	}, []);

	const addPlanet = newPlanet => {
		dispatch({ type: planetActionTypes.ADD_NEW, payload: newPlanet });
		fetch('http://localhost:8080/planets', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(newPlanet)
		});
	};

	return (
		<PlanetContext.Provider
			value={{
				planets,
				addPlanet
			}}
		>
			{children}
		</PlanetContext.Provider>
	);
};

export default PlanetContext;

export { PlanetContextProvider, planetActionTypes };
