import React from 'react'
import './header.scss';
import logo from "../../assets/image/image1.png";
import lock from "../../assets/image/ic_round-lock.png";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <div className="container-header">
                <header>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="headert-all-links-main">
                        <a href="Authenticate">Authenticate</a>
                        <Link to={"/product"}>Products</Link>
                        <a href="Lab Results">Lab Results</a>
                        <a href="Contact Us">Contact Us</a>
                    </div>
                    <div className="lock-div-main">
                        <img src={lock} alt="lock" />
                    </div>
                </header>
            </div>
        </div>
    )
}
