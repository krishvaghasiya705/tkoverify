import React from 'react'
import './footer.scss';
import logofooter from "../../assets/image/logofooter.png";
import copyright from "../../assets/icon/Vector.png";
import instagram from "../../assets/icon/instagram.png";
import telegram from "../../assets/icon/telegram.png";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-container">
                    <div className="footer-logo">
                        <img src={logofooter} alt="logofooter" />
                    </div>
                    <div className="all-link-button-main">
                        <div className="all-link-footer-main">
                            <Link to={"/Authenticate"}>Authenticate</Link>
                            <Link to={"/Product"}>Products</Link>
                            <Link to={"/Labresult"}>Lab Results</Link>
                            <Link to={"/Contactus"}>Contact</Link>
                            <Link to={"/Order"}>My Order</Link>
                        </div>
                        <div className="input-footer-main">
                            <input type="text" placeholder='Enter Email' />
                            <a href="subscribe">
                                <button type='submit'>Subscribe</button>
                            </a>
                        </div>
                    </div>
                    <div className="footer-copyright-pera">
                        <div className="copyright-pera">
                            <p><img src={copyright} alt="copyright" /> 2023 TKO Extracts</p>
                        </div>
                        <div className="icons-div-main">
                            <img src={instagram} alt="instagram" />
                            <img src={telegram} alt="telegram" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
