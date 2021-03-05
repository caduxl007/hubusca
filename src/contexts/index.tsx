import React from 'react';

import { AuthProvider } from './AuthContext';
import { NaverProvider } from './NaverContext';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <NaverProvider>{children}</NaverProvider>;
  </AuthProvider>
);

export default AppProvider;
