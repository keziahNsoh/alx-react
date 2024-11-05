import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders without crashing', () => {
    render(<Footer />);
  });

  test('contains the text "Copyright"', () => {
    const { getByText } = render(<Footer />);
    const copyrightText = getByText(/Copyright/i);
    expect(copyrightText).toBeInTheDocument();
  });
});

