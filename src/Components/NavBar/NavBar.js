import React, { useState } from 'react'
import './NavBar.css'
import Logo from '../../Assets/logo.png'
import wallet from '../../Assets/wallet.png'
import sell from '../../Assets/sell.png'
import userIcon from '../../Assets/account_circle.png'
import dashboard from '../../Assets/team_dashboard.png'
import { NavLink } from 'react-router-dom'


const NavBar = () => {

    const [linkActive, setLinkActive] = useState(true)

    const removeActiveLink = () => {
        setLinkActive(false)
    }

    const addActiveLink = () => {
        setLinkActive(true)
    }


    return (
        <nav className='NavigationBar'>
            <div className='imageContainer'>
                <img src={Logo} alt='logo' className='logo' />
            </div>
            <div className='MenuParent'>
                <p className='quickMenu'>Quick Menu</p>
                <ul>
                    <li onClick={addActiveLink}>
                        <NavLink style={{
                            fontWeight: (linkActive ? '600' : '400')
                        }} className='linkItem' to='/'>
                            <img src={dashboard} className="navIcons" alt='dashboard' />
                            <span>Overview</span>
                        </NavLink>
                    </li>
                    <li onClick={removeActiveLink}>
                        <NavLink className='linkItem' to='/customers'>
                            <img src={userIcon} className="navIcons" alt='userIcon' />
                            <span>Customers</span>
                        </NavLink>
                    </li>
                    <li onClick={removeActiveLink}>
                        <NavLink className='linkItem' to='/defaulters'>
                            <img src={wallet} className="navIcons" alt='wallet' />
                            <span>Defaulters</span>
                        </NavLink>
                    </li>
                    <li onClick={removeActiveLink}>
                        <NavLink className='linkItem' to='/fulfilments'>
                            <img src={sell} className="navIcons" alt='sell' />
                            <span>Fulfilment</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar