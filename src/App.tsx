import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Cursor /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/*" element={<HomePage />} /> */}
        <Route path="*/" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
