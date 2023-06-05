import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="logo">
                <p className="LogoText">FakeApi<span className="store">Store</span></p>
            </div>
            <ul className="nav-ul">
                <li className="nav-li">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-li">
                    <NavLink to="/forHim"><span>For Him</span></NavLink>
                </li>
                <li className="nav-li">
                    <NavLink to="/forHer"><span>For Her</span></NavLink>
                </li>
                <li className="nav-li">
                    <NavLink to="/jewelry">Jewelry</NavLink>
                </li>
                <li className="nav-li">
                    <NavLink to="/electronics">Electronics</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Header;
