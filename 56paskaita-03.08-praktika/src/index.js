import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BandContextProvider } from './contexts/BandContext';
import { FormInputContextProvider } from './contexts/FormInputContext';
import { UserProvider } from './contexts/UserContext';
import { PageLoaderProvider } from './contexts/PageLoaderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<UserProvider>
		<PageLoaderProvider>
			<BandContextProvider>
				<FormInputContextProvider>
					<App />
				</FormInputContextProvider>
			</BandContextProvider>
		</PageLoaderProvider>
	</UserProvider>
);
