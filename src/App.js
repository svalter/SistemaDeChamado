import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import RoutesApp from './routes';
import './global.css'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
