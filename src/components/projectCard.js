import PropTypes from 'prop-types';
import '../stylesheets/projectCard.scss';

const ProjectCard = (props) => {
  const {
    imageCard, imagePopup, title, description, languages, githubURL, liveDemo,
  } = props;
  console.log([imageCard, imagePopup, githubURL, liveDemo]);

  const background = `linear-gradient(rgba(255, 255, 255, 0.0), rgba(0, 0, 0, 1)), url("${imageCard}")`;

  return (
    <div
      className="card"
      style={{ backgroundImage: background }}
    >
      <div
        className="card-overlay"
      >
        <div className="card-details">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <div className="tags">
            <ul>
              {languages.map((language) => (
                <li className="card-tag" key={languages.indexOf(language)}>
                  <div>
                    {language}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imageCard: PropTypes.string.isRequired,
  imagePopup: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubURL: PropTypes.string.isRequired,
  liveDemo: PropTypes.string.isRequired,
};

export default ProjectCard;
