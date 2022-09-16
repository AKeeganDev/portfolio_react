import PropTypes from 'prop-types';
import '../stylesheets/featuredProject.scss';
import { generatePopup } from './popupModal';

const FeaturedProject = (props) => {
  const {
    title, description, languages, githubURL, liveDemo,
  } = props;

  return (
    <div className="title-project">
      <div className="featured-img-space">
        <div className="featured-img" />
        <div className="title-project-details">
          <h3>{title}</h3>
          <p>
            {description}
          </p>
          <div className="tags">
            <ul>
              {languages.map((language) => (
                <li key={languages.indexOf(language)}>
                  <div>
                    {language}
                  </div>
                </li>
              ))}
            </ul>
            {/* <ul>
              <li>
                <div>CSS</div>
              </li>
              <li>
                <div>HTML</div>
              </li>
              <li>
                <div>Bootstrap</div>
              </li>
              <li>
                <div>Ruby</div>
              </li>
            </ul> */}
          </div>
          <button type="button" className="see-project card-button open-modal" onClick={() => generatePopup(githubURL, liveDemo)}>
            <span>See Project</span>
          </button>
        </div>
      </div>
    </div>
  );
};

FeaturedProject.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubURL: PropTypes.string.isRequired,
  liveDemo: PropTypes.string.isRequired,
};

export default FeaturedProject;
