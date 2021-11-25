import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';

const Navbar = () => {
    return (

        <>
            <nav className='mainmenu-area'>
                <div className="grid wide"
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                    <div className='container'>
                        <div className='row-nav'>
                            <div className="navbar-list">
                                <ul className="nav navbar-nav">
                                    <li className="active">
                                        <Link to="/"></Link>
                                    </li>
                                    <li className="active">
                                        <Link to="/home">Trang chủ</Link>
                                    </li>
                                    <li className="active">
                                        <Link to="/book">Sách</Link>
                                    </li>
                                    <li className="active">
                                        <Link to="/">Mượn sách</Link>
                                    </li>

                                    <li className="active">
                                        <Link to="/logout">Đăng xuất</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )

}
/*const Navbar = () => {
    function checkToken() {
        const tokenLocalStorage = localStorage.getItem("token");
        console.log(tokenLocalStorage);
        if (tokenLocalStorage) {
            return (
                <ul className="nav navbar-nav">
                    <li className="active">
                        <Link to="/"></Link>
                    </li>
                    <li className="active">
                        <Link to="/home" >Trang chủ</Link>
                    </li>
                    <li className="active">
                        <Link to="/book" >Sách</Link>
                    </li>
                    <li className="active">
                        <Link to="/">Mượn sách</Link>
                    </li>

                    <li className="active">
                        <Link to="/logout">Đăng xuất</Link>
                    </li>
                </ul>
            )
        }
        else {
            return (
                <ul className="nav navbar-nav">
                    <li className="active">
                        <Link to="/" className='disabled-link'></Link>
                    </li>
                    <li className="active">
                        <Link to="/home" className='disabled-link'>Trang chủ</Link>
                    </li>
                    <li className="active">
                        <Link to="/book" className='disabled-link'>Sách</Link>
                    </li>
                    <li className="active">
                        <Link to="/">Mượn sách</Link>
                    </li>

                    <li className="active">
                        <Link to="/logout">Đăng xuất</Link>
                    </li>
                </ul>
            )
        }
    }


    return (
        <>
            <nav className='mainmenu-area'>
                <div className="grid wide"
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                    <div className='container'>
                        <div className='row-nav'>
                            <div className="navbar-list">
                                {checkToken}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )

}*/

export default Navbar;