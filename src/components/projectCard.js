import PropTypes from 'prop-types';

const ProjectCard = (props) => {
  const {
    imageCard, imagePopup, title, description, languages, githubURL, liveDemo,
  } = props;
  console.log([imageCard, imagePopup, githubURL, liveDemo]);

  return (
    <div className="card card2">
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
