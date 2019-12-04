import React, { useState } from "react";
import { Element, scroller } from "react-scroll";
import VisibilitySensor from "react-visibility-sensor";

import "./App.css";
import "./stylesheets/home.css";

function App() {
  const scrollToElement = elementName => {
    scroller.scrollTo(elementName, { smooth: true });
  };

  return (
    <div>
      <div id='top' className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1>Richard Deng</h1>
          <hr className='my-2' />
          <p className='lead'>Interactive resume</p>
        </div>

        <div className='overlay'></div>

        <a
          onClick={() => scrollToElement("profile-section")}
          className='scroll-down d-none d-sm-block'
        >
          <span>
            <i className='fas fa-arrow-down'></i>
          </span>
        </a>
      </div>

      <Element name='profile-section'>
        <div className='background-white'>
          <div className='container justify-content-center' id='profile'>
            <h2>Profile</h2>
            <p className='lead'>
              I am a talented and creative MERN stack developer
            </p>
            <hr />

            <div className='row'>
              <div className='col-lg-4'>
                <h3>About me</h3>
                <p>
                  I am a USYD Master of IT student majoring in Software
                  Engineering. I have excellent knowledge in MERN stack,
                  algorithm, and data structure. I extremely love programming
                  and order. Quality of code is what I am chasing for. On the
                  other hand, I am also a problem solver. Digging into questions
                  and optimizing them are my favoriates. Capability of working
                  with team, whether small or large, is what I am proud of.
                </p>
              </div>
              <div className='col-lg-4 text-center'>
                <img
                  className='rounded-circle'
                  src={require("./statics/image/profile.jpeg")}
                  alt='Richard Deng'
                  style={{ width: 246, height: 246 }}
                />
              </div>
              <div className='col-lg-4'>
                <h3>Detail</h3>
                <strong>Name:</strong>
                <p>Richard Deng</p>
                <strong>Age:</strong>
                <p>22</p>
                <strong>Location:</strong>
                <p>Sydney</p>
                <br />
                <a
                  className='btn btn-primary text-white'
                  href='https://www.linkedin.com/in/xing-deng-00a435164/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='mr-1'>
                    <i className='fab fa-linkedin'></i>
                  </span>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name='experience-section'>
        <div className='background-wheat container'>
          This is experience section.
        </div>
      </Element>
    </div>
  );
}

export default App;
