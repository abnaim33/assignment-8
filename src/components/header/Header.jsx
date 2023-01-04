import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="container">

            <header>
                <Link to="/" className='logo'>Skill Zone</Link>

                {/* <div id="menu" className="fas fa-bars"></div> */}

                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>

                </nav>

            </header>










        </div>
    )
}

export default Header