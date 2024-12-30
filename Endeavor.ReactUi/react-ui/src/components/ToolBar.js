import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const Toolbar = () => {
  const [selectedTool, setSelectedTool] = useState('');

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };

  return (
    <div className="tool-bar ">
      <div className="flex flex-col items-center mt-2 ">
        <Link to="/dashboard" className="tool-item">
          <span className="material-icons tool-icon">dashboard</span>
          <span className="tooltip-text">Dashboard</span>
        </Link>
        <div className="tool-item">
          <span className="material-icons tool-icon">apps</span>
          <span className="tooltip-text">Projects</span>
        </div>
        <div className="tool-item">
          <span className="material-icons tool-icon">search</span>
          <span className="tooltip-text">Search</span>
        </div>
        <div className="tool-item">
          <span className="material-icons tool-icon">chat</span>
          <span className="tooltip-text">Search</span>
        </div>
        <div className="tool-item">
          <span className="material-icons tool-icon">settings</span>
          <span className="tooltip-text">Chat</span>
        </div>
        <div className="tool-item">
          <span className="material-icons tool-icon">help</span>
          <span className="tooltip-text">Help</span>
        </div>
        <div className="tool-item">
          <span className="material-icons tool-icon">logout</span>
          <span className="tooltip-text">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;