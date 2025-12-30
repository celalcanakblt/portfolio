import React from 'react';
import { Reveal } from './Reveal';
import { SkillItem } from '../types';
import { Code2, Database, Layout, Server, Settings, Terminal } from 'lucide-react';

const skills: SkillItem[] = [
  { name: "Solarwinds (Sistem, DB, App, Servis Monitoring)", level: "EXPERT" },
  { name: "Dynatrace Application Monitoring", level: "EXPERT" },
  { name: "Linux Kernel & Server Management", level: "EXPERT" },
  { name: "Monitoring Tools (Install, Config, Rules)", level: "EXPERT" },
  { name: "Active Directory Policy Config", level: "EXPERT" },
  { name: "SQL (Oracle & PostgreSQL) & DB Operations", level: "EXPERT" }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Teknik Yetkinlikler</h2>
            <div className="h-1 w-20 bg-slate-700 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl hover:border-slate-600 transition-all duration-300 group h-full flex flex-col justify-between">
                <div>
                  <div className="mb-4 text-slate-400 group-hover:text-white transition-colors">
                     {index === 0 ? <Server /> : 
                      index === 1 ? <Layout /> :
                      index === 2 ? <Terminal /> :
                      index === 3 ? <Settings /> :
                      index === 4 ? <Code2 /> : <Database />}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-2">{skill.name}</h3>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-900 flex justify-between items-center">
                    <span className="text-xs text-slate-500 font-mono">SEVİYE</span>
                    <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded">{skill.level}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;