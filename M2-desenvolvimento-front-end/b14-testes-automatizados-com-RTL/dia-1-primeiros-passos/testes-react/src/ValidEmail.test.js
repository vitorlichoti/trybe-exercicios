import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const validEmail = screen.getByTestId('id-valid-email');
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
  expect(validEmail.style.color).toBe('green');
});

test('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'email@email';
    render(<ValidEmail email={ EMAIL_USER } />);
    const invalidEmail = screen.getByTestId('id-invalid-email');
    const isInvalid = screen.getByText('Email Inválido');
    expect(isInvalid).toBeInTheDocument();
    expect(invalidEmail.style.color).toBe('red');
});