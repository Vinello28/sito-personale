import React from 'react';
import Experience from '../components/Experience';
import Navbar from '../components/Navbar';

const ExperiencePage: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Experience />
      </main>
    </div>
  );
};

export default ExperiencePage;
