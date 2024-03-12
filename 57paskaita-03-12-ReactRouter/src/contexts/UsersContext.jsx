import { useEffect, createContext, useState } from 'react';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [loggedInUser, setLoggedInUser] = useState(false);

	const login = user => {
		setLoggedInUser(user);
	};
	const logout = () => {
		setLoggedInUser(false);
	};

	useEffect(() => {
		fetch(`http://localhost:8080/users`)
			.then(res => res.json())
			.then(data => setUsers(data));
	}, []);

	const registerUser = newUser => {
		setUsers([...users, newUser]);
		// setUsers(prev => [...prev, newUser]);
		login(newUser);
		fetch(`http://localhost:8080/users`, {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(newUser)
		});
	};

	return (
		<UsersContext.Provider
			value={{
				users,
				registerUser,
				loggedInUser,
				login,
				logout
			}}
		>
			{children}
		</UsersContext.Provider>
	);
};

export { UsersProvider };

export default UsersContext;
