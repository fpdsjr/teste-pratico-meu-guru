import React from 'react';

import { Container } from './styles';

function Section() {
  return (
    <Container>
      <input type="text" />
      <select>
        <option>nome</option>
        <option>email</option>
      </select>
      <button type="button">Filtrar</button>
      <button type="button">Reset</button>
    </Container>
  );
}

export default Section;
