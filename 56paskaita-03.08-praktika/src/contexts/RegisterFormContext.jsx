import { createContext, useReducer } from 'react';

const initialState = {
	username: '',
	password: '',
	passwordRepeat: '',
	email: '',
	avatar: ''
};

const RegisterFormContext = createContext({
	registerFormInputs: initialState,
	handleChange: () => {},
	dispatch: () => {}
});

const inputActionTypes = {
	HANDLE_INPUT_CHANGE: 'reaguoti i pasikeitima impute',
	CLEAR_FORM: 'isvalyti formos laukus'
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
			return initialState;
		default:
			console.error('Unknown action type', action.type);
			return state;
	}
};

const RegisterFormContextProvider = ({ children }) => {
	const [registerFormInputs, dispatch] = useReducer(reducer, initialState);

	const handleChange = event => {
		const { name, value, type, checked } = event.target;
		dispatch({
			type: inputActionTypes.HANDLE_INPUT_CHANGE,
			payload: {
				name,
				value: type === 'checkbox' || type === 'radio' ? checked : value
			}
		});
	};

	return (
		<RegisterFormContext.Provider
			value={{
				registerFormInputs,
				handleChange,
				dispatch
			}}
		>
			{children}
		</RegisterFormContext.Provider>
	);
};

export default RegisterFormContext;
export { RegisterFormContextProvider, inputActionTypes };
