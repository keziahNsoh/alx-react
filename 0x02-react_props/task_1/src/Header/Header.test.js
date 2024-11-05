import { render } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  test('renders without crashing', () => {
    render(<Header />);
  });

  test('renders an img tag and an h1 tag', () => {
    const { container } = render(<Header />);
    const imgTag = container.querySelector('img');
    const h1Tag = container.querySelector('h1');
    expect(imgTag).toBeInTheDocument();
    expect(h1Tag).toBeInTheDocument();
  });
});

