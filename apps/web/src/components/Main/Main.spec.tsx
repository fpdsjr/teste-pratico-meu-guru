import { render } from '@testing-library/react';
import Main from '.';

jest.mock('~/context/UserProvider/useUser', () => {
  return {
    useUsers() {
      return {
        users: [
          {
            id: '1',
            nome: 'Flávio Junior',
            email: 'flaviopds@mail.com',
            deletado: false,
          },
          {
            id: '2',
            nome: 'Flávio Pereira',
            email: 'valid@mail.com',
            deletado: true,
          },
          {
            id: '3',
            nome: 'Junior Junior',
            email: 'validmmm@mail.com',
            deletado: false,
          },
        ],
      };
    },
  };
});

describe('Main component', () => {
  it('should be able to render tables infos', () => {
    const { getByText } = render(<Main />);

    expect(getByText('ID')).toBeInTheDocument();
    expect(getByText('NOME')).toBeInTheDocument();
    expect(getByText('EMAIL')).toBeInTheDocument();
    expect(getByText('STATUS')).toBeInTheDocument();
  });

  it('should be able to render correctly the first user', () => {
    const { getByText } = render(<Main />);

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('Flávio Junior')).toBeInTheDocument();
    expect(getByText('flaviopds@mail.com')).toBeInTheDocument();
  });

  it('should be able to render the correctly icon if the user its not deleted', () => {
    const { getAllByTestId } = render(<Main />);

    expect(getAllByTestId('userSvg')[0]).toBeInTheDocument();
  });
  it('should be able to render the correctly icon if user is deleted', () => {
    const { getByTestId } = render(<Main />);

    expect(getByTestId('deleteSvg')).toBeInTheDocument();
  });
});
