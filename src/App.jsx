import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Modals from './components/Modals/Modals';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Impact from './pages/Impact/Impact';
import Expertise from './pages/Expertise/Expertise';
import Projects from './pages/Projects/Projects';
import QA from './pages/QA/QA';
import Skills from './pages/Skills/Skills';
import Experience from './pages/Experience/Experience';
import LiveProof from './pages/LiveProof/LiveProof';
import Certifications from './pages/Certifications/Certifications';
import Contact from './pages/Contact/Contact';
import './assets/styles/style.css';

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const handleViewTestPlan = (projectId) => {
    setActiveModal(projectId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/projects" element={<Projects onViewTestPlan={handleViewTestPlan} />} />
        <Route path="/qa" element={<QA onViewTestPlan={handleViewTestPlan} />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/live-proof" element={<LiveProof />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Modals activeModal={activeModal} onClose={handleCloseModal} />
    </Layout>
  );
}

export default App;
