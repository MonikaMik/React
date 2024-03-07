import { createContext, useReducer } from 'react';

const FormInputContext = createContext();

const inputActionTypes = {
	HANDLE_INPUT_CHANGE: 'reaguoti i pasikeitima impute',
	CLEAR_FORM: 'isvalyti formos laukus',
	FILL_FORM: 'uzpildyti forma esanciais duomenimis'
};

const reducer = (state, action) => {
	switch (action.type) {
		case inputActionTypes.HANDLE_INPUT_CHANGE:
			const { name, value, type, checked } = action.payload;
			return {
				...state,
				[name]: type === 'checkbox' || type === 'radio' ? checked : value
			};
		case inputActionTypes.CLEAR_FORM:
			return {
				id: '',
				name: '',
				picture: '',
				members: '',
				genre: '',
				liked: 'like',
				formed: ''
			};
		case inputActionTypes.FILL_FORM:
			console.log(action.payload);
			return {
				id: action.payload.id,
				name: action.payload.name,
				picture: action.payload.picture,
				members: action.payload.members.join(', '),
				genre: action.payload.genre,
				liked: action.payload.liked ? 'like' : 'dislike',
				formed: action.payload.formed
			};
		default:
			console.error('Unknown action type', action.type);
			return state;
	}
};

const FormInputContextProvider = ({ children }) => {
	const [formInputs, formDispatch] = useReducer(reducer, {
		id: '',
		name: '',
		picture: '',
		members: '',
		genre: '',
		liked: 'like',
		formed: ''
	});
	return (
		<FormInputContext.Provider
			value={{
				formInputs,
				formDispatch
			}}
		>
			{children}
		</FormInputContext.Provider>
	);
};

export default FormInputContext;
export { FormInputContextProvider, inputActionTypes };
