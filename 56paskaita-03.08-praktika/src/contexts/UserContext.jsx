import React, { createContext, useReducer } from 'react';
import bcrypt from 'bcryptjs';

const initialState = {
	isAuthenticated: false,
	user: null,
	errorMessage: ''
};

const UserContext = createContext(initialState);

const userActionTypes = {
	LOGIN: 'LOGIN',
	REGISTER: 'REGISTER',
	LOGOUT: 'LOGOUT',
	SET_ERROR: 'SET ERROR'
};

const userReducer = (state, action) => {
	switch (action.type) {
		case userActionTypes.LOGIN:
		case userActionTypes.REGISTER:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload
			};
		case userActionTypes.LOGOUT:
			return {
				...state,
				isAuthenticated: false,
				user: null
			};
		case userActionTypes.SET_ERROR:
			return {
				...state,
				errorMessage: action.payload
			};
		default:
			console.error(`Unhandled action type: ${action.type}`);
			return state;
	}
};

const UserProvider = ({ children }) => {
	const [userState, dispatch] = useReducer(userReducer, initialState);

	const login = (username, password) => {
		dispatch({ type: userActionTypes.SET_ERROR, payload: '' });
		fetch(`http://localhost:8080/users?name=${username}`)
			.then(res => res.json())
			.then(users => {
				if (users.length > 0) {
					const passwordMatch = bcrypt.compareSync(password, users[0].password);
					if (passwordMatch) {
						dispatch({ type: userActionTypes.LOGIN, payload: users[0] });
						return true;
					} else {
						dispatch({
							type: userActionTypes.SET_ERROR,
							payload: 'Bad login information.'
						});
						return false;
					}
				} else {
					dispatch({
						type: userActionTypes.SET_ERROR,
						payload: 'User not found.'
					});
					return false;
				}
			});
	};

	const register = newUser => {
		dispatch({ type: userActionTypes.SET_ERROR, payload: '' });
		return fetch('http://localhost:8080/users')
			.then(response => response.json())
			.then(users => {
				const userExists = users.some(user => user.name === newUser.name);
				if (userExists) {
					dispatch({
						type: userActionTypes.SET_ERROR,
						payload: 'Username already taken. Please choose another username.'
					});
					return false;
				}

				return fetch('http://localhost:8080/users', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(newUser)
				}).then(response => {
					if (response.ok) {
						dispatch({
							type: userActionTypes.REGISTER,
							payload: newUser
						});
						return true;
					}
					dispatch({
						type: userActionTypes.SET_ERROR,
						payload: 'An error occurred during registration.'
					});
					return false;
				});
			})
			.catch(error => {
				console.error('Error fetching users:', error);
				dispatch({
					type: userActionTypes.SET_ERROR,
					payload: 'An error occurred. Please try again later.'
				});
				return false;
			});
	};

	const logout = () => {
		dispatch({ type: userActionTypes.LOGOUT });
	};

	return (
		<UserContext.Provider
			value={{ userState, login, register, logout, dispatch }}
		>
			{children}
		</UserContext.Provider>
	);
};

export { UserProvider, userActionTypes };

export default UserContext;
