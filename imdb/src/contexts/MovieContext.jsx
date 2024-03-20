import { createContext, useReducer, useEffect } from 'react';

const InitialState = {
	loading: false,
	movies: [],
	error: null
};

const MovieContext = createContext(InitialState);

const movieActionTypes = {
	FETCH_MOVIES: 'FETCH_MOVIES',
	ADD_MOVIE: 'ADD_MOVIE',
	REMOVE_MOVIE: 'REMOVE_MOVIE',
	EDIT_MOVIE: 'EDIT_MOVIE',
	REQUEST: 'REQUEST',
	FAILURE: 'FAILURE'
};

const reducer = (state, action) => {
	switch (action.type) {
		case movieActionTypes.REQUEST:
			return {
				...state,
				loading: true
			};
		case movieActionTypes.FAILURE:
			return {
				...state,
				loading: false,
				error: action.error
			};
		case movieActionTypes.FETCH_MOVIES:
			return {
				...state,
				loading: false,
				movies: action.payload,
				error: null
			};
		case movieActionTypes.ADD_MOVIE:
			return {
				...state,
				loading: false,
				movies: [...state.movies, action.payload.movie],
				error: null
			};
		case movieActionTypes.REMOVE_MOVIE:
			return {
				...state,
				loading: false,
				movies: state.movies.filter(movie => movie.id !== action.payload),
				error: null
			};
		case movieActionTypes.EDIT_MOVIE:
			return {
				...state,
				loading: false,
				movies: state.movies.map(movie =>
					movie.id === action.payload.id ? action.payload : movie
				),
				error: null
			};
		default:
			return state;
	}
};

const MovieContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, InitialState);

	useEffect(() => {
		dispatch({ type: movieActionTypes.REQUEST });
		fetch('http://localhost:8080/movies')
			.then(res => res.json())
			.then(data => {
				dispatch({ type: movieActionTypes.FETCH_MOVIES, payload: data });
			})
			.catch(error => {
				dispatch({ type: movieActionTypes.FAILURE, error: error.toString() });
			});
	}, []);

	const addMovie = newMovie => {
		dispatch({ type: movieActionTypes.REQUEST });
		fetch('http://localhost:8080/movies', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newMovie)
		})
			.then(res => res.json())
			.then(data => {
				dispatch({
					type: movieActionTypes.ADD_MOVIE,
					payload: { movie: newMovie }
				});
			})
			.catch(error => {
				dispatch({
					type: movieActionTypes.FAILURE,
					error: error.toString()
				});
			});
	};

	const removeMovie = movieId => {
		dispatch({ type: movieActionTypes.REQUEST });
		fetch(`http://localhost:8080/movies/${movieId}`, {
			method: 'DELETE'
		})
			.then(() => {
				dispatch({ type: movieActionTypes.REMOVE_MOVIE, payload: movieId });
			})
			.catch(error => {
				dispatch({
					type: movieActionTypes.FAILURE,
					error: error.toString()
				});
			});
	};

	return (
		<MovieContext.Provider value={{ state, addMovie, removeMovie }}>
			{children}
		</MovieContext.Provider>
	);
};

export default MovieContext;
export { MovieContextProvider };
