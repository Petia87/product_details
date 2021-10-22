import React from 'react'
import classes from './Header.module.css';
import logo from './logo.png'


const Header = () => {
    return (
        <header className="App-header">
            <nav className={classes.Topbar}>
                <img src={logo} alt="" />
            </nav>
        </header>
    )
}
export default Header