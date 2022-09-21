import './App.css';

import Navbar from './components/navbar';
import Welcome from './components/welcome';
import RecentWorks from './components/recentWorks';
import AboutMe from './components/aboutMe';
import ContactMe from './components/contactMe';
import PopupModal from './components/popupModal';

function App() {
  return (
    <>
      <Navbar />
      <PopupModal />
      <Welcome />
      <RecentWorks />
      <AboutMe />
      <ContactMe />
    </>
  );
}

export default App;
