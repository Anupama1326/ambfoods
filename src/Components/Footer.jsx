import React from 'react'
import salad from '../Images/salad.png'
import insta from '../Images/instagram.png'
import linkedin from '../Images/linkedin.png'
import email from '../Images/email.png'
import phn from '../Images/telephone.png'
import yt from '../Images/youtube.png'
import footer from '../Images/footer.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="leftfoot">
            <div className="navlogo">
                <img src={salad} alt="" />
                <h2 style={{ color: "#3ebc74" }}>Foodie</h2>
            </div>
            <div className="icons">
                <img src={linkedin} alt="Linkedin" /> 
                <img src={insta} alt="Instagram" />
                <img src={email} alt="Email" />
                <img src={phn} alt="Phone" />
                <img src={yt} alt="Youtube" />
            </div>
            
                <p>SKCL Central Square 2,Guindy Industrial Estate,Tamil Nadu 600032</p>
        
        </div>
        <div className="centfoot">
            <img src={footer} alt="" />
        </div>
        <div className="rigfoot">
            <h3>Explore wide variety of food in one place</h3>

            <p>	&#169; 2023 Copyright, Inc.all rights reserved</p>
        </div>
    </div>
  )
}

export default Footer
