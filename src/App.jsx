import { AuthProvider } from './context';
import { RoutesApp } from './routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<RoutesApp />
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
