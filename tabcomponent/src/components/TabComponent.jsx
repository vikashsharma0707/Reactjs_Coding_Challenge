import React, { useState } from 'react';


const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="tab-container">
      {/* Tab Buttons */}
      <div className="tab-buttons">
        <button
          className={activeTab === 'home' ? 'tab-button active' : 'tab-button'}
          onClick={() => setActiveTab('home')}
        >
          Home
        </button>
        <button
          className={activeTab === 'profile' ? 'tab-button active' : 'tab-button'}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button
          className={activeTab === 'settings' ? 'tab-button active' : 'tab-button'}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'home' && <p>🏠 Welcome to the Home tab!</p>}
        {activeTab === 'profile' && <p>👤 This is your Profile information.</p>}
        {activeTab === 'settings' && <p>⚙️ Customize your Settings here.</p>}
      </div>
    </div>
  );
};

export default TabComponent;
