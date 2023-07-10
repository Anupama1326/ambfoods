import React, { useState } from "react";
import { Link } from "react-router-dom";
import salad from "../Images/salad.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,faCircleChevronDown} from "@fortawesome/free-solid-svg-icons";
import main from "../Images/main.png";
import tok from "../Images/tok.jpg";
import biryani from "../Images/biryani.jpg";
import breakfast from "../Images/breakfast.jpg";
import chinese from "../Images/chinese.jpg";
import dessert from "../Images/dessert.jpg";
import healthy from "../Images/healthy.jpg";
import pizza from "../Images/pizza.jpg";
import Services from "./Services";
import Footer from "./Footer";
import Restaurants from "./Restaurants";

const MainPage = () => {
  const [visible, setVisible] = useState(false);

  const handleLoginClick = () => {
    setVisible(!visible);
  };

  const handleCrossClick = () => {
    setVisible(!visible);
  };

  return (
    <div className="MainPage">
      <div className="Nav">
        <div className="navlogo">
          <img src={salad} alt="" />
          <h2 style={{ color: "#3ebc74" }}>Foodie</h2>
        </div>
        <button onClick={handleLoginClick}>Login/Signup</button>
        <div className="navbtns">
          <p>Home</p>
          <Link to='/orders'><p>Orders</p></Link>
          <p>Profile</p>
          <p>Logout</p  >
        </div>
      </div>
      <div className={visible ? "logindiv" : "logindiv invisible"}>
        <div className="cross" onClick={handleCrossClick}>
          <h3 className="crossclose">X</h3>
        </div>
        <div className="loginleft">
          <h1>Already a user? Login!!</h1>

          <p className="alreadyUser">
            {" "}
            Create new account{" "}
            {/* <Link className="loginLink" to="/option">
              signup
            </Link> */}
          </p>

          <label htmlFor="">Username</label>

          <input className="username" type="text" style={{ color: "white" }} />

          <label htmlFor="">Password</label>

          <input
            className="password"
            type="password"
            style={{ color: "white" }}
          />

          <button className="submit">Submit</button>
        </div>
      </div>
      {/* Header of MainPage */}

      <div className="HeaderBlock">
        {/* Mainpage Left portion */}
        <div className="headleft">
          <h1 style={{ marginBottom: 0, fontSize: "36px", fontWeight: "800" }}>
            Straight from the <br />
            kitchen to your heart
          </h1>
          <p style={{ fontWeight: "bolder" }}>Delicious foods to your door!!</p>
          <div className="locInfo">
            <div className="locationBar">
              <p>
                {" "}
                <FontAwesomeIcon icon={faLocationDot} /> &nbsp; Choose a
                location
              </p>
              <FontAwesomeIcon icon={faCircleChevronDown} />
            </div>
            <button>Find Restaurants</button>
          </div>
        </div>
        {/* Mainpage Right portion */}
        <div className="headRight">
          <img src={main} alt="" />
        </div>
      </div>

      <div className="typeBlock">
        <div className="tok">
          <img src={tok} alt="" />
          <p>More than</p>
          <h1>200+ recipes</h1>
          <button>See recipes</button>
        </div>
        <div className="types">
          <div className="type">
            <img src={biryani} alt="" />
            <h3>Main Course</h3>
            <p>1 Recipe</p>
          </div>
          <div className="type">
            <img src={pizza} alt="" />
            <h3>Snacks</h3>
            <p>1 Recipe</p>
          </div>
          <div className="type">
            <img src={healthy} alt="" />
            <h3>Salads</h3>
            <p>1 Recipe</p>
          </div>
          <div className="type">
            <img src={chinese} alt="" />
            <h3>Chinese</h3>
            <p>1 Recipe</p>
          </div>
          <div className="type">
            <img src={dessert} alt="" />
            <h3>Desserts</h3>
            <p>1 Recipe</p>
          </div>
          <div className="type">
            <img src={breakfast} alt="" />
            <h3>Tiffins</h3>
            <p>1 Recipe</p>
          </div>
        </div>
      </div>

      <Restaurants />
      <Services />
      <Footer />
    </div>
  );
};

export default MainPage;
