import { createContext, useReducer } from 'react';

const initialState = {
	username: '',
	password: ''
};

const LoginFormContext = createContext({
	loginFormInputs: initialState,
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

const LoginFormContextProvider = ({ children }) => {
	const [loginFormInputs, dispatch] = useReducer(reducer, initialState);

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
		<LoginFormContext.Provider
			value={{
				loginFormInputs,
				handleChange,
				dispatch
			}}
		>
			{children}
		</LoginFormContext.Provider>
	);
};

export default LoginFormContext;
export { LoginFormContextProvider, inputActionTypes };
