import React from 'react'
import './home.scss';
import Ellipse from '../../assets/image/Ellipse4.png';
import moon from '../../assets/image/Ellipse3.png';
import moon2 from '../../assets/image/Ellipse2.png';
import cloud1 from "../../assets/image/image7.png";
import cloud2 from "../../assets/image/image8.png";
import red from "../../assets/image/Red1.png";
import ring from "../../assets/image/Ellipse673.png";
import ellipse1 from "../../assets/image/Ellipse5.png";
import productone from "../../assets/image/5PackInfused-LemonCherryRuntz-removebg-preview 1.png";
import producttwo from "../../assets/image/5PackInfused-LemonCherryRuntz-removebg-preview 2.png";
import productthree from "../../assets/image/Rectangle 28.png";
import tripple from "../../assets/image/Triple infused prerolls.png";
import cartiga from "../../assets/image/Cartridges.png";
import thca from "../../assets/image/THCA Diamond.png";
import ellipse5 from "../../assets/image/Ellipse 5.png";
import flash from "../../assets/image/Vector.png";
import mdi from "../../assets/image/mdi_checkbox-multiple-marked.png";
import verify from "../../assets/image/9298766_verified_ui_shield_check_protection_icon 1.png";
import firstcr from "../../assets/card/Purple Series 1.png";
import secondcr from "../../assets/card/5PackInfused-LemonCherryRuntz-removebg-preview 1.png";
import thirdcr from "../../assets/card/Rectangle 28.png";
import fourthcr from "../../assets/card/Blue Series Plastic Box 1.png";
import fifthcr from "../../assets/card/2g-FruitRollUpz-removebg-preview 1.png";


export default function Home() {
  return (
    <div>



      <div className="ellepse-background-color-main">
        <div className='ellepse-black-height-box'>
          <div className="container-header-one">
            <div className="discover-line-main">
              <h5>Discover, Authenticate, and Shop our<span>premium cannabis products</span></h5>
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



      <div className="authentic-product-main-background">
        <div className="authentic-box-width">
          <div className="authentic-box">
            <div className="authentic-box-pera">
              <h4>Authenticate</h4>
            </div>
            <div className="authentic-box-input">
              <div className="input-search-main">
                <input type="text" placeholder='Enter Code' />
                <a href="submit">
                  <button type='submit'>Submit</button>
                </a>
              </div>
            </div>
          </div>
        </div>





        <div className="conatiener-auth">
          <div className="shadow-two">
            <img src={ellipse1} alt="ellipse1" />
          </div>
          <div className="product-card-main">
            <div className="product-heading">
              <h3>Our <span>Product</span></h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div className="product-card-div-flex">

              <div className="card-flex-main">
                <div className="card-one">
                  <div className="card-pera">
                    <img src={tripple} alt="tripple" />
                  </div>
                  <div className="product-image">
                    <img src={productone} alt="productone" />
                  </div>
                </div>
                <div className="card-one">
                  <div className="card-pera">
                    <img src={cartiga} alt="cartiga" />
                  </div>
                  <div className="product-image">
                    <img src={producttwo} alt="producttwo" />
                  </div>
                </div>
                <div className="card-one">
                  <div className="card-pera">
                    <img src={thca} alt="thca" />
                  </div>
                  <div className="product-image">
                    <img src={productthree} alt="productthree" />
                  </div>
                </div>
              </div>


              <div className="slider-button">
                <button></button>
                <p></p>
                <p></p>
              </div>

            </div>
          </div>
        </div>





        <div className="side-shadow-two">
          <img src={ellipse5} alt="ellipse5" />
        </div>


        <div className="conatiner-our-feature">
          <div className="our-feature-box-main">
            <div className="our-feature-pera-box">
              <div className="">
                <h6>Our <span>Features</span></h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <div className="feature-card-main">
              <div className="feature-card-main-inner">
                <div className="feature-card-circle-main">
                  <img style={{ width: "15.8px", height: "23.97px" }} src={flash} alt="flash" />
                </div>
                <h1>Experience</h1>
                <p>Enjoy a vast variey of the hardest-hitting cannabis strains</p>
              </div>
              <div className="feature-card-main-inner">
                <div className="feature-card-circle-main">
                  <img src={mdi} alt="mdi" />
                </div>
                <h1>Authenticate</h1>
                <p>Ensure you're smoking the best with our new verification system</p>
              </div>
              <div className="feature-card-main-inner">
                <div className="feature-card-circle-main">
                  <img src={verify} alt="verify" />
                </div>
                <h1>Certify</h1>
                <p>Learn more about your product from our certified lab results</p>
              </div>
            </div>
          </div>
        </div>


      </div>




      <div className="about-us-section-main">
        <div className="continer-about-us-main">
          <div className="about-us-heading-main">
            <h3><span>About</span> Us</h3>
            <p>TKO has been focused on product integrity since day one, and we’ve risen above because of our commitment to quality. Highly potent premium THC featuring the industry’s best terpenes are standard in all of our products. Our clean cannabis oil is expertly crafted for consistency, always independently lab tested for full transparency.</p>
          </div>
        </div>
        <div className="slider-main-div">
          <div className="slider-card-one">
            <img src={firstcr} alt="firstcr" />
          </div>
          <div className="slider-card-one">
            <img src={secondcr} alt="secondcr" />
          </div>
          <div className="slider-card-one">
            <img src={thirdcr} alt="thirdcr" />
          </div>
          <div className="slider-card-one">
            <img src={fourthcr} alt="fourthcr" />
          </div>
          <div className="slider-card-one">
            <img src={fifthcr} alt="fifthcr" />
          </div>
        </div>
      </div>










    </div>
  )
}
