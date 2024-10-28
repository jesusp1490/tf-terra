import React from 'react';
import '../Navbar/Navbar.scss'

const Navbar = ({ logo, menus }) => {
    return (
        <nav className='navbar'>
            <div className='navbar__logo'>
                <img src={logo} alt='Logo' className='navbar__logo-img' />
            </div>
            <ul className='navbar__menus'>
                {menus.map((menu, index) => (
                    <li key={index} className='navbar__menu-item'>
                        <a href={menu.url} className='navbar__menu'>
                            {menu.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;