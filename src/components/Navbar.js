import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

// styles and images
import './Navbar.css'
import Logo from '../assets/logo.svg'

export default function Navbar() {
    const { user } = useAuthContext()
    const { logout, isPending } = useLogout()

    return (
        <div className="navbar">
            <ul>
                <li className="logo">
                    <img src={Logo} alt="logo" />
                    <span>Alpersan Manager</span>
                </li>

                {!user && <li><Link to="/login">Login</Link></li>}
                {!user && <li><Link to="/signup">Signup</Link></li>}

                <li>
                    {(!isPending && user) && <button className="btn" onClick={logout}>Logout</button>}
                    {isPending && <button className="btn" disabled>Pending...</button>}
                </li>
            </ul>
        </div>
    )
}
