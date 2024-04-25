import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>

            <menu>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="about">Om os</NavLink>
                </li>
                <li>
                    <NavLink to="contact">Kontakt</NavLink>
                </li>
                <li>
                    <NavLink to="admin">ADMIN</NavLink>
                </li>
            </menu>

        </nav>
    )
}

export default Navbar