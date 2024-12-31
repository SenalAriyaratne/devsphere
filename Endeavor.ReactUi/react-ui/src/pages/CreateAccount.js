import React from 'react';
import { useNavigate } from 'react-router-dom';
import githubIcon from '../assets/images/gh.jpg';
import gmailIcon from '../assets/images/gmail.webp';

const CreateAccount = ({ onClose }) => {
    const navigate = useNavigate();

    const handleClose = () => {
        onClose();
        navigate('/');
    };

    return (
        <div className="md:fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center sm:overflow-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative mx-4 sm:mx-auto my-8">
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    <span className="material-icons">close</span>
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Let's Get Started</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Create Account</button>
                </form>
                <div className="mt-6">
                    <p className="text-center text-sm text-gray-600">Or create an account using</p>
                    <div className="mt-2 flex justify-center space-x-4">
                        <button className="bg-white text-white p-1 rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                            <img src={gmailIcon} alt="Gmail" className="w-8 h-8 rounded-full" />
                        </button>
                        <button className="bg-white text-white p-1 rounded-full shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                            <img src={githubIcon} alt="GitHub" className="w-8 h-8 rounded-full" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;