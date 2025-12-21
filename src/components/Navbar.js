import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import UserProfileMenu from './UserProfileMenu';

import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    const { user, isLoggedIn, logout } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsProfileDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const handleLogout = () => {
        logout();
        setIsProfileDropdownOpen(false);
    };

    const handleProfileClick = () => {
        setIsProfileMenuOpen(true);
        setIsProfileDropdownOpen(false);
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    <Link to="/" className="logo-container">
                        <div className="logo-icon-wrapper">
                            <img
                                src="/logo.png"
                                alt="Plan & Trip Logo"
                                className="navbar-logo-image"
                            />
                        </div>
                    </Link>

                    <div className="nav-right">
                        <button className="icon-btn notification-btn" aria-label="Notifications">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {!isLoggedIn ? (
                            <Link to="/login" className="login-signup-btn">
                                Login / Sign up
                            </Link>
                        ) : (
                            <div className="user-profile-container" ref={dropdownRef}>
                                <button
                                    className="user-profile-btn"
                                    onClick={toggleProfileDropdown}
                                    aria-label="User profile menu"
                                >
                                    <img src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=2563eb&color=fff`} alt={user?.name} className="user-avatar" />
                                    <span className="user-name">{user?.name?.split(' ')[0]}</span>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`dropdown-arrow ${isProfileDropdownOpen ? 'open' : ''}`}
                                    >
                                        <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {isProfileDropdownOpen && (
                                    <div className="profile-dropdown">
                                        <div className="profile-dropdown-header">
                                            <img src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=2563eb&color=fff`} alt={user?.name} className="dropdown-avatar" />
                                            <div className="dropdown-user-info">
                                                <p className="dropdown-user-name">{user?.name}</p>
                                                <p className="dropdown-user-email">{user?.email}</p>
                                            </div>
                                        </div>

                                        <div className="profile-dropdown-divider"></div>
                                        
                                        <button 
                                            className="profile-dropdown-item" 
                                            onClick={handleProfileClick}
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <span>My Profile</span>
                                        </button>

                                        <div className="profile-dropdown-divider"></div>

                                        <button className="profile-dropdown-item logout-btn" onClick={handleLogout}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <polyline points="16 17 21 12 16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>Logout</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* UserProfileMenu Component */}
            <UserProfileMenu 
                isOpen={isProfileMenuOpen}
                onClose={() => setIsProfileMenuOpen(false)}
                userName={user?.name || 'User'}
                userEmail={user?.email || 'user@email.com'}
            />
        </>
    );
};

export default Navbar;