import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import GlobalStyle from './styles/GlobalStyle';
library.add(far, fas);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <Router />
  </>
);
