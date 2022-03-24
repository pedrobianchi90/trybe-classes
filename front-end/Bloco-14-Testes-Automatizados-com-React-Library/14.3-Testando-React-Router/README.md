14.3 - Testando React Router

Funçao genérica Render With Router:

import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={history}>{component}</Router>), history,
  });
};

export default renderWithRouter;


Modelo de teste em React Router

it('deve renderizar o componente Sobre', () => {
  const { history } = renderWithRouter(<App />);

  const aboutLink = screen.getByRole('link', { name: 'Sobre' });
  expect(aboutLink).toBeInTheDocument();
  userEvent.click(aboutLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/about');

  const aboutTitle = screen.getByRole('heading',
    { name: 'Você está na página Sobre' });
  expect(aboutTitle).toBeInTheDocument();
});