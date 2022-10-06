import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />

        {/* <Route path="/*" element={<HomePage />} /> */}
        <Route path="*/" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
