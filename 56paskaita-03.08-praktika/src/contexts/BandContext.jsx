import { createContext, useEffect, useReducer } from 'react';

const BandContext = createContext();

const bandActionTypes = {
	ADD_NEW: 'add a new band',
	EDIT_FULL: 'edit the information about a band',
	EDIT_STATUS: 'change the like status of a band',
	DELETE_BAND: 'delete one band',
	SET_DATA: 'fetch duomenis'
};

const reducer = (state, action) => {
	switch (action.type) {
		case bandActionTypes.SET_DATA:
			return action.payload;
		case bandActionTypes.ADD_NEW:
			return [...state, action.payload];
		case bandActionTypes.EDIT_FULL:
			return state.map(band =>
				band.id !== action.payload.id ? band : action.payload
			);
		case bandActionTypes.EDIT_STATUS:
			return state.map(band =>
				band.id === action.payload.id
					? { ...band, liked: action.payload.liked }
					: band
			);
		case bandActionTypes.DELETE_BAND:
			return state.filter(band => band.id !== action.payload);
		default:
			console.error('Unknown action type', action.type);
			return state;
	}
};

const BandContextProvider = ({ children }) => {
	const [bands, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		fetch('http://localhost:8080/bands')
			.then(res => res.json())
			.then(bands =>
				dispatch({ type: bandActionTypes.SET_DATA, payload: bands })
			);
	}, []);

	const addBand = newBand => {
		dispatch({ type: bandActionTypes.ADD_NEW, payload: newBand });
		fetch('http://localhost:8080/bands', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(newBand)
		});
	};

	const editBand = editedBand => {
		dispatch({ type: bandActionTypes.EDIT_FULL, payload: editedBand });
		fetch(`http://localhost:8080/bands/${editedBand.id}`, {
			method: 'PUT',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(editedBand)
		});
	};

	const changeStatus = (id, likedStatus) => {
		dispatch({
			type: bandActionTypes.EDIT_STATUS,
			payload: { id, liked: !likedStatus }
		});
		fetch(`http://localhost:8080/bands/${id}`, {
			method: 'PATCH',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({
				liked: !likedStatus
			})
		});
	};

	const deleteBand = id => {
		dispatch({ type: bandActionTypes.DELETE_BAND, payload: id });
		fetch(`http://localhost:8080/bands/${id}`, {
			method: 'DELETE',
			headers: { 'Content-type': 'application/json' }
		});
	};

	return (
		<BandContext.Provider
			value={{
				bands,
				addBand,
				editBand,
				changeStatus,
				deleteBand
			}}
		>
			{children}
		</BandContext.Provider>
	);
};

export default BandContext;

export { BandContextProvider, bandActionTypes };
