import { render, screen } from '@testing-library/react';
import Center from './Center';

test('renders learn react link', () => {
  render(<Center />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
