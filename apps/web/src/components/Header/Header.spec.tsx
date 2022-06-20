import { render } from '@testing-library/react';
import Header from '.';

describe('Header component', () => {
  it('should render logo correctly', () => {
    const { getByAltText } = render(<Header />);

    expect(getByAltText('logoMeuGuru')).toBeInTheDocument();
  });
});
