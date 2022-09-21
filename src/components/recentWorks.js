import '../stylesheets/recentWorks.scss';
import FeaturedProject from './featuredProject';
import ProjectCard from './projectCard';
import { projects, topProject } from '../projects';

const RecentWorks = () => (
  <section className="recent-works" id="portfolio">
    <div className="recent-work-heading-container">
      <div className="heading">
        <h1>My Recent Works</h1>
      </div>
      <div className="recent-work-divider" />
    </div>
    <FeaturedProject
      title={topProject.title}
      imageCard={topProject.imageCard}
      imagePopup={topProject.imagePopup}
      description={topProject.description}
      languages={topProject.languages}
      githubURL={topProject.githubURL}
      liveDemo={topProject.liveDemo}
    />
    <div className="card-container">
      {
          projects.map((project) => (
            <ProjectCard
              title={project.title}
              imageCard={project.imageCard}
              imagePopup={project.imagePopup}
              description={project.description}
              languages={project.languages}
              githubURL={project.githubURL}
              liveDemo={project.liveDemo}
              key={projects.indexOf(project)}
            />
          ))
        }
    </div>
  </section>
);

export default RecentWorks;
