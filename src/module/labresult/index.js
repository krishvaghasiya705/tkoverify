import React from 'react'
import "./lab.scss";
import shdoen from "../../assets/labimage/Ellipse4.png";
import shdtow from "../../assets/labimage/image9.png";
import shdthree from "../../assets/labimage/Ellipse5.png";
// import { Link } from 'react-router-dom';

export default function Labresult() {
    return (
        <div>
            <div className="lab-result-page-back-ground-main">
                <div className="shadow-one">
                    <img src={shdoen} alt="shdoen" />
                </div>
                <div className="shadow-two">
                    <img src={shdtow} alt="shdtow" />
                </div>
                <div className="shadow-three">
                    <img src={shdthree} alt="shdthree" />
                </div>




                <div className="lab-container">
                    <div className="lab-result-title-box-main">
                        <div className="lab-result-title-main">
                            <h1>Lab <span>Results</span></h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>


                <div className="lab-container">
                    <div className="lab-result-main-part-box-main-flex-main">

                        <div className="lab-result-main-part-box-main-flex-main-bx-one">
                            <div className="lab-result-button-one">
                                <button type='submit'>Originals</button>
                            </div>
                            <div className="lab-result-button-two">
                                <button type='submit'>Disposables</button>
                            </div>
                            <div className="lab-result-button-three">
                                <button type='submit'>HTFSE SAUCE</button>
                            </div>
                        </div>

                        <div className="lab-result-main-part-box-main-flex-main-bx-two">
                            <div className="original-title-in-box-main">
                                <h1>ORIGINALS</h1>
                            </div>
                            <div className="prd-button">
                                <div className="prd-button-one">
                                    <button type='submit'>Animal Mints</button>
                                </div>
                                <div className="prd-button-two">
                                    <button type='submit'>Cake Batter</button>
                                </div>
                                <div className="prd-button-two">
                                    <button type='submit'>Forbidden Fruit</button>
                                </div>
                                <div className="prd-button-two">
                                    <button type='submit'>Grape Pie</button>
                                </div>
                                <div className="prd-button-two">
                                    <button type='submit'>Grapefruit</button>
                                </div>
                                <div className="prd-button-two">
                                    <button type='submit'>Jack Herer</button>
                                </div>
                            </div>

                            <div className="prd-button">
                                <div className="prd-button-two">
                                    <button type='submit'>Limeskunk</button>
                                </div>
                                <div className="prd-button-two">
                                    <button type='submit'>Nerds</button>
                                </div>
                                <div className="prd-button-two">
                                    <button type='submit'>Purple Punch</button>
                                </div>
                                <div className="prd-button-two">
                                    <button type='submit'>Snozzberry</button>
                                </div>
                                <div className="prd-button-two">
                                    <button type='submit'>Sundae Driver</button>
                                </div>
                                <div className="prd-button-two">
                                    <button type='submit'>Strawberry Cough</button>
                                </div>
                            </div>

                            <div className="prd-button">
                                <div className="prd-button-two">
                                    <button type='submit'>White Runtz</button>
                                </div>
                                <div className="prd-button-two">
                                    <button type='submit'>ATF</button>
                                </div>
                                <div className="prd-button-two">
                                    <button type='submit'>Casey Jones</button>
                                </div>
                                <div className="prd-button-two">
                                    <button type='submit'>Garanimals</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
