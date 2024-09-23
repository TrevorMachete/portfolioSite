// Feed.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const img1 = require('../assets/images/img1.png');
const img2 = require('../assets/images/img11.png');
const sh = require('../assets/images/sh.png');
const pq = require('../assets/images/pq.png');
const ss = require('../assets/images/ss.png');
const mj = require('../assets/images/mj.png');

const Home = () => {

  useEffect(() => {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');

    // Fade in img1 and img3 first
    setTimeout(() => {
      img1.classList.add('fade-in');
      img3.classList.add('fade-in');
    }, 500); // Delay for 0.5 seconds

    // Fade in img2 after img1 and img3
    setTimeout(() => {
      img2.classList.add('fade-in');
    }, 1500); // Delay for 1.5 seconds
  }, []);

  return (
    <div className="landing-content">

      <div className="introduction">
        <h1> Macs Machete </h1>

        <div className="hats-group">
          <div id="hat-one">
            {/*<p>Full Stack</p>*/}
          </div>

          <div id="hat-two">
            <p>Software Engeneer </p>
          </div>

          <div id="hat-three">
            {/*<p>Web Expert</p>*/}
          </div>
        </div>
      </div>

    <div className="image-group-one">
      <div id="image-one-group-one">
        <img src={img1} id="img1" alt="Image 1" />
      </div>

      <div id="image-two-group-one">
        <img src={img2} id="img2" alt="Image 2" />
      </div>

      <div id="image-three-group-one">
        <img src={img1} id="img3" alt="Image 3" />
      </div>
    </div>

      <div className="credentials">
        <div id="about-me">
          <h3>About Me</h3>
          <p>I am an ALX alumni and a meticulous software engineer with a strong foundation in web and software development. My experience spans across various successful projects, where my knowledge and skills have been thoroughly tested. I have expertise in working with databases including but not limited to Firebase, and I am proficient in Python, JavaScript, HTML, CSS, React, React Native, and SQL. Additionally, I have a solid understanding of the Linux system. My passion for technology and commitment to excellence drive me to continuously learn and grow in the ever-evolving field of software engineering. No challenge is bigger. I deliver every project on time.</p>
        </div>

        <div className="technologies">
          <h3>Technology stack</h3>

          <div className="stacks">
            <div id="stack-one">
              <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>

            <div id="stack-two">
              <ul>
                <li>React</li>
                <li>React Native</li>
                <li>SQL</li>
                <li>Electron</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-header">
        <h1>Portfolio</h1>

        <hr />
      </div>

      <div className="portfolio">
        <div className="portfolio-group-one">

          <div className="project-card">
            <h3>Polymath Quiz Game</h3>
            <Link to="https://polymathquest00.web.app/index.html"><img src={pq} className="portfolio-image" alt="Image 4" /></Link>
            <p>An engaging and interactive quiz game that challenges and entertains users of all ages. It offers customizable features such as multiple difficulty levels, the ability to choose the number of questions, a wide range of categories, and a multiplayer mode for real-time competition with friends and family. The game leverages an external API to fetch a diverse set of questions, ensuring fresh and up-to-date content.</p>
          </div>

          <div className="project-card">
            <h3>SkyHire </h3>
            <Link to="https://skyhireweb.web.app/"><img src={sh} className="portfolio-image" alt="Image 5" /></Link>
            <p>The jet hiring service website provides users with the ability to select from a variety of aircraft options. It offers detailed information on each plane, including specifications, amenities, and availability, allowing users to make informed decisions based on their specific needs and preferences. The platform is designed to facilitate easy comparison and booking, ensuring a seamless experience</p>
          </div>

          <div className="project-card">
            <h3>SamaSkies Blog Site</h3>
            <Link to="https://fir-frontend-364bb.web.app/"><img src={ss} className="portfolio-image" alt="Image 6" /></Link>
            <p>The blog platform is designed to simplify the writing process by allowing users to focus solely on creating and publishing articles without the need to handle any code. It provides an intuitive interface where writers can easily draft, edit, and format their content. The platform also includes features such as media embedding.</p>
          </div>
        </div>
      </div>

      <div className="ongoing-projects-header">
        <h1>Ongoing Projects</h1>

        <hr />
      </div>

      <div className="ongoing-projects">
        <div className="portfolio-group-one">

          <div className="project-card">
            <h3>Mjondol Labs Website</h3>
            <img src={mj} className="portfolio-image" alt="Image 7" />
            <p>The website for the software and web development company features a range of AI tools that users can utilize to generate content or interact with a sophisticated AI model. Additionally, the site includes various games for users to enjoy, providing an engaging and interactive experience. Detailed pricing information about the company’s services is also available, ensuring transparency and helping potential clients make informed decisions. The platform is designed to be user-friendly, offering a seamless and comprehensive experience for all visitors.</p>
          </div>

          <div id="project-two">

          </div>

          <div id="project-three">

          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
