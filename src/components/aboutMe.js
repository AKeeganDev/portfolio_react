import '../stylesheets/aboutMe.scss';

const AboutMe = () => (
  <section className="about-myself" id="about-me">
    <div className="personal">
      <div className="personal-text">
        <h1 className="greeting">About me</h1>
        <p>
          I started my Software development journey in 2020 where I started with programming in
          {' '}
          Python. Since then I taught myself Java due to hiring needs,
          {' '}
          but moved into Web Development when I learned about
          {' '}
          <a
            className="microverse"
            href="https://drive.google.com/file/d/13sfhKTqS2E2lhN2QV8ZsHGXGXO4pydtN/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Microverse
          </a>
          .
          {' '}
          I have completed their program and I now have over 1,600 hours of full-stack web
          {' '}
          development experience. Please view my resume or scroll further to see the additional
          {' '}
          stacks that I have experience with. Thank you for visiting my site!
        </p>
        <button type="button" className="see-project resume" onClick={() => { window.open('https://docs.google.com/document/d/1BK2Yw0gEIqpVVIw-C_wZXSgF1pU7pciJ430kgJ_QzxA/edit?usp=sharing', '_blank'); }}><span>Get my resume</span></button>
      </div>
    </div>
    <div className="margin">
      <div className="divider" />
    </div>
    <div className="skills">
      <div className="headings">
        <div className="skill">
          <ul>
            <li className="language">
              <span className="orange">◆</span>
              Languages
            </li>
            <li className="lang">JavaScript</li>
            <li className="lang">Ruby</li>
            <li className="lang">HTML</li>
            <li className="lang">CSS</li>
          </ul>
        </div>
        <div className="skill">
          <ul>
            <li className="frameworks">
              <span className="orange">■</span>
              Frameworks
            </li>
            <li className="lang">Bootstrap</li>
            <li className="lang">Ruby on Rails</li>
            <li className="lang">RSPEC</li>
            <li className="lang">CapyBara</li>
            <li className="lang">Selenium</li>
          </ul>
        </div>
        <div className="skill">
          <ul>
            <li className="skills-list">
              <span className="orange">●</span>
              Skills
            </li>
            <li className="lang">Version Control</li>
            <li className="lang">Github</li>
            <li className="lang">Gitflow</li>
            <li className="lang">MVC Design</li>
            <li className="lang">Terminal</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
