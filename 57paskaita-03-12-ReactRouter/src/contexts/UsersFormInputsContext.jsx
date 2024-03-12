import { createContext, useState } from 'react';

const UsersFormInputsContext = createContext();

const UsersFormInputsProvider = ({ children }) => {
	const [formInputs, setFormInputs] = useState({
		id: '',
		username: '',
		password: '',
		passwordRepeat: '',
		email: ''
	});

	const onChangeF = e => {
		setFormInputs({
			...formInputs,
			[e.target.name]: e.target.value
		});
	};

	const clearForm = () => {
		setFormInputs({
			id: '',
			username: '',
			password: '',
			passwordRepeat: '',
			email: ''
		});
	};

	return (
		<UsersFormInputsContext.Provider
			value={{
				formInputs,
				onChangeF,
				clearForm
			}}
		>
			{children}
		</UsersFormInputsContext.Provider>
	);
};

export { UsersFormInputsProvider };

export default UsersFormInputsContext;
