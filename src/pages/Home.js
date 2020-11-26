import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
    <div>
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active ole">
            <img
              src="/images/destThird.jpg"
              className="d-block w-100"
              alt="second slide"
            />
            <div className="carousel-caption d-md-block">
              <h5>Sign up and join the community</h5>
              <p>
                Have unlimited access to all exercises and upload your own
                content.
              </p>
            </div>
          </div>
          <div className="carousel-item ole">
            <img
              src="/images/palm-hand.jpg"
              className="d-block w-100"
              alt="laptop"
            />
            <div className="carousel-caption d-md-block">
              <h5>Your gym, at home</h5>
              <p>
                Have access to dozens of exercises on the palm of your hand.
              </p>
            </div>
          </div>

          <div className="carousel-item ole">
            <img
              src="/images/calendarSliderImage.jpg"
              className="d-block w-100"
              alt="calendar"
            />
            <div className="carousel-caption d-md-block">
              <h5>Discover our monthly calendar</h5>
              <p>
                Our national experts team have developed the most efficient
                routine for our members, updated every month.
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="home-button-container">
        <div className="boton">
          <button className="button"> <span><Link to="/signup" className="link"> Sign Up </Link> </span></button>
        </div>
        <div className="boton">
          <button className="button"> <span><Link to="/login" className="link"> Log In </Link> </span></button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
