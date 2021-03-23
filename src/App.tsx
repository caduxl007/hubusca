import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import IndexProvider from './context';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <IndexProvider>
        <Routes />
      </IndexProvider>
      <GlobalStyle />
    </BrowserRouter>
  </>
);

export default App;
