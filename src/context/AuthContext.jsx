import { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const { value, setValue } = useLocalStorage('user_db', {});
	const [user, setUser] = useState(null);
	const [signed, setSigned] = useState();

	useEffect(() => {
		if (value) {
			setUser(value);
		}
	}, [setUser, value]);

	const logout = () => {
		setSigned();
	};

	const login = (email, password) => {
		const usersStorage = JSON.parse(localStorage.getItem('user_db'));

		if (!usersStorage) {
			return 'Email não cadastrado!';
		}
		if (usersStorage.email === email && usersStorage.password === password) {
			setSigned({ email, password });
			return;
		} else {
			return 'Email e senha incorretos';
		}
	};

	return (
		<AuthContext.Provider
			value={{ value, setValue, user, logout, login, signed }}>
			{children}
		</AuthContext.Provider>
	);
};
