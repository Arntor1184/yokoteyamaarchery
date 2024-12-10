import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact'; 

test('dropdown menu works and options can be selected', () => {
  render(<Contact />);  

  const dropdown = screen.getByLabelText(/Reason for Contact:/i);
  expect(dropdown).toBeInTheDocument();

  fireEvent.change(dropdown, { target: { value: 'tournament-entry' } });
  expect(dropdown.value).toBe('tournament-entry');
});

test('submit button works and shows popup', () => {
  render(<Contact />);  
  
  const submitButton = screen.getByText(/Submit/i);
  fireEvent.click(submitButton);

  const popupMessage = screen.getByText(/Thank you for contacting us! Your message will shoot straight through to Arthur himself./i);
  expect(popupMessage).toBeInTheDocument();

  const okButton = screen.getByText(/OK/i);
  fireEvent.click(okButton);

  expect(popupMessage).not.toBeInTheDocument();
});

test('should allow text to be entered into input fields', () => {
  render(<Contact />);

  const nameInput = screen.getByLabelText(/Name:/i); 
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  expect(nameInput.value).toBe('John Doe');

  const emailInput = screen.getByLabelText(/Email:/i); 
  fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
  expect(emailInput.value).toBe('johndoe@example.com');

  const messageInput = screen.getByLabelText(/Message:/i); 
  fireEvent.change(messageInput, { target: { value: 'This is a test message' } });
  expect(messageInput.value).toBe('This is a test message');
});

test('attach file button works and shows alert message', () => {
  render(<Contact />);

  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

  const attachFileButton = screen.getByText(/Attach File/i);
  fireEvent.click(attachFileButton);

  expect(alertSpy).toHaveBeenCalledWith("Straight into the garbage! Send me a letter if it's important!");

  alertSpy.mockRestore();
});
