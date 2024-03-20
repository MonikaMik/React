import React, { createContext, useReducer, useEffect } from 'react';

const plantActionTypes = {
	FETCH_PLANTS: 'FETCH_PLANTS',
	ADD_PLANT: 'ADD_PLANT',
	REMOVE_PLANT: 'REMOVE_PLANT',
	EDIT_PLANT: 'EDIT_PLANT'
};

const initialContextValue = {
	plants: [],
	addPlant: () => {},
	removePlant: () => {},
	editPlant: () => {}
};

const PlantContext = createContext(initialContextValue);

const reducer = (state, action) => {
	switch (action.type) {
		case plantActionTypes.FETCH_PLANTS:
			return action.payload;
		case plantActionTypes.ADD_PLANT:
			return [...state, action.payload];
		case plantActionTypes.REMOVE_PLANT:
			return {
				...state,
				plants: state.plants.filter(plant => plant.id !== action.payload)
			};
		case plantActionTypes.EDIT_PLANT:
			return {
				...state,
				plants: state.plants.map(plant =>
					plant.id === action.payload.id ? action.payload : plant
				)
			};
		default:
			console.error('Unknown action type', action.type);
			return state;
	}
};

const PlantContextProvider = ({ children }) => {
	const [plants, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		fetch('http://localhost:8080/plants')
			.then(response => response.json())
			.then(data => {
				dispatch({ type: plantActionTypes.FETCH_PLANTS, payload: data });
			});
	}, []);

	const addPlant = newPlant => {
		dispatch({ type: plantActionTypes.ADD_PLANT, payload: newPlant });
		fetch('http://localhost:8080/plants', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newPlant)
		});
	};

	const removePlant = plantId => {
		dispatch({ type: plantActionTypes.REMOVE_PLANT, payload: plantId });
		fetch(`http://localhost:8080/plants/${plantId}`, {
			method: 'DELETE'
		});
	};

	const editPlant = updatedPlant => {
		dispatch({ type: plantActionTypes.EDIT_PLANT, payload: updatedPlant });
		fetch(`http://localhost:8080/plants/${updatedPlant.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(updatedPlant)
		});
	};

	return (
		<PlantContext.Provider
			value={{
				plants,
				addPlant,
				removePlant,
				editPlant
			}}
		>
			{children}
		</PlantContext.Provider>
	);
};

export default PlantContext;
export { PlantContextProvider, plantActionTypes };
