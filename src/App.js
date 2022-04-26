import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import RoutesApp from './routes';
import './global.css'

function App() {
  return (
    <BrowserRouter>
        <RoutesApp/>
    </BrowserRouter>
  );
}

export default App;
