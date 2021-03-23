import React from 'react';

import { AppProvider } from './AppContext';

const IndexProvider: React.FC = ({ children }) => (
  <AppProvider>{children}</AppProvider>
);

export default IndexProvider;
