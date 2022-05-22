import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import App from './App';
import Positions from './components/Positions'
import Triggers from "./components/Triggers";

test('renders tooltips examples', () => {
  render(<App />);
  const linkElement = screen.getByText(/tooltips examples/i);
  expect(linkElement).toBeInTheDocument();
});

test('show tooltip with text `Right position`', async () => {
  const baseDom = render(<Positions />);
  fireEvent.mouseOver(baseDom.getByText("Right position"));

  expect(await baseDom.findByText("Right position")).toBeInTheDocument();
});

test('show clickable tooltip with placeholder text', async () => {
  const baseDom = render(<Triggers />);
  fireEvent.mouseDown(baseDom.getByRole('button', { name: /click me!/i }));

  expect(await baseDom.findByPlaceholderText("Type something...")).toBeInTheDocument();

});
