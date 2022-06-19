import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  color: var(--white-100);
  font-weight: 700;
  background-color: #03bb967a;
  border-radius: 0.5rem;
  box-shadow: 0 8px 8px -10px #06a78d;

  table {
    margin: 0 auto;

    th {
      color: var(--purple-600);
      border-radius: 0.25rem;
    }

    tr {
      border-radius: 5rem;
    }
  }
`;
