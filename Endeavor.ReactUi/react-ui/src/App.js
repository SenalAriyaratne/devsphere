import logo from './logo.svg';
import './App.css';
import TitleBar from './components/TitleBar';
import Toolbar from './components/ToolBar';
import Dashboard from './pages/Dashboard';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {

  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  return (
    <Router>
    <div className="flex flex-col h-screen">
      <TitleBar isSignedIn={isSignedIn} onSignIn={handleSignIn} />
      {isSignedIn ? (
        <div className="flex flex-grow">
          <Toolbar />
          <div className="flex-grow">
            {/* Other components */}
            <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </div>
    </Router>
  );
}

export default App;
