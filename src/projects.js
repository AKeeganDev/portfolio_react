const bee = require('./assets/beestorefitted.png');
const portfolio = require('./assets/portfolioCard.PNG');
const medicalDatabase = require('./assets/medicalDatabase.PNG');
const transactions = require('./assets/transactions.PNG');
const bookstore = require('./assets/bookstore.PNG');

const topProject = {
  title: 'BeeBookings',
  imageCard: '../assets/beestorefitted.png',
  imagePopup: bee,
  description: 'Interactive SPA in which the user can view, add, delete,'
  + ' '
  + 'and reserve bees. Our app allows a user to add a photo of their choosing by using AWS API. Built using React.',
  languages: ['SCSS', 'Ruby', 'JavaScript', 'PostgreSQL', 'React'],
  githubURL: 'https://github.com/jsug9/bee-bookings-front-end',
  liveDemo: '',
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
    description: 'A wireframe for a web design that a user can keep track of expenses with',
    languages: ['Ruby', 'Rails', 'PostgreSQL', 'CSS'],
    githubURL: 'https://github.com/AKeeganDev/ruby_transactions_app',
    liveDemo: '',
  },
  {
    title: 'BookStore',
    imageCard: bookstore,
    imagePopup: bookstore,
    description: 'A fun design for a site where the intent is for a user to be able to keep track of books they are reading and document progress',
    languages: ['SCSS', 'JavaScript', 'React'],
    githubURL: 'https://github.com/AKeeganDev/bookstore',
    liveDemo: 'https://akeegandev.github.io/bookstore/',
  },
];

export { topProject, projects };
