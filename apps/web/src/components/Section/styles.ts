import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  input {
    width: 350px;
    height: 40px;
    border-radius: 0.25rem;
    padding: 0 0.5rem;
    color: #2a004f;

    &:focus {
      border: 2px solid #03bb96;
      outline: none;
    }
  }

  select {
    width: 90px;
    height: 40px;
    color: #2a004f;
    font-weight: 600;
    padding: 0 0.75rem;
    border-radius: 0.25rem;

    &:focus {
      border: 2px solid #03bb96;
      outline: none;
    }
  }

  button {
    width: 90px;
    color: #2a004f;
    height: 40px;
    font-weight: 600;
    font-size: 1.05rem;
    border-radius: 0.25rem;
    background-color: #03bb96;

    transition: all 0.5 ease;

    &:hover {
      transform: scale(1.07);
    }
  }
`;
