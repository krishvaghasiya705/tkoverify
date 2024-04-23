import React from 'react'
import "./order.scss";
import logo from "../../assets/image/image1.png";
import logofooter from "../../assets/image/logofooter.png";
import copyright from "../../assets/icon/Vector.png";
import instagram from "../../assets/icon/instagram.png";
import telegram from "../../assets/icon/telegram.png";
import pagevec from "../../assets/orderimage/Mask group.png";
import cartvec from "../../assets/orderimage/Vector1.png";
import serachvec from "../../assets/orderimage/Vector2.png";
import { Link } from 'react-router-dom';

export default function Order() {
    return (
        <div>

            <section className='order-page-baack-ground-main-section'>


                <div className="container-header">
                    <header data-aos="fade-up" className='header-cls-ord'>
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
                        <div className="pages-off-header-last-order-main">
                            <div className="page-vec-image">
                                <img src={pagevec} alt="pagevec" />
                            </div>
                            <Link to={"/Cart"}>
                                <div className="cart-vec-image">
                                    <img src={cartvec} alt="cartvec" />
                                </div>
                            </Link>
                            <div className="search-vec-image">
                                <img src={serachvec} alt="serachvec" />
                            </div>
                        </div>
                    </header>
                </div>



                <div className="myord-container">
                    <div className="myorder-title-main">
                        <div className="my-order-title-inner">
                            <h1 data-aos="zoom-out-right">My <span>Orders</span></h1>
                            <p data-aos="zoom-out-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div className="my-ord-two-cotainer">
                    <div data-aos="fade-up" className="enter-code-div-main">
                        <input data-aos="fade-right" type="text" placeholder='Enter Code' />
                        <Link to={"/Contactus"}>
                            <button data-aos="fade-left" type='submit'>Submit</button>
                        </Link>
                    </div>
                </div>
                <div className="ord-nmb-lst-container">
                    <div className="order-nmb-section-main">
                        <div data-aos="fade-right" data-aos-duration="700" className="order-number-list-div-main">
                            <div className="ord-list-nmb-one">
                                <div className="ord-line-inner-frst-box">
                                    <h1>Order Number</h1>
                                    <p>1001</p>
                                </div>
                                <div className="ord-line-inner-scnd-box">
                                    <h1>Product</h1>
                                    <p>Triple Infused</p>
                                </div>
                                <div className="ord-line-inner-frst-box">
                                    <h1>Total</h1>
                                    <p>1001</p>
                                </div>
                                <div className="ord-line-inner-frst-box">
                                    <h1>Date</h1>
                                    <p>20/03/2024</p>
                                </div>
                                <div className="ord-line-inner-frst-box">
                                    <h1>Stats</h1>
                                    <p>Pending</p>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left" data-aos-duration="700" className="order-number-list-div-main">
                            <div className="ord-list-nmb-one">
                                <div className="ord-line-inner-frst-box">
                                    <h1>Order Number</h1>
                                    <p>1001</p>
                                </div>
                                <div className="ord-line-inner-scnd-box">
                                    <h1>Product</h1>
                                    <p>Triple Infused</p>
                                </div>
                                <div className="ord-line-inner-frst-box">
                                    <h1>Total</h1>
                                    <p>1001</p>
                                </div>
                                <div className="ord-line-inner-frst-box">
                                    <h1>Date</h1>
                                    <p>20/03/2024</p>
                                </div>
                                <div className="ord-line-inner-frst-box">
                                    <h1>Stats</h1>
                                    <p>Pending</p>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-right" data-aos-duration="700" className="order-number-list-div-main">
                            <div className="ord-list-nmb-one">
                                <div className="ord-line-inner-frst-box">
                                    <h1>Order Number</h1>
                                    <p>1001</p>
                                </div>
                                <div className="ord-line-inner-scnd-box">
                                    <h1>Product</h1>
                                    <p>Triple Infused</p>
                                </div>
                                <div className="ord-line-inner-frst-box">
                                    <h1>Total</h1>
                                    <p>1001</p>
                                </div>
                                <div className="ord-line-inner-frst-box">
                                    <h1>Date</h1>
                                    <p>20/03/2024</p>
                                </div>
                                <div className="ord-line-inner-frst-box">
                                    <h1>Stats</h1>
                                    <p>Pending</p>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left" data-aos-duration="700" className="order-number-list-div-main">
                            <div className="ord-list-nmb-one">
                                <div className="ord-line-inner-frst-box">
                                    <h1>Order Number</h1>
                                    <p>1001</p>
                                </div>
                                <div className="ord-line-inner-scnd-box">
                                    <h1>Product</h1>
                                    <p>Triple Infused</p>
                                </div>
                                <div className="ord-line-inner-frst-box">
                                    <h1>Total</h1>
                                    <p>1001</p>
                                </div>
                                <div className="ord-line-inner-frst-box">
                                    <h1>Date</h1>
                                    <p>20/03/2024</p>
                                </div>
                                <div className="ord-line-inner-frst-box">
                                    <h1>Stats</h1>
                                    <p>Pending</p>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-right" data-aos-duration="700" className="order-number-list-div-main-sc">
                            <div className="ord-list-nmb-one">
                                <div className="ord-line-inner-frst-box">
                                    <h1>Order Number</h1>
                                    <p>1001</p>
                                </div>
                                <div className="ord-line-inner-scnd-box">
                                    <h1>Product</h1>
                                    <p>Triple Infused</p>
                                </div>
                                <div className="ord-line-inner-frst-box">
                                    <h1>Total</h1>
                                    <p>1001</p>
                                </div>
                                <div className="ord-line-inner-frst-box">
                                    <h1>Date</h1>
                                    <p>20/03/2024</p>
                                </div>
                                <div className="ord-line-inner-frst-box">
                                    <h1>Stats</h1>
                                    <p>Pending</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <footer>
                    <div className="footer-ord-container">
                        <div className="footer-logo">
                            <img data-aos="flip-up" src={logofooter} alt="logofooter" />
                        </div>
                        <div className="all-link-button-main">
                            <div className="all-link-footer-main">
                                <Link data-aos="flip-left" to={"/Authenticate"}>Authenticate</Link>
                                <Link data-aos="flip-left" to={"/Product"}>Products</Link>
                                <Link data-aos="flip-left" to={"/Labresult"}>Lab Results</Link>
                                <Link data-aos="flip-left" to={"/Contactus"}>Contact</Link>
                                <Link data-aos="flip-left" to={"/Order"}>My Order</Link>
                            </div>
                            <div className="input-footer-main">
                                <input data-aos="fade-up-right" type="text" placeholder='Enter Email' />
                                <a href="subscribe">
                                    <button data-aos="fade-up-left" type='submit'>Subscribe</button>
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


            </section>
        </div>
    )
}
