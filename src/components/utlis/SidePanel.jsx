import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidePanelItem from './SidePanelItem';
import sidePanelData from '../../data/utlis/SidePanel';
import margLogo from '../../assets/Marg-Logo.svg';
import { useAuth } from '../../context/AuthContext';

const SidePanel = () => {
  const [activeItemId, setActiveItemId] = useState(1);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleItemClick = (id, path) => {
    setActiveItemId(id);
    navigate(path);
  };

  const filteredSidePanelData = sidePanelData.filter(item => {
    if (user.role === 'admin') return true;
    if (user.role === 'blog' && item.path.includes('blog')) return true;
    if (user.role === 'otp' && item.path === '/otp-message') return true;
    return false;
  });

  return (
    <div className='fixed top-0 left-0 w-[20%] 2xl:w-[18%] h-screen bg-[#F7F9FB] flex flex-col overflow-y-auto'>
      <div className="flex flex-col justify-start pt-6 px-5 w-full">
        <div className="flex items-center pb-4 px-3 border-b">
          <img src={margLogo} alt='Margdarshan'/>
        </div>
        <div className="sidePanel-items flex flex-col pt-5 items-start">
          {filteredSidePanelData.map(item => (
            <SidePanelItem
              key={item.id}
              icon={item.icon}
              optionName={item.optionName}
              isActive={item.id === activeItemId}
              onClick={() => handleItemClick(item.id, item.path)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
