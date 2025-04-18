import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContentDetail from './pages/ContentDetail';
import ContentStorage from './pages/ContentStorage';

// Import other pages (we'll create these next)
import Vision from './pages/Vision';
import Staff from './pages/Staff';
import Research from './pages/Research';
import Programs from './pages/Programs';
import Laboratory from './pages/Laboratory';
import Partners from './pages/Partners';
import News from './pages/News';
import ProgramMaster from './pages/ProgramMaster';
import ProgramPhD from './pages/ProgramPhD';
import ResearchCluster from './pages/ResearchCluster';

function App() {
  return (
    <Router basename="/deploy-mu-web">
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/research-cluster" element={<ResearchCluster />} />
          <Route path="/program-master" element={<ProgramMaster />} />
          <Route path="/program-phd" element={<ProgramPhD />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/news" element={<News />} />
          <Route path="/content/:type/:id" element={<ContentDetail />} />
          <Route path="/content-storage" element={<ContentStorage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
