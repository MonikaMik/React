import { createContext, useReducer } from 'react';

// const FormInputContext = createContext();
const FormInputContext = createContext({
	formInputs: {
		id: '',
		name: '',
		picture: '',
		members: '',
		genre: '',
		liked: 'like',
		formed: ''
	},
	handleChange: () => {},
	formDispatch: () => {}
});

const inputActionTypes = {
	HANDLE_INPUT_CHANGE: 'reaguoti i pasikeitima inpute',
	CLEAR_FORM: 'isvalyti formos laukus',
	FILL_FORM: 'uzpildyti forma esanciais duomenimis'
};

const reducer = (state, action) => {
	switch (action.type) {
		case inputActionTypes.HANDLE_INPUT_CHANGE:
			const { name, value } = action.payload;
			return {
				...state,
				[name]: value
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

	const handleChange = event => {
		const { name, value } = event.target;
		formDispatch({
			type: inputActionTypes.HANDLE_INPUT_CHANGE,
			payload: {
				name,
				value: value
			}
		});
	};

	return (
		<FormInputContext.Provider
			value={{
				formInputs,
				handleChange,
				formDispatch
			}}
		>
			{children}
		</FormInputContext.Provider>
	);
};

export default FormInputContext;
export { FormInputContextProvider, inputActionTypes };
