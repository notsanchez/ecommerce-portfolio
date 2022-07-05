import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [MobileMenu, setMobileMenu] = useState(false)

    return (
        <>
            <header className='header'>
                <div className="container d_flex">
                    <div className="d_flex">
                    </div>
                    <div className="navlink">
                        <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={()=> setMobileMenu(false)}>
                            <li>
                                <Link to="/">inicio</Link>
                            </li>
                            <li>
                                <Link to="/user">Minha conta</Link>
                            </li>

                            <li>
                                <Link to="/track">rastrear meu pedido</Link>
                            </li>
                            <li>
                                <Link to="/contact">contato</Link>
                            </li>
                        </ul>

                        <button className='toggle' onClick={()=> setMobileMenu(!MobileMenu)}>
                            {
                                MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fa-solid fa-bars open'></i>
                            }
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar