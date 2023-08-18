import { AuthProvider } from './context/AuthContext';
import RoutesApp from './routes';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { StoreContextProvider } from './context/StoreContext.jsx';
import { ProductContextProvider } from './context/ProductContext.jsx';

const App = () => {
	return (
		<ProductContextProvider>
			<StoreContextProvider>
				<AuthProvider>
					<GlobalStyle />
					<RoutesApp />
				</AuthProvider>
			</StoreContextProvider>
		</ProductContextProvider>
	);
};

export default App;
