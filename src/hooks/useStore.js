import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const useStore = () => {
	const context = useContext(StoreContext);

	if (!context) {
		throw new Error('The App must be used within a AppProvider');
	}

	return context;
};

export default useStore;
