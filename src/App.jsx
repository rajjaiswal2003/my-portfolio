import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import EmailModal from './components/EmailModal';
import './index.css';

function App() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const openEmailModal = (e) => {
    if (e) e.preventDefault();
    setIsEmailModalOpen(true);
  };

  return (
    <div className="app">
      <Navbar onEmailClick={openEmailModal} />
      <main>
        <Hero onEmailClick={openEmailModal} />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer onEmailClick={openEmailModal} />
      <EmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
    </div>
  );
}

export default App;
