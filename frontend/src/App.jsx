import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider.jsx';


import NavBar from './ui/NavBar';
import { Router } from './Router';

function App() {
  return (
    <BrowserRouter basename="/">
      <AuthProvider>
        <div className="App">
          <main>
            <NavBar />
            <div className="contents">
              <Router />
            </div>
          </main>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
