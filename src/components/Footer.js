import React from 'react';

const Footer = () => {
  return (
        <div className="footer">
          <div className="declarations">

            <div id="declarations">
              <h3>Developed by Macs Machete</h3>
              <p>&#xA9; 2024, Machete Capital (Pty) Ltd</p>
            </div>

            <div id="contact">
              <p>Contact Us</p>
              <p>
                <a href="mailto:machetecapital@gmail.com">Contact Support</a>
              </p>
              <p>
                571
                <br />
                Tswelopele X8
                <br />
                Tembisa
                <br />
                1632
              </p>
            </div>
          </div>

          <div className="socials-footer">
            <div id="socials">
              <p>Catch the developer</p>
              <p>
                <a href="https://www.linkedin.com/in/trevor-machete-62636b127/">LinkedIn</a>
              </p>
              <p>
                <a href="https://github.com/TrevorMachete/">GitHub</a>
              </p>
              <p>
                <a href="https://twitter.com/trevormachete">Twitter</a>
              </p>
              <br />
            </div>

            <div id="legals">
              <p>Legal</p>
              <p>
                <a href="#">Terms of Service</a>
              </p>
              <p>
                <a href="#">Privacy Policy</a>
              </p>
              <p>
                <a href="#">Cookies Policy</a>
              </p>
            </div>
          </div>
        </div>
  );
};

export default Footer;
