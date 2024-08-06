import React from 'react';

import '../styles/Header.css'; // Create this CSS file for additional styling

const Header = () => {
  return (
    <div className="container-fluid header">
      <div className="row align-items-center">
        <div className="col">
          <div className="d-flex align-items-center">
            <span className="logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stack" viewBox="0 0 16 16">
                <path d="M8.207 1.358a.5.5 0 0 1 .586 0l6.69 5.356a.5.5 0 0 1 0 .788l-6.69 5.356a.5.5 0 0 1-.586 0L1.518 7.502a.5.5 0 0 1 0-.788l6.69-5.356z"/>
                <path d="M1.89 9.227a.5.5 0 0 1 .683-.183L8 12.1l5.427-3.056a.5.5 0 1 1 .5.866L8.5 13.147a.5.5 0 0 1-.5 0L2.073 9.91a.5.5 0 0 1-.183-.683z"/>
                <path d="M1.89 11.227a.5.5 0 0 1 .683-.183L8 14.1l5.427-3.056a.5.5 0 1 1 .5.866L8.5 15.147a.5.5 0 0 1-.5 0L2.073 11.91a.5.5 0 0 1-.183-.683z"/>
              </svg>
            </span>
            <input type="text" className="form-control search-bar space" placeholder="Search..." />
          </div>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary upgrade-btn">Upgrade</button>
        </div>
        <div className="col-auto">
          <button className="btn text-white upgrade-btn">New</button>
        
        </div>
        
        <div className="col-auto">
          <div className="d-flex align-items-center">
            <span className="menu-icon">
              <i className="bi bi-grid"></i>
            </span>
            <span className="profile-icon">
              <img src="profile_picture_url" alt="Profile" className="rounded-circle" width="32" height="32" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
