import React, { useState, useEffect } from 'react';
import { IoMdHome } from "react-icons/io";
import { FaUserCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import ProfileModal from './ProfileModal'; // Import the modal component

export const Navbar = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const pathNameMap = {
    '/dashboard': 'Dashboard',
    '/blog-list': 'Blog List',
    '/blog-new': 'New Blog',
    '/blog-comment': 'Blog Comment',
    '/blog-category': 'Blog Category',
    '/otp-message': 'OTP Message',
    '/users': 'Users'
  };

  const currentPathName = pathNameMap[location.pathname] || 'Dashboard';

  let hideDropdownTimeout;

  const handleMouseEnter = () => {
    clearTimeout(hideDropdownTimeout);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    hideDropdownTimeout = setTimeout(() => {
      setShowDropdown(false);
    }, 300); // Adjust the delay as needed
  };

  useEffect(() => {
    return () => {
      clearTimeout(hideDropdownTimeout);
    };
  }, []);

  return (
    <>
      <div className={`pt-3 sticky ${showModal ? 'backdrop-blur-sm' : ''}`}>
        <div className='py-4 flex justify-between'>
          <div>
            <div className='flex space-x-2 pt-[2px]'>
              <IoMdHome className='text-[#96A0B1] mt-1' />
              <h3 className='text-gray-500'>/</h3>
              <h3 className='text-[#344767] font-normal'>{currentPathName}</h3>
            </div>
            <h3 className='pt-[2px] font-bold text-[#344767] text-md'>{currentPathName}</h3>
          </div>
          <div 
            className='relative flex space-x-3 justify-center items-center cursor-pointer'
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            {isLoggedIn ? (
              <div className='flex items-center space-x-1 relative'>
                <FaUserCircle className='text-[#344767]' />
                {showDropdown && (
                  <div className='absolute w-[130px] top-8 right-0 bg-white shadow-lg rounded-md p-2'>
                    <div className='py-1 px-4 hover:bg-gray-100 cursor-pointer' onClick={() => setShowModal(true)}>My Profile</div>
                    <div className='py-1 px-4 hover:bg-gray-100 cursor-pointer' onClick={() => setIsLoggedIn(false)}>Logout</div>
                  </div>
                )}
              </div>
            ) : (
              <div className='flex items-center space-x-1'>
                <FaUserCircle className='text-[#344767]' />
                  <span className='text-[#344767] text-[14px] font-semibold'>Login</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {showModal && <ProfileModal onClose={() => setShowModal(false)} />}
    </>
  );
};
