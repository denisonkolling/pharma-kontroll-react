import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [usersList, setUsersList] = useState(
		JSON.parse(localStorage.getItem('users_db')) || []
	);
	const [isLogged, setIsLogged] = useState(false);

	const AddUser = (email, password) => {
		const newUser = {
			id: usersList.length + 1,
			email,
			password,
		};

		const newUserList = [...usersList, newUser];
		localStorage.setItem('users_db', JSON.stringify(newUserList));
		setUsersList(newUserList);
	};

	const login = (email, password) => {
		const user = usersList?.filter((usuario) => usuario.email === email);

		if (!usersList) {
			return 'E-mail não cadastrado';
		}
		if (user[0].email == email && user[0].password == password) {
			setIsLogged(true);
			return;
		} else {
			return 'E-mail e senha incorretos';
		}
	};

	const logout = () => {
		setIsLogged(false);
	};

	return (
		<AuthContext.Provider
			value={{ usersList, AddUser, login, logout, isLogged }}>
			{children}
		</AuthContext.Provider>
	);
};
