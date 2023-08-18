import { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const { value, setValue } = useLocalStorage('user', {});
	const [user, setUser] = useState(null);

	useEffect(() => {
		if (value) {
			setUser(value);
		}
	}, [setUser, value]);

	const logout = () => {
		setValue(null);
		localStorage.removeItem('user');
	};

	const login = (email, password) => {
		const usersStorage = JSON.parse(localStorage.getItem('user'));

		if (usersStorage.email === email && usersStorage.password === password) {
			alert('bem vindo novamente');
			setValue({email, password})
			return;
		} else {
			alert('email e senha incorretos');
			return;
		}
	};

	return (
		<AuthContext.Provider value={{ value, setValue, user, logout, login, signed: user }}>
			{children}
		</AuthContext.Provider>
	);
};
