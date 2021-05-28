import React from "react";
import "./About.css";
import {NavLink} from "react-router-dom";

const About = () => {
    return (
        <>
        <section id ="header" className="about d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className ="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1 className="welcome-about">Welcome to About page <strong className="brand-name"> IshagTechnical</strong>
                            <div className="inner-text my-3">
                                we are the team of talented developer making websites
                            </div>
                            </h1>
                            <div className="mt-3">
                                <NavLink to="/services" className="btn-get-started">Get started</NavLink>
                            </div>
                        </div>
                        </div>
                          
                    </div>
                </div>
            </div>

        </section>
        </>
    );
};

export default About;