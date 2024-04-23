import React from 'react'
import "./product.scss";
import shadowone from "../../assets/pimage/Ellipse 4.png";
import cloudone from "../../assets/pimage/image 9.png";
import prdone from "../../assets/pimage/5PackInfused-LemonCherryRuntz-removebg-preview 1.png";
import titleone from "../../assets/pimage/Triple Infused.png";
import arrow from "../../assets/pimage/Vector.png";
import Torpedo from "../../assets/pimage/Torpedo.png";
import MiniRockets from "../../assets/pimage/Mini Rockets.png";
import Cartridges from "../../assets/pimage/Cartridges.png";
import prdtwo from "../../assets/pimage/2g-FruitRollUpz-removebg-preview 1.png";
import prdthree from "../../assets/pimage/Rectangle 28.png";
import prdfour from "../../assets/pimage/5PackInfused-LemonCherryRuntz-removebg-preview 2.png";
// import { Link } from 'react-router-dom';

export default function Product() {
    return (
        <div>
            <div className="our-intro-main-section">
                <div className="fram-one">
                    <div className="container-prd">
                        <div className="our-product-title-main-div">
                            <h1 data-aos="fade-down-right">Our <span>Products</span></h1>
                        </div>
                        <div className="our-product-peragraph-main-div">
                            <p data-aos="fade-down-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="shaddow-one">
                        <img src={shadowone} alt="shadowone" />
                    </div>
                    <div className="cloud-one">
                        <img src={cloudone} alt="cloudone" />
                    </div>
                </div>
                <div className="fram-two">
                    <div className="conntainer-crd-prd">
                        <div className="card-flex-main-div-one">


                            <div className="card-main-one" data-aos="flip-left">
                                <div className="card-one">
                                    <div className="title-image">
                                        <img data-aos="flip-up" src={titleone} alt="titleone" />
                                    </div>
                                    <img data-aos="flip-up" src={prdone} alt="prdone" />
                                </div>
                                <div className="triple-box-main">
                                    <div className="triple-line-main-div">
                                        <h1>Triple Infused</h1>
                                        <div className="arrow-circle">
                                            <img src={arrow} alt="arrow" />
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text</p>
                                </div>
                            </div>

                            <div className="card-main-one" data-aos="flip-left">
                                <div className="card-one">
                                    <div className="title-image">
                                        <img data-aos="flip-up" src={Torpedo} alt="Torpedo" />
                                    </div>
                                    <img data-aos="flip-up" src={prdtwo} alt="prdtwo" />
                                </div>
                                <div className="triple-box-main">
                                    <div className="triple-line-main-div">
                                        <h1>Torpedo</h1>
                                        <div className="arrow-circle">
                                            <img src={arrow} alt="arrow" />
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text</p>
                                </div>
                            </div>


                        </div>

                        <div className="card-flex-main-div">


                            <div className="card-main-one" data-aos="flip-left">
                                <div className="card-one">
                                    <div className="title-image">
                                        <img data-aos="flip-up" src={MiniRockets} alt="MiniRockets" />
                                    </div>
                                    <img data-aos="flip-up" src={prdthree} alt="prdthree" />
                                </div>
                                <div className="triple-box-main">
                                    <div className="triple-line-main-div">
                                        <h1>Mini Rockets</h1>
                                        <div className="arrow-circle">
                                            <img src={arrow} alt="arrow" />
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text</p>
                                </div>
                            </div>

                            <div className="card-main-one" data-aos="flip-left">
                                <div className="card-one">
                                    <div className="title-image">
                                        <img data-aos="flip-up" src={Cartridges} alt="Cartridges" />
                                    </div>
                                    <img data-aos="flip-up" src={prdfour} alt="prdfour" />
                                </div>
                                <div className="triple-box-main">
                                    <div className="triple-line-main-div">
                                        <h1>Cartridges</h1>
                                        <div className="arrow-circle">
                                            <img src={arrow} alt="arrow" />
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text</p>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
