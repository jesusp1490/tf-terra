import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';

const Navbar = ({ logo, menuItems }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="Terra Logo" className="navbar__logo-img" />
            </div>
            <button
                className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--open' : ''}`}
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
            >
                <span className="navbar__toggle-icon"></span>
            </button>
            <ul className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
                <li className="navbar__menu-item">
                    <a href="#" className="navbar__menu-link">{menuItems.menu_item_1}</a>
                </li>
                <li className="navbar__menu-item">
                    <a href="#" className="navbar__menu-link">{menuItems.menu_item_2}</a>
                </li>
                <li className="navbar__menu-item">
                    <a href="#" className="navbar__menu-link">{menuItems.menu_item_3}</a>
                </li>
            </ul>
        </nav>
    );
};

Navbar.propTypes = {
    logo: PropTypes.string.isRequired,
    menuItems: PropTypes.shape({
        menu_item_1: PropTypes.string.isRequired,
        menu_item_2: PropTypes.string.isRequired,
        menu_item_3: PropTypes.string.isRequired,
    }).isRequired,
};

export default Navbar;