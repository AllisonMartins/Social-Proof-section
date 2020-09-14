import React from 'react';
import backgroundMobile from '../../assets/images/bg-pattern-top-mobile.svg';
import style from './styles.css'

function Landing(){
    return(
        <div id="page-landing">
            <div className="container" id="page-landing-content">
        <div className="header-landing" styles={{ backgroundImage:`url(${backgroundMobile})` }}>
                    <p>10,000+ of our</p>
                    <p>users love our</p>
                    <p>products.</p>
                </div>
                <div className="subject-header">
                
                <p>We only provide great products combined </p><p> with excellent customer service. See what</p>
                <p>our satisfied customers are saying about</p><p> our services.
                </p>
                </div>
                <div className="rater-content">

                </div>
                <div className="users-box">


                </div>
            </div>
        </div>
    )
}

export  default Landing;