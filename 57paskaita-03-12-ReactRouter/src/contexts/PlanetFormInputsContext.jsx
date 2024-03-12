import { createContext, useState } from 'react';

const PlanetFormInputsContext = createContext();

const PlanetFormInputsProvider = ({ children }) => {
	const [formInputs, setFormInputs] = useState({
		id: '',
		name: '',
		awayFromSun: '',
		description: '',
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
			picture: ''
		});
	};

	return (
		<PlanetFormInputsContext.Provider
			value={{
				formInputs,
				onChangeF,
				clearForm
			}}
		>
			{children}
		</PlanetFormInputsContext.Provider>
	);
};

export { PlanetFormInputsProvider };

export default PlanetFormInputsContext;
