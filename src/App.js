import './App.css';

import Navbar from './components/navbar';
import Welcome from './components/welcome';
import RecentWorks from './components/recentWorks';
import AboutMe from './components/aboutMe';

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <RecentWorks />
      <AboutMe />
    </>
  );
}

export default App;
