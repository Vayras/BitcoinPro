'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="mobile-navbar-overlay">
      <div className="mobile-navbar">
        {/* Header */}
        <div className="mobile-navbar-header">
          <a href="/" className="mobile-navbar-logo" onClick={onClose}>
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#F7931A"/>
                <path d="M23.189 14.02C23.6296 11.7906 22.0647 10.5906 19.8647 9.83063L20.5647 7.24063L18.8647 6.83063L18.1947 9.31063C17.7347 9.20063 17.2647 9.10063 16.7947 9.00063L17.4747 6.48063L15.7747 6.07063L15.0747 8.66063C14.6947 8.58063 14.3247 8.50063 13.9747 8.41063L13.9747 8.40063L11.6747 7.83063L11.2347 9.66063C11.2347 9.66063 12.4947 9.94063 12.4647 9.96063C13.1647 10.1306 13.2947 10.5706 13.2747 10.9306L12.4747 13.9306C12.5247 13.9406 12.5947 13.9606 12.6747 13.9906C12.6147 13.9706 12.5447 13.9506 12.4747 13.9306L11.3247 18.2306C11.2347 18.4506 11.0047 18.7906 10.4747 18.6506C10.4947 18.6806 9.24469 18.3506 9.24469 18.3506L8.44469 20.3706L10.6247 20.9106C11.0447 21.0106 11.4547 21.1206 11.8547 21.2206L11.1447 23.8406L12.8447 24.2506L13.5447 21.6606C14.0247 21.7906 14.4847 21.9106 14.9347 22.0206L14.2447 24.5906L15.9447 25.0006L16.6547 22.3906C19.4847 22.9306 21.6147 22.7306 22.4847 20.2306C23.1747 18.2306 22.4647 17.0706 21.0247 16.3006C22.0747 16.0306 22.8547 15.2706 23.189 14.02ZM19.2247 19.0706C18.7247 21.2306 15.0247 20.0306 13.8747 19.7306L14.8247 15.9706C15.9747 16.2706 19.7647 16.7706 19.2247 19.0706ZM19.7247 13.9706C19.2747 15.9306 16.2247 14.9306 15.2747 14.6906L16.1247 11.2906C17.0747 11.5306 20.1947 11.9306 19.7247 13.9706Z" fill="white"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-bitcoin">Bitcoin</span>
              <span className="logo-pro">Pro</span>
            </div>
          </a>
          <button className="mobile-navbar-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <div className="mobile-navbar-content">
          <nav className="mobile-navbar-nav">
            <a href="/" className={`mobile-nav-item ${pathname === '/' ? 'active' : ''}`} onClick={onClose}>Home</a>
            <a href="/about" className={`mobile-nav-item ${pathname.includes('/about') ? 'active' : ''}`} onClick={onClose}>About</a>
            <a href="/blog" className={`mobile-nav-item ${pathname.includes('/blog') ? 'active' : ''}`} onClick={onClose}>Blog</a>
            <a href="/contact" className={`mobile-nav-item ${pathname.includes('/contact') ? 'active' : ''}`} onClick={onClose}>Contact</a>
          </nav>

          {/* Download Button */}
          <div className="mobile-navbar-download">
            <a href="/download" className="mobile-download-btn" onClick={onClose}>
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;