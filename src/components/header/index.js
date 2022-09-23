import React from 'react';
import './header.css'
const Header = () => {
    return(
        <div className='headerContainer'>
            <header>
                <span>The Shopping Store</span>
                <span className='smallFont'>Home</span>
                <span className='smallFont'>All Products</span>
            </header>
        </div>
    )
}

export default Header;