import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testa se os clicks redirecionam corretamente', () => {
  it('Testa se o link About é renderizado e redirecionado corretamente', async () => {
    const { history } = renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: 'Sobre Mim' });
    expect(linkAbout).toBeInTheDocument();

    userEvent.click(linkAbout);
    expect(history.location.pathname).toBe('/about');
  });

  it('Testa se o link Projects é renderizado e redirecionado corretamente', () => {
    const { history } = renderWithRouter(<App />);

    const linkProjetos = screen.getByRole('link', { name: 'Projetos' });
    expect(linkProjetos).toBeInTheDocument();

    userEvent.click(linkProjetos);

    expect(history.location.pathname).toBe('/projects');
  });

  it('Testa se o link Contact é renderizado e redirecionado corretamente', () => {
    const { history } = renderWithRouter(<App />);

    const linkContact = screen.getByRole('link', { name: 'Contato' });
    expect(linkContact).toBeInTheDocument();

    userEvent.click(linkContact);

    expect(history.location.pathname).toBe('/contact');
  });
});
