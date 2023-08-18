import { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
	const { value, setValue } = useLocalStorage('user', {});
	const [user, setUser] = useState({});

	useEffect(() => {
		if (value) {
			setUser(value);
		}
	}, [setUser, value]);

	const logout = () => {
		setValue({});
	};

	return (
		<AuthContext.Provider value={{ value, setValue, user, logout }}>
			{children}
		</AuthContext.Provider>
	);
};