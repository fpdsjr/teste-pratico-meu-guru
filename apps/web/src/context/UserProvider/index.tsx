import { createContext, useEffect, useState } from 'react';
import { Api } from '~/services/api';

interface Users {
  id: string;
  nome: string;
  email: string;
  deletado: boolean;
}

interface IUserProvider {
  children: JSX.Element;
}

interface IContext {
  users: Users[];
  handleFetchWithFilters: (filterParam: string, searchParam: string) => Promise<void>;
  handleResetFilters: () => Promise<void>;
}

export const UserContext = createContext<IContext>({} as IContext);

export function UserProvider({ children }: IUserProvider) {
  const [users, setUsers] = useState([]);

  async function handleFetch() {
    const response = await Api.get('list/?page=0&limit=10');

    setUsers(response.data);
  }

  async function handleFetchWithFilters(filterParam: string, searchParam: string) {
    const response = await Api.get(`list/?page=0&limit=10&filter=${filterParam}&search=${searchParam}`);

    setUsers(response.data);
  }

  async function handleResetFilters() {
    handleFetch();
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return <UserContext.Provider value={{ users, handleFetchWithFilters, handleResetFilters }}>{children}</UserContext.Provider>;
}
