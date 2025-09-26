'use client';
import React, { useState } from 'react';
import MobileNavbar from './mobile-navbar';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          {/* Logo Section */}
          <a href="/" className="navbar-logo">
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0Z" fill="#F7931A"/>
                <path d="M23.189 14.02C23.6296 11.7906 22.0647 10.5906 19.8647 9.83063L20.5647 7.34063L18.9647 6.94063L18.2947 9.32063C17.8747 9.21063 17.4447 9.11063 17.0147 9.01063L17.6947 6.61063L16.0947 6.21063L15.3947 8.70063C15.0447 8.62063 14.7047 8.54063 14.3747 8.45063L14.3747 8.44063L12.1747 7.89063L11.7547 9.60063C11.7547 9.60063 12.9547 9.87063 12.9247 9.89063C13.5847 10.0406 13.7047 10.4506 13.6847 10.7806L12.8947 13.6306C12.9447 13.6406 13.0047 13.6606 13.0747 13.6906C13.0147 13.6706 12.9447 13.6506 12.8747 13.6306L11.7547 17.7306C11.6747 17.9306 11.4647 18.2406 11.0147 18.1306C11.0347 18.1606 9.83469 17.8306 9.83469 17.8306L8.83469 19.7306L10.9047 20.2406C11.2847 20.3306 11.6547 20.4306 12.0147 20.5206L11.3047 23.0406L12.9047 23.4406L13.6047 20.9506C14.0447 21.0706 14.4647 21.1806 14.8747 21.2806L14.1747 23.7606L15.7747 24.1606L16.4847 21.6406C19.2247 22.1906 21.2747 21.9906 22.1747 19.5906C22.8747 17.6906 22.1747 16.5906 20.7747 15.8906C21.7747 15.6406 22.5247 14.9406 23.189 14.02ZM19.0147 18.4306C18.5147 20.4306 15.1747 19.2306 14.0747 18.9306L14.9747 15.5306C16.0747 15.8306 19.5447 16.3306 19.0147 18.4306ZM19.5147 13.9806C19.0647 15.7806 16.2747 14.7806 15.3747 14.5306L16.1747 11.5306C17.0747 11.7806 20.0047 12.1306 19.5147 13.9806Z" fill="white"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-bitcoin">Bitcoin</span>
              <span className="logo-pro">Pro</span>
            </div>
          </a>

          {/* Right Section */}
          <div className="navbar-right">
            {/* Navigation Menu - Desktop Only */}
            <nav className="navbar-nav">
              <a href="/" className="nav-item active">Home</a>
              <a href="/about" className="nav-item">About</a>
              <a href="/blog" className="nav-item">Blog</a>
              <a href="/contact" className="nav-item">Contact</a>
            </nav>

            {/* Download Button - Desktop Only */}
            <a href="/download" className="navbar-btn">
              Download
            </a>

            {/* Mobile Menu Icon - Tablet & Mobile Only */}
            <button className="mobile-menu-btn" onClick={handleMobileMenuToggle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5H22V7H2V5ZM2 11H22V13H2V11ZM2 17H22V19H2V17Z" fill="#F5F5F5"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navbar */}
      <MobileNavbar isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} />
    </>
  );
};

export default Navbar;