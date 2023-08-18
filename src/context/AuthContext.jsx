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

	const login = (email, password) => {
		const usersStorage = JSON.parse(localStorage.getItem('user'));

		if (usersStorage.email === email && usersStorage.password === password) {
			alert('bem vindo novamente');
			return;
		} else {
			alert('email e senha incorretos');
			return;
		}
	};

	return (
		<AuthContext.Provider value={{ value, setValue, user, logout, login }}>
			{children}
		</AuthContext.Provider>
	);
};
