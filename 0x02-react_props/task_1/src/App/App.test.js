import { render } from '@testing-library/react';
import App from './App';
import Notifications from '../Notifications/Notifications'; // Adjust path as needed
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App Component', () => {
  test('contains the Notifications component', () => {
    const { getByTestId } = render(<App />);
    const notificationsComponent = getByTestId('notifications');
    expect(notificationsComponent).toBeInTheDocument();
  });

  test('contains the Header component', () => {
    const { getByTestId } = render(<App />);
    const headerComponent = getByTestId('header');
    expect(headerComponent).toBeInTheDocument();
  });

  test('contains the Login component', () => {
    const { getByTestId } = render(<App />);
    const loginComponent = getByTestId('login');
    expect(loginComponent).toBeInTheDocument();
  });

  test('contains the Footer component', () => {
    const { getByTestId } = render(<App />);
    const footerComponent = getByTestId('footer');
    expect(footerComponent).toBeInTheDocument();
  });
});

