import { render, screen } from '@testing-library/react';
import App from './App';

test('Necesito que aparezca esta frase', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hola Mundo en react/i);
  expect(linkElement).toBeInTheDocument();
});
