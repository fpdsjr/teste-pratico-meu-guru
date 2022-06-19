import React, { useState } from 'react';
import { useUsers } from '~/context/UserProvider/useUser';

import { Container } from './styles';

function Section() {
  const [inputValue, setInputValue] = useState('');
  const [selectOption, setSelectOption] = useState('nome');
  const { handleFetchWithFilters, handleResetFilters } = useUsers();

  async function handleClick() {
    handleFetchWithFilters(selectOption, inputValue);
    setInputValue('');
  }

  return (
    <Container>
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <select value={selectOption} onChange={e => setSelectOption(e.target.value)}>
        <option value="nome">nome</option>
        <option value="email">email</option>
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

export default Section;
