import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FormInputContextProvider } from './contexts/FormInputContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<FormInputContextProvider>
		<App />
	</FormInputContextProvider>
);
