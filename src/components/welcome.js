import '../stylesheets/welcome.scss';

import { SiAngellist, SiGithub, SiLinkedin } from 'react-icons/si';

const Welcome = () => (
  <section className="welcome">
    <div className="greeting-text-container">
      <div className="greeting">Hey There. I&apos;m Aaron</div>
      <h3 className="who-am-i">I am a software Developer</h3>
      <p>
        Welcome to my portfolio page.
        <br />
        My goal is to help you expand your business or share ideas around the globe.
        {' '}
        The power of the internet makes that a reality today!
        For info about me and for snapshots of my work, please continue reading my site.
        {' '}
        Please click on a project card below for more information and a link to its demo
        {' '}
        (if available).
      </p>
    </div>
    <div className="contact-bar">
      <ul>
        <li>
          <a aria-label="text" href="https://www.github.com/AKeeganDev" className="social-link"><SiGithub /></a>
        </li>
        <li>
          <a aria-label="text" href="https://angel.co/u/akeegandev" className="social-link"><SiAngellist /></a>
        </li>
        <li>
          <a aria-label="text" href="https://www.linkedin.com/in/akeegandev" className="social-link"><SiLinkedin /></a>
        </li>
      </ul>
    </div>
  </section>
);

export default Welcome;
