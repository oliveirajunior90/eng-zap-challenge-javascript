import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/test/render-with-theme';
import { Products } from '.';

test('renders learn react link', () => {
  renderWithTheme(<Products />);
  const linkElement = screen.getByText(/Almir/i);
  expect(linkElement).toBeInTheDocument();
});
