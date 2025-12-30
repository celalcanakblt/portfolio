import React from 'react';
import { Reveal } from './Reveal';
import { Award, BookOpen, GraduationCap, Languages } from 'lucide-react';
import { EducationItem, CertificateItem, LanguageItem } from '../types';

const education: EducationItem[] = [
  {
    school: "Sinop Üniversitesi",
    department: "Bilgisayar Programcılığı - Örgün Öğretim",
    period: "2019 - 2022",
    location: "Sinop, Türkiye"
  },
  {
    school: "Siedlce University",
    department: "Computer Sciences Department - Exchange Student",
    period: "2020 - 2021",
    location: "Warsaw, Poland"
  }
];

const certificates: CertificateItem[] = [
  {
    title: "Introduction to DevOps and Site Reliability Engineering (LFS162)",
    issuer: "Linux Foundation",
    date: "Kasım 2024",
    description: "DevOps & SRE temelleri, Bulut Bilişim, Container Yapısı, Kubernetes ve Software Deployment."
  },
  {
    title: "Introduction to LINUX (LFS101)",
    issuer: "Linux Foundation",
    date: "Kasım 2024",
    description: "Linux sistem yapısı, kullanıcı grupları, paket yönetimi."
  },
  {
    title: "App Developing With Python (+200 Saat)",
    issuer: "BilgeAdam Academy",
    date: "Haziran 2024",
    description: "Veri Tabanı işlemleri, Web Geliştirme, Yapay Zeka, Veri Bilimi."
  },
  {
    title: "Bilgi Güvenliği Yönetim Sistemi",
    issuer: "BTK Akademi",
    date: "Şubat 2024",
    description: "ISO27001 standardı gereksinimleri ve bilgi güvenliği yönetim sistemi kurulumu."
  }
];

const languages: LanguageItem[] = [
  { language: "İngilizce", speaking: "C1 Level", writing: "C1 Level" }
];

const EducationCert: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Education & Language */}
        <div>
          <Reveal>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <GraduationCap className="text-slate-500" /> Eğitim
              </h2>
              <div className="space-y-8 border-l border-slate-800 pl-8 ml-3 relative">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-slate-600"></span>
                    <h3 className="text-xl font-bold text-slate-200">{edu.school}</h3>
                    <p className="text-slate-400 text-lg">{edu.department}</p>
                    <div className="flex gap-4 mt-2 text-sm text-slate-500 font-mono">
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Languages className="text-slate-500" /> Yabancı Dil
              </h2>
              {languages.map((lang, idx) => (
                <div key={idx} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                  <h3 className="text-xl font-bold text-white mb-4">{lang.language}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-950 p-3 rounded text-center border border-slate-800">
                      <div className="text-xs text-slate-500 mb-1">KONUŞMA</div>
                      <div className="font-bold text-slate-200">{lang.speaking}</div>
                    </div>
                    <div className="bg-slate-950 p-3 rounded text-center border border-slate-800">
                      <div className="text-xs text-slate-500 mb-1">YAZMA</div>
                      <div className="font-bold text-slate-200">{lang.writing}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right Column: Certificates */}
        <div>
          <Reveal delay={100}>
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="text-slate-500" /> Sertifikalar
              </h2>
              <div className="space-y-6">
                {certificates.map((cert, idx) => (
                  <div key={idx} className="bg-slate-900 p-6 rounded-xl border-l-4 border-slate-600 hover:bg-slate-800 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-slate-200 pr-4">{cert.title}</h3>
                        <span className="text-xs font-mono text-slate-500 whitespace-nowrap">{cert.date}</span>
                    </div>
                    <p className="text-sm text-slate-400 font-semibold mb-2">{cert.issuer}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default EducationCert;
