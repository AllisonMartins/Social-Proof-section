import React from 'react';
import backgroundMobile from '../../assets/images/bg-pattern-top-mobile.svg';
import starIcon from '../../assets/images/icon-star.svg';
import style from './styles.css';
import avatar1 from '../../assets/images/image-colton.jpg';
import avatar2 from '../../assets/images/image-anne.jpg';
import avatar3 from '../../assets/images/image-irene.jpg';




function Landing(){
    return(
        <main styles={{ backgroundImage:`url(${backgroundMobile})`, 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
            <div className="container" id="page-landing-content">
            <div className="header">
                <div className="header-landing" >
                    <h1>10,000+ of our users love our products.</h1>
                    <p>We only provide great products combined with excellent customer service. See what
                our satisfied customers are saying about our services.
                </p>
                </div>
                
                
                <div className="rater">
                <div className="rater-content">
                    <div className="rater-star">
                        <img src={starIcon}></img>
                        <img src={starIcon}></img>
                        <img src={starIcon}></img>
                        <img src={starIcon}></img>
                        <img src={starIcon}></img>
                    </div>
                    <p>Rated 5 star in Reviews</p>
                </div>
                <div className="rater-content" id="second-rater">
                    <div className="rater-star">
                        <img src={starIcon}></img>
                        <img src={starIcon}></img>
                        <img src={starIcon}></img>
                        <img src={starIcon}></img>
                        <img src={starIcon}></img>
                    </div>
                    <p>Rated 5 star in Report Guru</p>
                </div>
                <div className="rater-content" id="third-rater">
                    <div className="rater-star">
                        <img src={starIcon}></img>
                        <img src={starIcon}></img>
                        <img src={starIcon}></img>
                        <img src={starIcon}></img>
                        <img src={starIcon}></img>
                    </div>
                    <p>Rated 5 star in BestTech</p>
                </div>
                </div>
                </div>

                <div className="box">
                <div className="users-box">
                    <div className="user-info">
                        <img src={avatar1} alt="Profile Picture"/>
                        <p>Colton Smith</p>
                        <p>Verified Buyer</p>
                    </div>
                    <div className="user-subject">
                        <p>"We needed the same printed design as the one we had ordered a week prior. Not only
                            did they find the original order,but we also received it in time. Excellent!"
                        </p>
                    </div>

                </div>
                <div className="users-box" id="user2">
                    <div className="user-info">
                        <img src={avatar3} alt="Profile Picture"/>
                        <p>Irene Roberts</p>
                        <p>Verified Buyer</p>
                    </div>
                    <div className="user-subject">
                        <p>"Customer service is always excellent and very quick turn around. Completely delighted
                            with the simplicity of the purchase and the speed of delivery"
                        </p>
                    </div>

                </div>
                <div className="users-box" id="user3">
                    <div className="user-info">
                        <img src={avatar2} alt="Profile Picture"/>
                        <p>Anne Wallace</p>
                        <p>Verified Buyer</p>
                    </div>
                    <div className="user-subject">
                        <p>"Put an order with this company and can only praise them for the very high standart. 
                            Will definitely use them again and recommend them to everyone!"
                        </p>
                    </div>

                </div>
                </div>
            </div>
            </main>
    )
}

export  default Landing;