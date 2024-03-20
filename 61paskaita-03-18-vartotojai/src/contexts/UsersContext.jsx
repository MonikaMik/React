import { createContext, useReducer, useEffect, useState } from 'react';

export const UsersActionTypes = {
	FETCH_USERS: 'FETCH_USERS',
	ADD_USER: 'ADD_USER',
	REMOVE_USER: 'REMOVE_USER',
	CHANGE_ROLE: 'CHANGE_ROLE'
};

const reducer = (state, action) => {
	switch (action.type) {
		case UsersActionTypes.FETCH_USERS:
			return action.payload;
		case UsersActionTypes.ADD_USER:
			return [...state, action.payload];
		case UsersActionTypes.REMOVE_USER:
			return state.filter(user => user.id !== action.payload);
		case UsersActionTypes.CHANGE_ROLE:
			return state.map(user => {
				if (user.id === action.payload.userId) {
					return {
						...user,
						role: action.payload.role
					};
				}
				return user;
			});
		default:
			console.error('Unknown action type');
			return state;
	}
};

const UsersContext = createContext();

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
		fetch(`http://localhost:8080/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});
	};

	const setUserRole = (id, newRole) => {
		dispatch({
			type: UsersActionTypes.CHANGE_ROLE,
			payload: { role: newRole, userId: id }
		});
		fetch(`http://localhost:8080/users/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ role: newRole })
		});
	};

	const removeUser = userId => {
		dispatch({ type: UsersActionTypes.REMOVE_USER, payload: userId });
		fetch(`http://localhost:8080/users/${userId}`, {
			method: 'DELETE'
		});
	};

	return (
		<UsersContext.Provider
			value={{
				users,
				loggedInUser,
				setLoggedInUser,
				addUser,
				removeUser,
				setUserRole
			}}
		>
			{children}
		</UsersContext.Provider>
	);
};

export default UsersContext;
