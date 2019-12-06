import React from "react";
import { Element, scroller } from "react-scroll";
import info from "./statics/information";

import "./App.css";
import "./stylesheets/home.css";

function Skill(props) {
  const scoreVal = props.score;
  const title = props.title;
  const key = props.key;
  let scores = [];
  for (var i = 0; i < 5; ++i) {
    scores.push(
      i < scoreVal ? (
        <i className='fas fa-star' key={key}></i>
      ) : (
        <i className='far fa-star' key={key}></i>
      )
    );
  }

  return (
    <div className='col-12 col-md-6'>
      <div className='d-flex justify-content-between ability p-1'>
        <span className='ability-title'>{title}</span>
        <span className='ability-score'>{scores}</span>
      </div>
    </div>
  );
}

function Project(props) {
  const img = props.img;
  const title = props.title;
  const description = props.description;
  const tags = props.tags;
  return (
    <div className='col-12 col-md-6 p-0'>
      <a
        href='https://github.com/xden2331/richard-yelpcamp'
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='project'>
          <img src={img} alt='project screenshot' className='h-100 w-100' />
          <span className='project-card'>
            <h3>{title}</h3>
            <hr />
            <div className='content'>
              <p>{description}</p>

              <h6>Tags:</h6>
              <p>{tags.join(", ")}</p>
            </div>
          </span>
        </div>
      </a>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.state = {
      navStyle: {
        position: "absolute",
        top: `${window.innerHeight}px`
      },
      currentSection: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, true);
    var profileTop = document.getElementById("profile").offsetTop;
    var expTop = document.getElementById("experiences").offsetTop;
    var abTop = document.getElementById("abilities").offsetTop;
    var projectTop = document.getElementById("projects").offsetTop;
    this.setState({
      sectionOffsets: [profileTop, expTop, abTop, projectTop]
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  updateNavBar(scrollY) {
    const offsets = this.state.sectionOffsets;
    for (var i = 0; i < offsets.length - 1; ++i) {
      const windowOffset = scrollY + document.body.offsetHeight;
      const offsetOne = offsets[i];
      const offsetTwo = offsets[i + 1];
      if (windowOffset > offsetOne && windowOffset < offsetTwo) {
        this.setState({ currentSection: i + 1 });
        return;
      }
    }
    this.setState({ currentSection: offsets.length });
  }

  onScroll() {
    const scrollY = window.scrollY;
    this.updateNavBar(scrollY);
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

        <Element name='experiences-section'>
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
                      <i className='fas fa-map-marker-alt' />
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
                      <i className='fas fa-map-marker-alt' />
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
                    <span className='border-right pr-3 mr-3'>
                      <i className='fas fa-map-marker-alt' />
                      Sydney, Australia
                    </span>
                    <a
                      href='https://www.pulpyou.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Pulp you
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>

        <Element name='abilities-section'>
          <div className='background-white' id='abilities'>
            <div className='container'>
              <h2>Abilities</h2>
              <div className='text-center'>
                <p className='mb-0 lead'>
                  Velit tempor commodo nisi reprehenderit adipisicing incididunt
                  ut.
                </p>
                <footer className='blockquote-footer'>Socrates</footer>
              </div>
              <hr />

              <h3>Skills</h3>
              <div className='skills row mb-5'>
                {info.skills.map(item => {
                  return (
                    <Skill
                      title={item.title}
                      score={item.score}
                      key={item.title}
                    />
                  );
                })}
              </div>

              <div className='font-weight-light font-italic text-center'>
                This project is built on ReactJS and Bootstrap. Interested?
                check on Github!
              </div>

              <div className='w-100 d-flex '>
                <a
                  className='btn btn-primary text-white mx-auto text-decoration-none'
                  href='https://github.com/xden2331/react_personal_web'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='mr-1'>
                    <i className='fab fa-github'></i>
                  </span>
                  Github
                </a>
              </div>

              <hr />

              <h3>Languages</h3>
              <div className='skills row mb-5'>
                {info.languages.map(item => {
                  return (
                    <Skill
                      title={item.title}
                      score={item.score}
                      key={item.title}
                    />
                  );
                })}
              </div>

              <hr />

              <h3>Tools</h3>
              <div className='skills row mb-5'>
                {info.tools.map(item => {
                  return (
                    <Skill
                      title={item.title}
                      score={item.score}
                      key={item.title}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Element>

        <Element name='projects-section'>
          <div className='background-wheat' id='projects'>
            <div className='container'>
              <h2>Projects</h2>
              <div className='text-center'>
                <p className='mb-0 lead'>
                  Velit tempor commodo nisi reprehenderit adipisicing incididunt
                  ut.
                </p>
                <footer className='blockquote-footer'>Socrates</footer>
              </div>
              <hr />

              <div className='row'>
                {info.projects.map(item => {
                  return (
                    <Project
                      img={item.img}
                      title={item.title}
                      tags={item.tags}
                      description={item.description}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Element>

        <Element name='contact-section'>
          <div id='contact'>
            <div className='container'>
              <h2 className='text-white'>Contact</h2>
              <p className='lead text-light'>
                Cupidatat nostrud amet sint irure in minim.
              </p>

              <hr />

              <div className='row justify-content-center'>
                {info.contacts.map(contact => {
                  return (
                    <span>
                      <i className={contact.iconClass} />
                      <a
                        href={contact.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {contact.url}
                      </a>
                    </span>
                  );
                })}
              </div>

              <hr />
            </div>
          </div>
        </Element>

        <div className='footer text-light text-center'>
          <p>
            Inspired by{" "}
            <a
              href='http://www.pascalvangemert.nl/#/profile'
              rel='noopener noreferrer'
              target='_blank'
            >
              Pascal van Gemert's resume.
            </a>
          </p>
        </div>

        {/* Nav bar */}
        <ul className='nav flex-column' style={this.state.navStyle}>
          <li className='scroll-down nav-item'>
            <a
              href='#profile'
              className={this.state.currentSection === 1 ? " active" : ""}
              onClick={() => scrollToElement("profile-section")}
            >
              Profile
            </a>
          </li>

          <li className='scroll-down nav-item'>
            <a
              href='#experience'
              className={this.state.currentSection === 2 ? " active" : ""}
              onClick={() => scrollToElement("experiences-section")}
            >
              Experiences
            </a>
          </li>

          <li className='scroll-down nav-item'>
            <a
              href='#abilities'
              className={this.state.currentSection === 3 ? " active" : ""}
              onClick={() => scrollToElement("abilities-section")}
            >
              Abilities
            </a>
          </li>

          <li className='scroll-down nav-item'>
            <a
              href='#projects'
              className={this.state.currentSection === 4 ? " active" : ""}
              onClick={() => scrollToElement("projects-section")}
            >
              Projects
            </a>
          </li>

          <li className='scroll-down nav-item'>
            <a
              href='#contact'
              className={this.state.currentSection === 5 ? " active" : ""}
              onClick={() => scrollToElement("contact-section")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
