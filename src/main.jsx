import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { StoreContextProvider } from './context/StoreContext.jsx';
import { ProductContextProvider } from './context/ProductContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<ProductContextProvider>
		<StoreContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StoreContextProvider>
	</ProductContextProvider>
);
