import React from 'react';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-light' : 'navbar-dark'} bg-${isDarkMode ? 'light' : 'dark'}`}>
            <div className="container">
                <h1 className={`navbar-brand mx-auto mb-0 ${isDarkMode ? 'text-dark' : 'text-success'}`}>Favorite Movie Directory</h1>
                <button className={`btn btn-sm fw-bold ${isDarkMode ? 'btn-dark' : 'btn-success'}`} onClick={toggleDarkMode}>
                    {isDarkMode ? "Light": "Dark"} Theme
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
