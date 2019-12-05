import React from "react";
import { Element, scroller } from "react-scroll";

import "./App.css";
import "./stylesheets/home.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onJumbotronScroll = this.onJumbotronScroll.bind(this);
    this.state = {
      navStyle: {
        position: "absolute",
        top: `${window.innerHeight}px`
      }
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onJumbotronScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onJumbotronScroll);
  }

  onJumbotronScroll() {
    const scrollY = window.scrollY;
    if (scrollY > window.innerHeight - 70) {
      this.setState({
        navStyle: {
          position: "fixed",
          top: "70px"
        }
      });
    } else {
      this.setState({
        navStyle: {
          position: "absolute",
          top: `${window.innerHeight}px`
        }
      });
    }
  }

  render() {
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
            href='#profile'
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
                    other hand, I am also a problem solver. Digging into
                    questions and optimizing them are my favoriates. Capability
                    of working with team, whether small or large, is what I am
                    proud of.
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
                <div className='col-lg-4 pl-4'>
                  <h3>Details</h3>
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
          <div className='background-wheat' id='experiences'>
            <div className='container'>
              <h2>Experiences</h2>
              <div className='text-center'>
                <p className='mb-0 lead'>
                  "The unexamined life is not worth living."
                </p>
                <footer className='blockquote-footer'>Socrates</footer>
                <p>The most recent information you wanna know about me.</p>
              </div>
              <hr />

              <h3>Educations</h3>
              <div id='educations'>
                <div className='experience row'>
                  <div className='col-4'>
                    <h4>University of Sydney</h4>
                    <p>July 2019 - Dec 2020</p>
                  </div>
                  <div className='col-8'>
                    <p>
                      <strong>
                        Master - Information Technology (Major in Software
                        Engineering)
                      </strong>
                      Veniam laborum elit sunt aliquip sit ad ex consectetur
                      duis. Id anim laboris fugiat ad irure veniam duis sint
                      labore anim. Sint pariatur adipisicing voluptate eu irure
                      ut ex pariatur consequat deserunt veniam. Non id non do
                      irure cupidatat.
                    </p>
                    <span>
                      <i class='fas fa-map-marker-alt' />
                      Sydney, Australia
                    </span>
                  </div>
                </div>
                <div className='experience row'>
                  <div className='col-4'>
                    <h4>University of Sydney</h4>
                    <p>July 2016 - July 2019</p>
                  </div>
                  <div className='col-8'>
                    <p>
                      <strong>
                        Bachelor - Computer Science and Technology (Major in
                        Computer Science)
                      </strong>
                      The education was mainly about high-level content in IT.
                      For instance, algorithm, data structure and project
                      management. On the other hand, I also learned about SQL,
                      Java, MVC, UML and more. During my time in the university,
                      I specialized in Computer Science. Here I learned about
                      the importance of OOP, web, project management and team
                      work.
                    </p>
                    <span>
                      <i class='fas fa-map-marker-alt' />
                      Sydney, Australia
                    </span>
                  </div>
                </div>
              </div>

              <hr />

              <h3>Careers</h3>
              <div id='careers'>
                <div className='experience row'>
                  <div className='col-4'>
                    <h4>Pulp You Media</h4>
                    <p>July 2019 - Nov 2019</p>
                  </div>
                  <div className='col-8'>
                    <p>
                      <strong>Internship - Mobile App MVP Developer</strong>
                      Proident sint sit officia minim aliquip velit sit laborum
                      irure. Ex nulla deserunt mollit fugiat eiusmod fugiat
                      deserunt. Et reprehenderit duis aliqua cillum
                      reprehenderit id anim eu sunt consectetur do amet irure
                      eu. Sint commodo veniam excepteur ipsum aliqua elit do eu
                      enim est. Ex amet ex ad consequat ex dolore cillum aliqua
                      laboris ut nostrud voluptate commodo. Exercitation velit
                      sunt et ad amet.
                    </p>
                    <span className="border-right pr-3 mr-3">
                      <i class='fas fa-map-marker-alt' />
                      Sydney, Australia
                    </span>
                    <a href="https://www.pulpyou.com/" target="_blank" rel="noopener noreferrer">
                      Pulp you
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>

        <Element name="ability-section">
          <div className='background-white' id='abilities'>
            <div className='container'>
              <h2>Abilities</h2>
              <div className='text-center'>
                <p className='mb-0 lead'>
                  Velit tempor commodo nisi reprehenderit adipisicing incididunt ut.
                </p>
                <footer className='blockquote-footer'>Socrates</footer>
              </div>
              <hr />

              <h3>Skills</h3>
              <div className='skills row'>
                <div className='col-6'>Left col</div>
                <div className='col-6'>Right col</div>
              </div>
            </div>
          </div>
        </Element>

        {/* Nav bar */}
        <ul className='nav flex-column' style={this.state.navStyle}>
          <li className='scroll-down nav-item'>
            <a
              href='#profile'
              onClick={() => scrollToElement("profile-section")}
            >
              Profile
            </a>
          </li>

          <li className='scroll-down nav-item'>
            <a
              href='#experience'
              onClick={() => scrollToElement("experiences-section")}
            >
              Experiences
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
