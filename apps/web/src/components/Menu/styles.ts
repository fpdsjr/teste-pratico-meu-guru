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
    color: var(--purple-600);

    transition: all 0.2s ease-in-out;

    &:focus {
      outline: 2px solid var(--cyan-500);
    }
  }

  select {
    width: 100px;
    height: 40px;
    color: var(--purple-600);
    font-weight: 600;
    padding: 0 0.5rem;
    border-radius: 0.25rem;

    transition: all 0.2s ease;

    &:focus {
      outline: 2px solid var(--cyan-500);
    }
  }

  button {
    width: 90px;
    color: var(--purple-600);
    height: 40px;
    font-weight: 600;
    font-size: 1.05rem;
    border-radius: 0.25rem;
    background-color: var(--cyan-500);
    box-shadow: 0 8px 8px -8px #06a78d;

    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.07);
    }
  }
`;
