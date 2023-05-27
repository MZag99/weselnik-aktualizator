import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <Link to='login' className='header__logo'>W.</Link>
            </div>
            <div className='header__right'>
            </div>
        </div>
    );
};

export default Header;