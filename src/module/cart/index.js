import React from 'react'
import "./cart.scss";
import logo from "../../assets/image/image1.png";
import logofooter from "../../assets/image/logofooter.png";
import copyright from "../../assets/icon/Vector.png";
import instagram from "../../assets/icon/instagram.png";
import telegram from "../../assets/icon/telegram.png";
import pagevec from "../../assets/orderimage/Mask group.png";
import cartvec from "../../assets/orderimage/Vector1.png";
import serachvec from "../../assets/orderimage/Vector2.png";
import fiveaprd from "../../assets/cartimage/5PackInfused-LemonCherryRuntz-removebg-preview 1.png";
import decrease from "../../assets/cartimage/Vector.png";
import increase from "../../assets/cartimage/flat-color-icons_plus.png";
import trash from "../../assets/cartimage/Vector2.png";
import grpcicle from "../../assets/cartimage/Group239228.png";
import { Link } from 'react-router-dom';

export default function Cart() {
    return (
        <div>

            <section className='order-page-baack-ground-main-section'>


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
                            <h1>My <span>Cart</span></h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>


                <div className="cart-item-container">

                    <div className="card-item--box-main-margin">


                        <div className="card-item--box-main">
                            <div className="cart-item-box-title-main">
                                <div className="gerdiant-h1-div">
                                    <span>Cart Items</span>
                                </div>
                                <div className="list-main-div-box-top-uppper-main">
                                    <p>Name</p>
                                    <span>Qty</span>
                                    <h6>Price</h6>
                                </div>
                                <div className="prd-prz-and-may-more-div-flex-main">
                                    <div className="prd-div-main">
                                        <img src={fiveaprd} alt="fiveaprd" />
                                        <p>Triple Infused</p>
                                    </div>

                                    <div className="quantity-item-main">
                                        <div className="decrease">
                                            <img src={decrease} alt="decrease" />
                                        </div>
                                        <p>01</p>
                                        <div className="increase">
                                            <img src={increase} alt="increase" />
                                        </div>
                                    </div>

                                    <div className="dolor-trash-div-main">
                                        <p>$1000</p>
                                        <img src={trash} alt="trash" />
                                    </div>
                                </div>
                                <div className="sub-total-counter-div-main">
                                    <h2>Subtotal</h2>
                                    <p>$1000</p>
                                </div>
                                <div className="sub-total-counter-div-main-two">
                                    <h2>Shipping</h2>
                                    <p>Free</p>
                                </div>

                                <div className="sub-total-counter-div-main-three">
                                    <h2>Total</h2>
                                    <p>$1000</p>
                                </div>
                            </div>
                        </div>

                        <div className="card-item--box-main-two">
                            <h1>Payment Detail</h1>
                            <p>Select payment method</p>
                            <button type='submit'><img src={grpcicle} alt="grpcicle" />COD</button>
                            <div className="last-prd-lst-prz-button">
                                <button type='submit'>Checkout</button>
                            </div>
                        </div>
                    </div>

                </div>





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


            </section>
        </div>
    )
}
