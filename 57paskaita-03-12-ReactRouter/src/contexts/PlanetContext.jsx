import { createContext, useEffect, useReducer } from 'react';

const PlanetContext = createContext();

const planetActionTypes = {
	ADD_NEW: 'add a new card',
	EDIT_PLANET: 'edit a planet card',
	DELETE_PLANET: 'delete selected planet card',
	SET_DATA: 'fetch duomenis'
};

const reducer = (state, action) => {
	switch (action.type) {
		case planetActionTypes.SET_DATA:
			return action.payload;
		case planetActionTypes.ADD_NEW:
			return [...state, action.payload];
		case planetActionTypes.EDIT_PLANET:
			return state.map(planet =>
				planet.id !== action.payload.id ? planet : action.payload
			);
		case planetActionTypes.DELETE_PLANET:
			return state.filter(planet => planet.id !== action.payload);
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

	const editPlanet = editedPlanet => {
		dispatch({ type: planetActionTypes.EDIT_PLANET, payload: editedPlanet });
		fetch(`http://localhost:8080/planets/${editedPlanet.id}`, {
			method: 'PUT',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(editedPlanet)
		});
	};

	const deletePlanet = id => {
		dispatch({ type: planetActionTypes.DELETE_PLANET, payload: id });
		fetch(`http://localhost:8080/planets/${id}`, {
			method: 'DELETE'
		});
	};

	return (
		<PlanetContext.Provider
			value={{
				planets,
				addPlanet,
				editPlanet,
				deletePlanet
			}}
		>
			{children}
		</PlanetContext.Provider>
	);
};

export default PlanetContext;

export { PlanetContextProvider, planetActionTypes };
