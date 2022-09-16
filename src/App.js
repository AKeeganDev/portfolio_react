import './App.css';

import Navbar from './components/navbar';
import Welcome from './components/welcome';
import RecentWorks from './components/recentWorks';

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <RecentWorks />
    </>
  );
}

export default App;
