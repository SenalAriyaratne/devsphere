import logo from './logo.svg';
import './App.css';
import TitleBar from './components/TitleBar';
import Toolbar from './components/ToolBar';
import Dashboard from './pages/Dashboard';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import Projects from './pages/Projects';
import Chat from './pages/Chat';
function App() {

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleCreateAccount = () => {
    setShowCreateAccount(true);
  };

  const handleCloseCreateAccount = () => {
    setShowCreateAccount(false);
  };


  return (
    <Router>
    <div className="flex flex-col h-screen overflow-auto">
      <TitleBar isSignedIn={isSignedIn} onSignIn={handleSignIn} onCreateAccount={handleCreateAccount} />
      {isSignedIn ? (
        <div className="flex flex-grow ">
          <Toolbar/>
          <div className="flex-grow">
            {/* Other components */}
            
            <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/chat" element={<Chat />} /> 
            </Routes>
          </div>
        </div>
      ) : (
        showCreateAccount ? (
          <CreateAccount  onClose={handleCloseCreateAccount}/>
        ) : (
         <Home />
        )
      )}
    </div>
    </Router>
   
   
    
  );
}

export default App;
