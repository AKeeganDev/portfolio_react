import '../stylesheets/aboutMe.scss';

const AboutMe = () => (
  <section className="about-myself" id="about-me">
    <div className="personal">
      <div className="personal-text">
        <h1 className="greeting">About me</h1>
        <p>
          Hello I’m a software developer! I can help you build a product, website feature or
          {' '}
          website! Take a look through some of my work and experience. If you like what you see
          {' '}
          and have a project you need coded, don’t hestiate to contact me.
        </p>
        <button type="button" className="see-project resume"><span>Get my Resume</span></button>
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
              Language
            </li>
            <li className="lang">Javascript</li>
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
