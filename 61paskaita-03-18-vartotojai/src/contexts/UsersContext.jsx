import { createContext, useReducer, useEffect, useState } from 'react';

export const UsersActionTypes = {
	FETCH_USERS: 'FETCH_USERS',
	ADD_USER: 'ADD_USER',
	REMOVE_USER: 'REMOVE_USER'
};

const reducer = (state, action) => {
	switch (action.type) {
		case UsersActionTypes.FETCH_USERS:
			return action.payload;
		case 'ADD_USER':
			return {
				...state,
				users: [...state.users, action.payload]
			};
		case 'REMOVE_USER':
			return {
				...state,
				users: state.users.filter(user => user.id !== action.payload)
			};
		default:
			console.error('Unknown action type');
			return state;
	}
};

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
	const [loggedInUser, setLoggedInUser] = useState(false);
	const [users, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		fetch(`http://localhost:8080/users`)
			.then(res => res.json())
			.then(data =>
				dispatch({ type: UsersActionTypes.FETCH_USERS, payload: data })
			);
	}, []);

	const addUser = user => {
		dispatch({ type: UsersActionTypes.ADD_USER, payload: user });
	};

	const removeUser = userId => {
		dispatch({ type: UsersActionTypes.REMOVE_USER, payload: userId });
	};

	return (
		<UsersContext.Provider
			value={{
				users: users,
				loggedInUser,
				setLoggedInUser,
				addUser,
				removeUser
			}}
		>
			{children}
		</UsersContext.Provider>
	);
};
