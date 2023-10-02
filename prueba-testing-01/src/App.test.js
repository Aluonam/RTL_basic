import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const componenteUserForm =  screen.getByTestId('user-form'); 
  // en componente UserForm debe especificarse el id data-testid que es igual al nombre que hemos puesto dentro de (getByTestId) return (<form data-testid="user-form"></form>
  expect(componenteUserForm).toBeInTheDocument();
});
