import React from 'react'
import "./contact.scss";
import shdcntone from "../../assets/cimage/Ellipse4.png";
import shdcnttwo from "../../assets/cimage/image9.png";
import shdcntthree from "../../assets/cimage/Ellipse5.png";
// import { Link } from 'react-router-dom';

export default function Contactus() {
    return (
        <div>
            <div className="contact-page-back-ground-main">
                <div className="shd-cnt-one">
                    <img src={shdcntone} alt="shdcntone" />
                </div>
                <div className="shd-cnt-two">
                    <img src={shdcnttwo} alt="shdcnttwo" />
                </div>
                <div className="shd-cnt-three">
                    <img src={shdcntthree} alt="shdcntthree" />
                </div>


                <div className="contact-container">
                    <div className="contact-us-title-div-main">
                        <div className="contact-us-title-inner">
                            <h1  data-aos="fade-down-right"><span>Contact</span> Us</h1>
                            <p data-aos="fade-down-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>

                <div className="contact-two-container">
                    <div data-aos="fade-up" className="contact-form-main">
                        <form>
                            <div className="form-two-input-cntct-main">
                                <div className="form-input-one">
                                    <input data-aos="flip-left" type="text" placeholder='Enter Name' />
                                </div>
                                <div className="form-input-two">
                                    <input data-aos="flip-right" type="email" placeholder='Enter Email' />
                                </div>
                            </div>
                            <div className="form-subject-cnct-main">
                                <input data-aos="zoom-in" type="text" placeholder='Enter Subject' />
                            </div>
                            <div className="form-text-area-cnct-main">
                                <textarea data-aos="zoom-in" placeholder='Message'></textarea>
                            </div>
                            <div className="form-submit-button-cnct-main">
                                <a href="submit">
                                    <button data-aos="zoom-in-up" type='submit'>Submit</button>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
