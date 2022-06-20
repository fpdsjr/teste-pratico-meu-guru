import React, { useState } from 'react';
import { useUsers } from '~/context/UserProvider/useUser';

import { Container } from './styles';

function Menu() {
  const [inputValue, setInputValue] = useState('');
  const [selectOption, setSelectOption] = useState('nome');
  const { handleFetchWithFilters, handleResetFilters } = useUsers();

  async function handleClick() {
    handleFetchWithFilters(selectOption, inputValue);
    setInputValue('');
  }

  return (
    <Container>
      <input type="text" value={inputValue} placeholder="Digite sua busca." onChange={e => setInputValue(e.target.value)} />
      <select value={selectOption} onChange={e => setSelectOption(e.target.value)}>
        <option value="nome">Nome</option>
        <option value="email">Email</option>
      </select>
      <button type="button" onClick={handleClick}>
        Filtrar
      </button>
      <button type="button" onClick={handleResetFilters}>
        Reset
      </button>
    </Container>
  );
}

export default Menu;
