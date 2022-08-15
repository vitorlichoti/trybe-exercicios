import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Teste da aplicação toda', () => {

  it('Deve renderizar o componente início', () => {
    const { history } = renderWithRouter(<App />);
    
    const homeLink = screen.getByRole('link', { name: 'Início' });
    expect(homeLink).toBeInTheDocument();

    userEvent.click(homeLink);
    const { pathname } = history.location;

    expect(pathname).toBe('/');
  })

  it('deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App />);
  
    const aboutLink = screen.getByRole('link', {
      name: 'Sobre',
    });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
  
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  
    const aboutTitle = screen.getByRole('heading', {
      name: 'Você está na página Sobre',
    });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina');

    const notFoundTitle = screen.getByTestId('not-found');
    expect(notFoundTitle).toBeInTheDocument();
  });
});
