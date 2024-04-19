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
                    <a href="/Home">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                    </a>
                    <div className="headert-all-links-main">
                        <Link to={"/Authenticate"}>Authenticate</Link>
                        <Link to={"/Product"}>Products</Link>
                        <a href="Lab Results">Lab Results</a>
                        <a href="Contact Us">Contact Us</a>
                    </div>
                    <Link to={"/Age"}>
                        <div className="lock-div-main">
                            <img src={lock} alt="lock" />
                        </div>
                    </Link>
                </header>
            </div>
        </div>
    )
}
