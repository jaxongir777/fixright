import React from 'react'
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-container">

                    <a href="#" className="logo-header">
                        <div className="logo-icon">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1a6 6 0 0 1-7.9 7.9l-6.4 6.4a2.1 2.1 0 0 1-3-3l6.4-6.4a6 6 0 0 1 7.9-7.9z" />
                            </svg>
                        </div>

                        <div className="logo-box-header">
                            <h1 className="header-logo-title">FixRight</h1>
                            <p className="header-logo-text">
                                <span className="location-dot"></span>
                                Phoenix, AZ
                            </p>
                        </div>
                    </a>

                    <div className="header-actions">
                        <a href="#owner" className="header-owner-btn">
                            Owner view
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M7 17 17 7M7 7h10v10" />
                            </svg>
                        </a>

                        <a href="#contact" className="header-btn">
                            <span>Get a quote</span>
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header
