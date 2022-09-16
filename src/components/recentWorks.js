import '../stylesheets/recentWorks.scss';
import FeaturedProject from './featuredProject';

const RecentWorks = () => {
  console.log('saving space');

  return (
    <section className="recent-works" id="portfolio">
      <div className="recent-work-heading-container">
        <div className="heading">
          <h1>My Recent Works</h1>
        </div>
        <div className="recent-work-divider" />
      </div>
      <FeaturedProject
        title="BeeStore"
        description={'Interactive SPA in which the user can view, add, delete,'
        + ' '
        + 'and reserve bees. Our app allows a user to add a photo of their choosing by using AWS API. Built using React.'}
        languages={['SCSS', 'Ruby', 'Javascript', 'PostgreSQL']}
        githubURL="https://github.com/jsug9/bee-bookings-front-end"
        liveDemo="https://beebookcapstone.netlify.app/"
      />
    </section>
  );
};

export default RecentWorks;
