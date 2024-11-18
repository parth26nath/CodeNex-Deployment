import React from "react";
import "./aboutus.css";
import Parth from "../assets/Parth.png"
import Ananya from "../assets/Ananya.jpg"
import Govind from "../assets/Govind-Creatives.jpg"
import Siah from "../assets/Siah-Creatives.jpg"
import Karan from "../assets/Karan-corporate.jpg"
import Hirav  from "../assets/Hirav-corporate.jpg"
import Srijan from "../assets/Srijan-Aiml.jpg"
import Aadarsh from "../assets/Aadarsh-cyber.jpg"
import Anhadveer from "../assets/Anhadveer-cyber.jpg"
import Ashwath from "../assets/Ashwath-Block.jpg"
import Nishanth from "../assets/Nishanth-events.jpg"
import Subashree from "../assets/subashree-events.jpg"
import Sushant from "../assets/Sushant.jpg"
import Bhargav from "../assets/Bharghav-PR.jpg"
import Anmol from "../assets/Anmol.jpg"
import Shreyansh from "../assets/Shreyansh.jpg"

const Aboutus = () => {
  return (
      <div className="body">
        <div id="social-icons-container"></div>
        <div className="container">
          <div className="club-name">
            <h1>odenex</h1>
          </div>

          <div className="club-head">
            <div className="profile-card">
              <img src={Parth} alt="Club Head" />
              <h2>Parth Nath Chauhan</h2>
              <p1 className="position">CODENEX FOUNDER</p1>
              <p>
                Parth oversees the entire club, coordinating efforts across
                domains and ensuring a unified vision.
              </p>
            </div>
          </div>
        </div>
        <section id="team-members"></section>
        <section id="team-members">
          <div className="domain-section" id="domain1">
            <h2>Web Development</h2>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={Shreyansh} alt="Shreyansh Arora" />
                  <h3>Shreyansh Arora</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={Ananya} alt="Ananya Agarwal" />
                  <h3>Ananya Agarwal</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="domain-section" id="domain2">
            <h2>Creative's</h2>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={Govind} alt="Emma Scott" />
                  <h3>Govind Raj</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={Siah} alt="Olivia Harris" />
                  <h3>Siah Alex</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="domain-section" id="domain3">
            <h2>Corporate</h2>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={Karan} alt="Sophia Turner" />
                  <h3>Karan Pamnani</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={Hirav} alt="Mia Wilson" />
                  <h3>Hirav Kadikar</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="domain-section" id="domain4">
            <h2>AIML</h2>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={Srijan} alt="David Brown" />
                  <h3>Srijan Sarkar</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="domain-section" id="domain5">
            <h2>APP DEV</h2>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={Sushant} alt="Ethan Smith" />
                  <h3>Sushant Chavan</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="domain-section" id="domain6">
            <h2>Cyber Security</h2>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={Aadarsh} alt="Mike Anderson" />
                  <h3>Aadarsh Jaiswal</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={Anhadveer} alt="Sarah Lee" />
                  <h3>Anhadveer Singh</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="domain-section" id="domain7">
            <h2>Blockchain</h2>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={Ashwath} alt="Mike Anderson" />
                  <h3>Ashwath</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={Parth} alt="Sarah Lee" />
                  <h3>Parth Nath Chauhan</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="domain-section" id="domain8">
            <h2>Events</h2>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={Nishanth} alt="Mike Anderson" />
                  <h3>Nishant Deshmukh</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={Subashree} alt="Sarah Lee" />
                  <h3>Subashree Satpathy</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="domain-section" id="domain9">
            <h2>PR</h2>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={Bhargav} alt="Mike Anderson" />
                  <h3>Bhargav Raj</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="domain-section" id="domain10">
            <h2>Sponsorship</h2>
            <div className="team-member">
              <div className="card-inner">
                <div className="card-front">
                  <img src={Anmol} alt="Mike Anderson" />
                  <h3>Anmol</h3>
                  <p>Associative HEAD</p>
                </div>
                <div className="card-back">
                  <div className="social-icons1">
                    <a
                      href="https://github.com/username"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/username"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://instagram.com/username"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Aboutus;
