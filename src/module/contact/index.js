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
                            <h1><span>Contact</span> Us</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>

                <div className="contact-two-container">
                    <div className="contact-form-main">
                        <form>
                            <div className="form-two-input-cntct-main">
                                <div className="form-input-one">
                                    <input type="text" placeholder='Enter Name' />
                                </div>
                                <div className="form-input-two">
                                    <input type="email" placeholder='Enter Email' />
                                </div>
                            </div>
                            <div className="form-subject-cnct-main">
                                <input type="text" placeholder='Enter Subject' />
                            </div>
                            <div className="form-text-area-cnct-main">
                                <textarea placeholder='Message'></textarea>
                            </div>
                            <div className="form-submit-button-cnct-main">
                                <a href="submit">
                                    <button type='submit'>Submit</button>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
