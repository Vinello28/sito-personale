import React from 'react';
import Skills from '../components/Skills';
import Navbar from '../components/Navbar';

const SkillsPage: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Skills />
      </main>
    </div>
  );
};

export default SkillsPage;
