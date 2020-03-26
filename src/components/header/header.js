import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className='header row d-flex my-2 border'>
            <h2>
                <a href='#'>Star Wars</a>
            </h2>
            <ul className='nav justify-content-start'>
                <li className='nav-item'>
                    <a className='nav-link' href="#">People</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Planets</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Starships</a>
                </li>
            </ul>
        </div>
    )
}
export default Header;