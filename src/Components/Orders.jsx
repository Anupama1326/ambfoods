import React from "react";
import { Avatar, Card } from "antd";
import healthy from "../Images/healthy.jpg";
import salad from "../Images/salad.png";
import { Link } from "react-router-dom";


const Orders = () => {
  return (
    <div className="Orders">
      <div className="Nav">
        <div className="navlogo">
          <img src={salad} alt="" />
          <h2 style={{ color: "#3ebc74" }}>Foodie</h2>
        </div>
        <div className="navbtns">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/orders">
            <p>Orders</p>
          </Link>
          <p>Profile</p>
          <p>Logout</p>
        </div>
      </div>
      <div className="headingorder">
        <p>Here are your </p>
        <h2>Results</h2>
      </div>
      <div className="ordercards">
      <div class="card">
            <div class="card__image">
               <img src="https://images.pexels.com/photos/4001871/pexels-photo-4001871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Pizza" />
            </div>
            <div class="card__info">
               <div class="car__info--title">
                  <h3>Pizza</h3>
                  <p>Fresh & sweet</p>
               </div>
               <div class="card__info--price">
                  <p>$ 5</p>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
               </div>
            </div>
         </div>
         <div class="card">
            <div class="card__image">
               <img src="https://images.pexels.com/photos/4001871/pexels-photo-4001871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Pizza" />
            </div>
            <div class="card__info">
               <div class="car__info--title">
                  <h3>Pizza</h3>
                  <p>Fresh & sweet</p>
               </div>
               <div class="card__info--price">
                  <p>$ 5</p>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Orders;
