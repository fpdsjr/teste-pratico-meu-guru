import { render, fireEvent } from '@testing-library/react';
import Menu from '.';

jest.mock('~/context/UserProvider/useUser', () => {
  return {
    useUsers() {
      return {
        handleFetchWithFilters: jest.fn(),
      };
    },
  };
});

describe('Menu component', () => {
  it('should be able to render the search input', () => {
    const { getByPlaceholderText } = render(<Menu />);

    getByPlaceholderText('Digite sua busca.');

    expect(getByPlaceholderText('Digite sua busca.')).toBeInTheDocument();
  });

  it('should be able to write in the search input', () => {
    const { getByPlaceholderText } = render(<Menu />);

    const inputSearch = getByPlaceholderText('Digite sua busca.') as HTMLInputElement;

    fireEvent.change(inputSearch, { target: { value: 'Flávio Junior' } });

    expect(inputSearch.value).toBe('Flávio Junior');
  });

  it('should be able render correctly the select input', () => {
    const { getByTestId } = render(<Menu />);

    expect(getByTestId('select-option')).toBeInTheDocument();
  });

  it('should be able to modify the select value to name', () => {
    const { getByTestId } = render(<Menu />);

    const select = getByTestId('select-option') as HTMLSelectElement;

    fireEvent.change(select, { target: { value: 'nome' } });

    expect(select.value).toBe('nome');
  });

  it('should be able to modify the select value to email.', () => {
    const { getByTestId } = render(<Menu />);

    const select = getByTestId('select-option') as HTMLSelectElement;

    fireEvent.change(select, { target: { value: 'email' } });

    expect(select.value).toBe('email');
  });

  it('should be able to render correctly the filter button', () => {
    const { getByText } = render(<Menu />);

    expect(getByText('Filtrar')).toBeInTheDocument();
  });

  it('should be able to click on button and reset the input value', () => {
    const { getByText, getByPlaceholderText } = render(<Menu />);

    const button = getByText('Filtrar');

    fireEvent.click(button);

    const inputSearch = getByPlaceholderText('Digite sua busca.') as HTMLInputElement;

    expect(inputSearch.value).toBe('');
  });

  it('should be able to click reset button', () => {
    const { getByText } = render(<Menu />);

    const button = getByText('Reset');

    const clickReset = fireEvent.click(button);

    expect(clickReset).toBe(true);
  });
});
