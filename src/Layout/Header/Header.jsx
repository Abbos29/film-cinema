import React, { useState } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import MenuBtns from '../../Components/MenuBtns/MenuBtns'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isBurgerX, setIsBurgerX] = useState(false)


    const toggleBurger = () => {
        toggleBurgerX()
        toggleMenu()
    }

    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    const toggleBurgerX = () => {
        setIsBurgerX(prev => !prev)
    }

    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="header__nav">
                        <Link className='header__logo' to={'/about'}>
                            <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="m2 0h-2v32h32v-2h-30z"></path><path d="m6 0h-2v28h28v-2h-26z"></path><path d="m10 22v-22h-2v24h24v-2z"></path><path d="m12 0v20h20v-20zm18 18h-16v-16h16z"></path><path d="m16 4v12h12v-12zm10 10h-8v-8h8z"></path><path d="m24 8h-4v4h4z"></path></g></svg>
                            <p>  <span>film</span>cinema</p>
                        </Link>

                        <div className="header__nav-btns">
                        <MenuBtns />
                        </div>

                        <button onClick={toggleBurger} className={isBurgerX ? 'header__burger active' : 'header__burger'}>
                            <span></span>
                            <span></span>
                        </button>

                        <div className={isOpen ? 'header__menu active' : 'header__menu'}>

                            <div className="header__menu-btns">
                                <MenuBtns />
                            </div>

                            <div className="header__inner">
                                <a href="#">cinema</a>
                                <a href="#">EXHIBITION</a>
                            </div>

                            <div className="header__inner">
                                <a href="#">RELEASES</a>
                            </div>

                            <div className="header__inner">
                                <a href="#">ABOUT</a>
                                <a href="#">EVENTS</a>
                            </div>

                            <div className="header__inner">
                                <a href="#">MEMBERSHIP</a>
                            </div>

                            <div className="header__footer">
                                <div className="header__box">
                                    <p>TERMS & CONDITIONS</p>
                                    <p>CONTACT</p>
                                </div>

                                <div className="header__box">
                                    <p>CREATED BY ABBOS VALIEV</p>
                                </div>

                                <div className="header__box">
                                    <p>© 2024 ALL RIGHTS RESERVED</p>
                                </div>
                            </div>
                        </div>

                    </nav>
                </div>
            </header>

        </>
    )
}

export default Header