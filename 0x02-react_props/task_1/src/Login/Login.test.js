import { render } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  test('renders without crashing', () => {
    render(<Login />);
  });

  test('renders 2 input tags and 2 label tags', () => {
    const { container } = render(<Login />);
    const inputTags = container.querySelectorAll('input');
    const labelTags = container.querySelectorAll('label');
    expect(inputTags.length).toBe(2);
    expect(labelTags.length).toBe(2);
  });
});

