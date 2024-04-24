import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
function Navbar() {
    return (
        <div>
            <div className="nav-wrapper">
                <div className="nav-left">
                    <div className="logo">
                        Andrew
                    </div>
                    <span>
                        <Toggle />
                    </span>
                </div>
                <div className="nav-right">
                    <div className="nav-list">
                        <ul>
                            <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                                <li>Home</li>
                            </Link>
                            <Link spy={true} to='Services' smooth={true} >
                                <li>Services</li>
                            </Link>
                            <Link spy={true} to='Slide' smooth={true} >
                                <li>Portfolio</li>
                            </Link>
                            <Link spy={true} to='Experience' smooth={true} >
                                <li>Experience</li>
                            </Link>
                            <Link spy={true} to='Testimonial' smooth={true} >
                                <li>Testimonial</li>
                            </Link>
                        </ul>
                    </div>
                    <button className="button nav-button">
                        <Link spy={true} to='Contact' smooth={true} >
                            <li>Contact</li>
                        </Link>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Navbar
