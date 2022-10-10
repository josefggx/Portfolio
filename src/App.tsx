import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { AboutPage } from './pages/AboutPage';
import { HomeContactPage } from './pages/HomeContactPage';
import { HomePage } from './pages/HomePage/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        {/* <Route path="/contact" element={<HomeContactPage />} /> */}

        {/* <Route path="/*" element={<HomePage />} /> */}
        <Route path="*/" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
