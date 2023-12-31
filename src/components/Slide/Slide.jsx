import React from 'react';
import './slide.css';
import BannerImage from './banner-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShieldHalved, faChartArea } from '@fortawesome/free-solid-svg-icons';

export default function Slide() {

    // Icons
    const faChartIcon = <FontAwesomeIcon icon={faChartLine} />
    const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved} />
    const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />

  return (
    <>
    <section id="home">
        <div className="banner_image"></div>
        <div className="container">
            <div className="banner_outer">
                <div className="col">
                    <h3 className="title text-dark">
                        WE PROVIDE YOU <span>SALOONIC SERVICES</span>
                    </h3>
                    <p>Services and Products at your doorstep in Islamabad at very affordable price</p>
                    <div className="btn_wrapper">
                        <a className="btn btn-dark" href="/">Get Started</a>
                    </div>
                </div>
                <div className="col">
                    <div className="sub_banner_image">
                        <img src={BannerImage} alt="Banner_image" />
                    </div>
                    <div className="banner_style_1">
                        {faChartIcon}
                        <h4>Saloonic Services</h4>
                    </div>
                    <div className="banner_style_1 banner_style_2">
                        {faShieldIcon}
                        <h4>99.9% Success</h4>
                    </div>
                    <div className="banner_style_1 banner_style_3">
                        {faChartAreaIcon}
                        <h4>FastLaneSaloon</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
