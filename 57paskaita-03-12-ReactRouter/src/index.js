import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UsersFormInputsProvider } from './contexts/UsersFormInputsContext';
import { UsersProvider } from './contexts/UsersContext';
import { BrowserRouter } from 'react-router-dom';
import { PlanetContextProvider } from './contexts/PlanetContext';
import { PlanetFormInputsProvider } from './contexts/PlanetFormInputsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<UsersFormInputsProvider>
		<UsersProvider>
			<BrowserRouter>
				<PlanetContextProvider>
					<PlanetFormInputsProvider>
						<App />
					</PlanetFormInputsProvider>
				</PlanetContextProvider>
			</BrowserRouter>
		</UsersProvider>
	</UsersFormInputsProvider>
);
