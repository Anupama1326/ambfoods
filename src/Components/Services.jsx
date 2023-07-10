import React from 'react'
import tasty from '../Images/tasty.png';
import fast from '../Images/fast.png';
import quality from '../Images/quality.png';

const Services = () => {
  return (
    <div className='service'>
        <div className="headserv">
            <p>Experiance</p>
            <h3>Awesome Services</h3>
        </div>
        <div className="servcards">
            <div className='servcard'>
                <img src={quality} />
                <h3>Quality Food</h3>
                <p>Providing access to high quality food</p>

            </div>
            <div className='servcard'>
                <img src={tasty} />
                <h3>Super Taste</h3>
                <p>Allowing everyone to enjoy a varied and tasty diet</p>

            </div>
            <div className='servcard'>
                <img src={fast} />
                <h3>Fast Delivery</h3>
                <p>Delivering upon a regular schedule based on your requirements and as fast as possible</p>

            </div>
        </div>
     
    </div>
  )
}

export default Services
