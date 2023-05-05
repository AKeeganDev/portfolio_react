const recipeApp = require('./assets/recipeAppSnip.png');
const portfolio = require('./assets/portfolioCard.PNG');
const medicalDatabase = require('./assets/medicalDatabase.PNG');
const transactions = require('./assets/transactions.PNG');
const crmSnip = require('./assets/crmSnip.png');

const topProject = {
  title: 'Recipe Web App',
  imageCard: '../assets/recipeAppSnip.png',
  imagePopup: recipeApp,
  description: 'Interactive site where users can log in and post their favorite recipes!'
  + ' '
  + 'This service is hosted on Render\'s free tier so it may be slow to start up if it has\'t loaded up in a while',
  languages: ['SCSS', 'Ruby', 'PostgreSQL'],
  githubURL: 'https://github.com/AKeeganDev/recipe_app',
  liveDemo: 'https://recipe-app-public.onrender.com/',
};

const projects = [
  {
    title: 'Portfolio',
    imageCard: portfolio,
    imagePopup: portfolio,
    description: 'Welcome to my portfolio! This site holds links to my works in Github and showcases my skills in JS and HTML/CSS',
    languages: ['SCSS', 'JavaScript', 'React'],
    githubURL: 'https://github.com/AKeeganDev/portfolio_react',
    liveDemo: 'https://akeegandev.github.io/portfolio_react/',
  },
  {
    title: 'Medical Database',
    imageCard: medicalDatabase,
    imagePopup: medicalDatabase,
    description: 'This repo demonstrates an example database setup that could be used as a PostgreSQL backend at a clinic. Features patient info, treatment histories, and invoicing',
    languages: ['PostgreSQL'],
    githubURL: 'https://github.com/AKeeganDev/medical-database',
    liveDemo: '',
  },
  {
    title: 'Transactions App',
    imageCard: transactions,
    imagePopup: transactions,
    description: 'A wireframe for a web design that a user can keep track of expenses with. The live demo was removed by Heroku but you can run the site locally. Instructions are on the github page',
    languages: ['Ruby', 'Rails', 'PostgreSQL', 'CSS'],
    githubURL: 'https://github.com/AKeeganDev/ruby_transactions_app',
    liveDemo: '',
  },
  {
    title: 'Client Relationship Manager Database',
    imageCard: crmSnip,
    imagePopup: crmSnip,
    description: 'This is a fully functional API that serves as a database for a Client Relationship Manager app. A business owner can log in, create contacts records for their clients, and document their interactions they have had with clients',
    languages: ['Ruby'],
    githubURL: 'https://github.com/AKeeganDev/client_relationship_manager_back_end',
    liveDemo: 'https://aacrmapp.fly.dev/api-docs/index.html',
  },
];

export { topProject, projects };
