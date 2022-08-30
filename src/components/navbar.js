import { useState } from 'react';
import '../stylesheets/navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  console.log(setIsOpen);
  return (
    <nav id="navbar">
      <p className="logo">Aaron Keegan</p>

      <div className="right-links">
        <ul className="nav-links">
          <li className="nav-link">
            <a href="#portfolio" id="portfolio-link">Portfolio</a>
          </li>
          <li className="nav-link">
            <a href="#about-me" id="about-link">About</a>
          </li>
          <li className="nav-link">
            <a href="#contact-me" id="contact-link">Contact</a>
          </li>
          <li className="nav-link icon-mail" id="mail-icon">
            <a href="mailto:user@example.com">
              <div className="icon-mail" />
              email
            </a>
          </li>
        </ul>
        <div id="hamburger" className="invisible">
          <div className="bar bar-top" />
          <div className="bar bar-middle" />
          <div className="bar bar-bottom" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
