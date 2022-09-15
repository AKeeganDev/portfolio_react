import '../stylesheets/welcome.scss';

const Welcome = () => (
  <section className="welcome">
    <div className="greeting-text-container">
      <div className="greeting">Hey There. I`&apos;`m Aaron</div>
      <h3 className="who-am-i">I am a software Developer</h3>
      <p>
        Welcome to my portfolio page.
        <br />
        My goal is to help you expand your business or share ideas around the globe.
        {' '}
        The power of the internet makes that a reality today!
        For info about me and for snapshots of my work, please continue reading my site.
      </p>
    </div>
    <div className="contact-bar">
      <ul>
        <li>
          <a aria-label="text" href="https://www.github.com/AKeeganDev" className="fa fa-github">git</a>
        </li>
        <li>
          <a aria-label="text" href="https://angel.co/u/akeegandev" className="fa fa-angelist">angel</a>
        </li>
        <li>
          <a aria-label="text" href="https://www.linkedin.com/in/akeegandev" className="fa fa-linkedin">linkedin</a>
        </li>
      </ul>
    </div>
  </section>
);

export default Welcome;
