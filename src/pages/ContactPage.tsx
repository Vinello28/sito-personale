import React from 'react';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';

const ContactPage: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Contact />
      </main>
    </div>
  );
};

export default ContactPage;
