
import { AuthProvider } from './context/AuthContext';
import RoutesApp from './routes';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

const App = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
			<GlobalStyle />
				<RoutesApp />
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
