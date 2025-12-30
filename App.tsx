import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import EducationCert from './components/EducationCert';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 text-slate-200 font-sans selection:bg-slate-700 selection:text-white">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
           <Experience />
        </div>
        <Skills />
        <div className="bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950">
          <EducationCert />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;