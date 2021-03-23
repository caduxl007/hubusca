import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IUser {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
}

interface IAppContextData {
  users: IUser[];
  addNewUser: (data: IUser) => void;
}

const AppContext = createContext<IAppContextData>({} as IAppContextData);

export const AppProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<IUser[]>(() => {
    const storagedRepositories = localStorage.getItem('@HUBusca:users');

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@HUBusca:users', JSON.stringify(users));
  }, [users]);

  const addNewUser = useCallback(
    (user: IUser) => {
      const exictUser = users.find((findUser) => findUser.login === user.login);

      if (!exictUser) {
        setUsers([...users, user]);
      }
    },
    [users],
  );

  return (
    <AppContext.Provider value={{ users, addNewUser }}>
      {children}
    </AppContext.Provider>
  );
};

export function useApp(): IAppContextData {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }

  return context;
}
