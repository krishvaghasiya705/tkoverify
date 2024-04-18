import React from 'react'
import './footer.scss';
import logofooter from "../../assets/image/logofooter.png";
import copyright from "../../assets/icon/Vector.png";
import instagram from "../../assets/icon/instagram.png";
import telegram from "../../assets/icon/telegram.png";

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
                            <a href="AUTHENTICATE">AUTHENTICATE</a>
                            <a href="PRODUCTS">PRODUCTS</a>
                            <a href="LAB RESULTS">LAB RESULTS</a>
                            <a href="CONTACT">CONTACT</a>
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
