import { createContext, useState } from 'react';

const PlanetFormInputsContext = createContext();

const PlanetFormInputsProvider = ({ children }) => {
	const [formInputs, setFormInputs] = useState({
		id: '',
		name: '',
		awayFromSun: '',
		description: '',
		overview: '',
		picture: ''
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
			name: '',
			awayFromSun: '',
			description: '',
			overview: '',
			picture: ''
		});
	};

	return (
		<PlanetFormInputsContext.Provider
			value={{
				formInputs,
				onChangeF,
				clearForm,
				setFormInputs
			}}
		>
			{children}
		</PlanetFormInputsContext.Provider>
	);
};

export { PlanetFormInputsProvider };

export default PlanetFormInputsContext;
