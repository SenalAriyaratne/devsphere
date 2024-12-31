import React from 'react';

const WelcomeCard = ({ firstName }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full relative">
      <div className="absolute top-0 right-0 mt-1 mr-1 bg-blue-500 text-white p-1 rounded-full shadow-md">
        <span className="material-icons text-xl">waving_hand</span>
      </div>
      <h2 className="text-5xl font-bold">
        <span className="text-black">Hi, </span>
        <span className="text-teal-500">{firstName}!</span>
      </h2>
      <p className="text-lg mt-4">Welcome to your dashboard.</p>
    </div>
  );
};

export default WelcomeCard;