import React from 'react';
import '../styles/Header.css';
//import styles from '@styles/Header.module.scss';
import { FaBars, FaTimes, FaSearch, FaShoppingCart, FaUserAlt } from 'react-icons/fa';

const Header = () => {
    return (
        <>
            <nav>
            <div className="menu-icon">
                <span><FaBars/></span>
            </div>
            <div className="logo">
                NAKAMA
            </div>
            <div className="nav-items">
                <li><a href="#home">Home</a></li>
                <li><a href="#footer">About</a></li>
                <li><a href="#collection">New Collection</a></li>

            </div>
            <div className="search-icon">
                <span><FaSearch/></span>
            </div>
            <div className="cancel-icon">
                <span><FaTimes/></span>
            </div>
            <form action="#">
                <input type="search" className="search-data" placeholder="Search" required />
                <button type="submit"><FaSearch/></button>
            </form>

            <div className="fixed-icon">
                <span><FaShoppingCart/></span>
            </div>
            <div className="fixed-icon">
                <span><FaUserAlt/> </span>
            </div>
            
        </nav>
        </>
    )
}

export default Header;