
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './contexts/auth';
import Routes from './routes';
import './global.css'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer autoClose={3000} theme={'colored'} />
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
