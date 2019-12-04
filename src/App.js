import React from "react";
import {
  Element,
  scroller
} from "react-scroll";

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

        <div className='scroll-down d-none d-sm-block'>
          <a onClick={() => scrollToElement("profile-section")}>
            <span>
              <i className='fas fa-arrow-down'></i>
            </span>
          </a>
        </div>
      </div>
      <Element name='profile-section'>
        <div className='background-vanilla-blue'>
          <div className='container justify-content-center text-center ' id='profile'>
            <h1>Richard Deng</h1>
            <hr className='my-2' />
            <p className='lead'>Interactive resume</p>
          </div>
        </div>
      </Element>
    </div>
  );
}

export default App;
