import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tooltips examples', () => {
  render(<App />);
  const linkElement = screen.getByText(/tooltips examples/i);
  expect(linkElement).toBeInTheDocument();
});
