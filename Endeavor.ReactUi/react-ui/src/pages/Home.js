import React from 'react';
import logo from '../assets/images/logoDS.PNG';
const Home = () => {
    return (
       
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-b from-slate-200 to-blue-300">
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-200 to-blue-300">
                <div className="flex flex-col items-center">
                    <img src={logo} alt="Logo" className="w-32 h-32 mb-4" />
                    <h1 className="text-5xl font-bold text-blue-500 text-center">
                        <span>Welcome to</span>
                        <span className="dev"> DEV</span>
                        <span>SPHERE</span>
                    </h1>
                </div>
                <div className="mt-8 text-center px-4">
                    <p className="text-xl mb-4 text-gray-800">
                        Your ultimate development platform.
                    </p>
                </div>
            </div>
            </div>
            );
};

export default Home;

