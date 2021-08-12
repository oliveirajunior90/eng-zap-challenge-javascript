import { render, screen } from '@testing-library/react';
import Home from '.';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/almir/i);
  expect(linkElement).toBeInTheDocument();
});
