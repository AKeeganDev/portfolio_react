import { useState, useEffect } from 'react';
import '../stylesheets/navbar.scss';
import { MdOutlineEmail } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log('reset');

  const transformHamburger = () => {
    // selects the slices of the hamburger
    const topSlice = document.getElementById('top-slice');
    const middleSlice = document.getElementById('middle-slice');
    const bottomSlice = document.getElementById('bottom-slice');

    // applies the transform animations to the hamburger slices
    topSlice.classList.toggle('change');
    middleSlice.classList.toggle('hide');
    bottomSlice.classList.toggle('change');
  };

  useEffect(() => {
    transformHamburger();
  }, [isOpen]);

  // event listeners that correct navbar if the screen resizes

  window.addEventListener('resize', () => {
    if (isOpen && window.innerWidth > 674) {
      setIsOpen(false);
    }
  });

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
              <MdOutlineEmail />
            </a>
          </li>
        </ul>
        <div role="presentation" id="hamburger" className="invisible" onClick={() => { setIsOpen(!isOpen); }} onKeyDown={transformHamburger}>
          <div id="top-slice" className="bar bar-top" />
          <div id="middle-slice" className="bar bar-middle" />
          <div id="bottom-slice" className="bar bar-bottom" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
