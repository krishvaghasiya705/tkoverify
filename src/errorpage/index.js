import React from 'react'
import './error.scss';
import Ellipse from '../assets/image/Ellipse4.png';
import moon from '../assets/image/Ellipse3.png';
import moon2 from '../assets/image/Ellipse2.png';
import cloud1 from "../assets/image/image7.png";
import cloud2 from "../assets/image/image8.png";
import red from "../assets/image/Red1.png";
import ring from "../assets/image/Ellipse673.png";
import logo from "../assets/image/image1.png";
import lock from "../assets/image/ic_round-lock.png";
import crose from "../assets/image/crose.png";
import sorry from "../assets/image/Group 239205.png";
import { Link } from 'react-router-dom';
export default function Errorpage() {
    return (
        <div>
            <div className="alert-back-color">
                <div className="ellepse-background-color-main-one">
                    <div className='ellepse-black-height-box'>
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
                        <div className="container-header-one">
                            <div className="discover-line-main">
                                <h5>Discover, Authenticate, and Shop our <span>premium cannabis products</span></h5>
                            </div>
                        </div>

                    </div>
                    <div className='ellepse-black-height-box2'>
                        <div className="tko-extract-box-main">
                            <div className="tko-conatiner-image">
                                <img src={red} alt="red" />
                            </div>
                        </div>
                        <div className="ring-main">
                            <img src={ring} alt="ring" />
                        </div>
                    </div>
                    <div className="top-ellepse-shadow">
                        <img src={Ellipse} alt="ellepse" />
                    </div>
                    <div className="moon-div-main">
                        <div className="moon1">
                            <img src={moon} alt="moon" />
                        </div>
                        <div className="moon2">
                            <img src={moon2} alt="moon" />
                        </div>
                        <div className="cloud-main">
                            <div className="cloud1">
                                <img src={cloud1} alt="cloud1" />
                            </div>
                            <div className="cloud2">
                                <img src={cloud2} alt="cloud2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="error-bakc-blure">
                    <div className="error-back-box">
                        <Link to={"/"}>
                            <div className="crose-div">
                                <img src={crose} alt="crose" />
                            </div>
                        </Link>
                        <div className="sorrry-image">
                            <img src={sorry} alt="sorry" />
                        </div>
                        <div className="sorry-title">
                            <h1>Sorry 404 Error</h1>
                        </div>
                        <div className="sorry-pera">
                            <p>You are not old enough to view  the site...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
