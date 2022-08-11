import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("Tela de inserção de Email", () => {
  
  test('have input Email', () => {
    // acessar os elementos da tela
    render(<App />);
    // interagir com os elementos (se for necessário)  
    const inputEmail = screen.getByLabelText('Email');
    // interagir com os elementos (se for necessário)
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });
  
  test('Verificando se existe um botão de Enviar', () => {
    render(<App />);
    const inputButton = screen.getByTestId('id-send');
    expect(inputButton).toBeInTheDocument();
  });
  
  test('Verificando se existe dois botões', () => {
    render(<App />);
    const inputButton = screen.getAllByRole('button');
    expect(inputButton).toHaveLength(2);
  });
  
  test('Verificandoo evento dos elemtentos da pagina', () => {
    // acessar os elementos da tela
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    const inputButton = screen.getByTestId('id-send');
    // interagir com os elementos
    userEvent.type(inputEmail, "teste@teste.com");
    userEvent.click(inputButton);
    // fazer os testes
    expect(inputEmail).toHaveValue("");
  });
});

// 1 acessar os elementos da tela
// 2 interagir com os elementos (se for necessário)
// 3 fazer os testes