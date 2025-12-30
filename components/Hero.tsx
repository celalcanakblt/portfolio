import React from 'react';
import { Reveal } from './Reveal';
import { ArrowDown, Linkedin, Mail, Server } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-slate-800 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-slate-700 rounded-full blur-[120px] opacity-10"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-700 text-slate-400 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for New Opportunities
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Celal Can <span className="text-slate-500">Akbulut</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-slate-300 font-light mb-8">
            <Server size={24} className="text-slate-500" />
            <span>System Monitoring</span>
            <span className="text-slate-600">/</span>
            <span>Support Specialist</span>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Linux, Windows, Oracle, ODI ve DWH sistemlerinde uzmanlaşmış; 
            Büyük ölçekli (Sigorta, Finans, Lojistik) şirketlerin sunucu altyapılarında 
            problem çözümü, kök neden analizi ve operasyonel süreklilik sağlayan deneyimli sistem uzmanı.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="flex flex-wrap justify-center gap-4">
             <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({behavior: 'smooth'})}
                className="px-8 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
             >
               Deneyimlerim
             </button>
             <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/celal-can-akbulut/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:celocan93@gmail.com" className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all">
                  <Mail size={20} />
                </a>
             </div>
          </div>
        </Reveal>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-600">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;