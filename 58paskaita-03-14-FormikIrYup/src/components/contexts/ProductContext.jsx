import { useReducer, useEffect, createContext } from 'react';

const initialContextValue = {
	products: [],
	addProduct: () => {}
};

const ProductContext = createContext(initialContextValue);

const productActionTypes = {
	ADD_PRODUCT: 'ADD_PRODUCT',
	SET_PRODUCTS: 'SET_PRODUCTS'
};

const reducer = (state, action) => {
	switch (action.type) {
		case productActionTypes.SET_PRODUCTS:
			return action.payload;
		case productActionTypes.ADD_PRODUCT:
			return [...state, action.payload];
		default:
			console.error('Unknown action type', action.type);
			return state;
	}
};

const ProductContextProvider = ({ children }) => {
	const [products, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		fetch('http://localhost:8080/products')
			.then(res => res.json())
			.then(products =>
				dispatch({ type: productActionTypes.SET_PRODUCTS, payload: products })
			);
	}, []);

	const addProduct = newProduct => {
		dispatch({ type: productActionTypes.ADD_PRODUCT, payload: newProduct });
		fetch('http://localhost:8080/products', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(newProduct)
		});
	};

	return (
		<ProductContext.Provider
			value={{
				products,
				addProduct
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductContext;
export { ProductContextProvider };
