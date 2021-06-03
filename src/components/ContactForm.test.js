import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';

test('renders without errors', ()=>{
  render(<ContactForm />)
});

test('renders the contact form header', ()=> {
  render(<ContactForm />);
  const header = screen.getByText(/contact form/i);
  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
  expect(header).toContainHTML('Contact Form');
});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
  render(<ContactForm />);
  const firstName = screen.getByLabelText(/first name/i);
  userEvent.type(firstName, 'abcd');
  const nameError = await screen.findByText(/error: firstname must have at least 5 characters./i);
  expect.toBeInTheDocument(nameError);
  
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
  render(<ContactForm />);
  const button = screen.getByRole('button');
  userEvent.click(button);
  const nameError = await screen.findByText(/error: firstname must have at least 5 characters./i);
  const lastNameError = await screen.findByText(/error: lastname is a required field./i);
  const emailError = await screen.findByText(/error: email must be a valid email address./i);
  expect.toBeInTheDocument(nameError, lastNameError, emailError);
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
  render(<ContactForm />);
    
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
  render(<ContactForm />);
    
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
  render(<ContactForm />);
    
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
  render(<ContactForm />);
    
});

test('renders all fields text when all fields are submitted.', async () => {
  render(<ContactForm />);
    
});