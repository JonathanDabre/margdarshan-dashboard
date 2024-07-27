import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import MargLogo from '../../assets/Marg-Logo.svg'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex justify-center  bg-gray-100 mt-4">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <img src={MargLogo} alt="Logo" className="h-8" />
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Username
            </label>
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input
                id="username"
                type="username"
                className="w-full px-2 py-1 focus:outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaLock className="text-gray-500 mr-3" />
              <input
                id="password"
                type="password"
                className="w-full px-2 py-1 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#17C1E8] text-white py-2 rounded-full hover:bg-[#06a1c4] focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
