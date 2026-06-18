import "./Footer.css";

import { footerLinks } from "../../data/siteData";

import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          <div className="footer-brand">

            <h2>
              Envir Galaxy
            </h2>

            <span>
              Technology
            </span>

            <p>
              Building modern digital products,
              scalable software solutions and
              exceptional user experiences.
            </p>

          </div>

          <div className="footer-links">

            <h4>Quick Links</h4>

            <ul>

              {footerLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                  >
                    {link}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          <div className="footer-social">

            <h4>Connect</h4>

            <div className="social-icons">

              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaGithub />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Envir Galaxy Technology.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;