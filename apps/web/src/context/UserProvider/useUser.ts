import { useContext } from 'react';

import { UserContext } from '.';

export const useUsers = () => {
  const context = useContext(UserContext);

  return context;
};
