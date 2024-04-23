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
                    <Link to={"/"}>
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                    </Link>
                    <div className="headert-all-links-main">
                        <Link to={"/Authenticate"}>Authenticate</Link>
                        <Link to={"/Product"}>Products</Link>
                        <Link to={"/Labresult"}>Lab Results</Link>
                        <Link to={"/Contactus"}>Contact Us</Link>
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
