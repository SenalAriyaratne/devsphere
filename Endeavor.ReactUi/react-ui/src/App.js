import logo from './logo.svg';
import './App.css';
import TitleBar from './components/TitleBar';
import Toolbar from './components/ToolBar';
import React, { useState } from 'react';
import Home from './pages/Home';

function App() {

  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  return (
    // <div className="flex flex-col h-screen">
    //   <TitleBar />
    //   <div className="flex flex-grow">
    //     <Toolbar />
    //     <div className="flex-grow">
    //       {/* Other components */}
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col h-screen">
      <TitleBar isSignedIn={isSignedIn} onSignIn={handleSignIn} />
      {isSignedIn ? (
        <div className="flex flex-grow">
          <Toolbar />
          <div className="flex-grow">
            {/* Other components */}
          </div>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
