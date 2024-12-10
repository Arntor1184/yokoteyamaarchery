import { render, screen } from '@testing-library/react';
import Introduction from './Introduction';

test('should display Arthur image', () => {
  render(<Introduction />);

 
  const arthurImage = screen.getByAltText(/Arthur Kitagawa/i);
  
  
  expect(arthurImage).toBeInTheDocument();

 
  expect(arthurImage).toHaveAttribute('src', expect.stringContaining('Arthur.jpeg'));
});
