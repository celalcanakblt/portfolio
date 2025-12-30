import React from 'react';
import { Reveal } from './Reveal';
import { Briefcase, CheckCircle2, Calendar } from 'lucide-react';
import { ExperienceItem } from '../types';

const currentProjects: ExperienceItem[] = [
  {
    id: "kocsistem",
    company: "KOÇ SİSTEM",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWRATjxWc66KTeCAcJOADjLFMA23iXxdMuQ&s",
    role: "L1 & L2 Sistem İzleme ve Destek Uzmanı",
    description: "İletişim Ağları İzleme ve Destek Uzmanı",
    details: [
      "Koç Sistem organizasyonu altındaki müşterilerin Server, Database, Sanal Makine, KVM ve Network durumlarının izlenmesi ve alertlerin çözüme kavuşturulması.",
      "Unix ve Windows sistemlerde Kaynak kullanımı, Servis & Hizmet takibi ve optimizasyonu.",
      "Database / Backup sunucularında problemlerin analizi. NetBackup üzerinden backup policy oluşturulması.",
      "Network tabanlı alertlerde (Network kartı, DHCP, Statik IP) kontrollerin sağlanması ve yapılandırılması.",
      "Oracle sistemlerde DB kullanıcı problemlerinin çözümü ve raporlanması."
    ]
  },
  {
    id: "mercedes",
    company: "MERCEDES-BENZ",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mercedes-Benz_Logo_2010.svg/1280px-Mercedes-Benz_Logo_2010.svg.png",
    role: "L1 SAP / ERP Sistem İzleme",
    description: "SAP / ERP System Monitoring",
    details: [
      "Canlı SAP Sistemlerinin izlenmesi, raporlanması, ticket açılması ve ilgili ekiplere atanması.",
      "Axway API Yönetimi ve File Transfer Sistemi (Flow) izleme ortamının takibi.",
      "SAP GUI üzerinden PROD, QA, DEV, TEST sistemlerinin T-CODE'lar ile izlenmesi.",
      "SAP Sistemlerinde DIA & BGD Process Kaynak takibi, Job takibi ve Update işlemlerinin takibi."
    ]
  },
  {
    id: "trsigorta",
    company: "TÜRKİYE SİGORTA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/T%C3%BCrkiye_Sigorta_logo.svg/2560px-T%C3%BCrkiye_Sigorta_logo.svg.png",
    role: "L1 ODI, DWH, System & Network İzleme",
    description: "DWH, ODI, Solarwinds, Zabbix Monitoring",
    details: [
      "DWH, ODI (Büyük Data, Data Warehouse) ortamlarının ve veri transferlerinin izlenmesi.",
      "Solarwinds, Zabbix, IBM INSTANA üzerinden Database, Prod, Linux sistem kaynaklarının izlenmesi.",
      "RAM, DISK, CPU, Response Time threshold'larının düzenlenmesi ve yenilerinin belirlenmesi.",
      "Solarwinds üzerinde alert tanımlanması, ajan kurulumu, alert kurallarının yazılması."
    ]
  },
  {
    id: "magdeburger",
    company: "MAGDEBURGER SİGORTA",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWRATjxWc66KTeCAcJOADjLFMA23iXxdMuQ&s",
    role: "L1 Sistem İzleme",
    description: "Kubernetes, Zabbix, System Resources",
    details: [
      "Kubernetes ve System Resources izleme süreçlerinin yürütülmesi."
    ]
  }
];

const pastExperience: ExperienceItem = {
    id: "arcelik",
    company: "ARÇELİK GLOBAL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ar%C3%A7elik_logo.svg/2560px-Ar%C3%A7elik_logo.svg.png",
    role: "System Monitoring Specialist",
    period: "Haziran 2022 - Haziran 2024",
    description: "Geçmiş Profesyonel Deneyim",
    details: [
      "SNMP, WML, ICMP protokolleri ile Windows, Linux, Switch ve SD-WAN cihazlarının izleme sistemine eklenmesi.",
      "Database, Server ve Node'ların RAM, CPU, Disk, Up/Down durumlarının takibi.",
      "Alert tanımlarının oluşturulması, scriptlerin düzenlenmesi ve threshold takibi.",
      "Root cause analizi yaparak alert sebeplerinin çözüme kavuşturulması.",
      "En çok alert üreten node'ların tespiti ve raporlanması.",
      "Dynatrace ile uygulama kaynak kodu ve veritabanı sorgularının dinamik izlenmesi.",
      "API sistemlerinin kullanılabilirliği ve bağımlılıklarının analizi."
    ]
};

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
  <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-xl hover:border-slate-600 transition-colors duration-300 mb-8">
    <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-6">
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.company}</h3>
        <p className="text-slate-400 font-medium text-lg">{item.role}</p>
        
        {item.period && (
            <div className="flex items-center gap-2 mt-2 text-slate-500 font-mono text-sm bg-slate-800/50 w-fit px-2 py-1 rounded">
                <Calendar size={14} />
                <span>{item.period}</span>
            </div>
        )}

        {item.description && <p className="text-slate-500 text-sm mt-3">{item.description}</p>}
      </div>
      
      {item.logo ? (
        <div className="p-4 bg-white rounded-xl flex items-center justify-center shrink-0 md:w-48 w-full h-24">
            <img 
              src={item.logo} 
              alt={`${item.company} Logo`} 
              className="h-full w-auto object-contain max-w-full"
            />
        </div>
      ) : (
        <div className="p-3 bg-slate-800 rounded-lg self-start shrink-0">
          <Briefcase size={24} className="text-slate-400" />
        </div>
      )}
    </div>
    <ul className="space-y-3">
      {item.details.map((detail, index) => (
        <li key={index} className="flex items-start gap-3 text-slate-300">
          <CheckCircle2 size={18} className="text-slate-600 mt-1 flex-shrink-0" />
          <span className="text-sm md:text-base leading-relaxed">{detail}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <Reveal>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Profesyonel Deneyim</h2>
          <div className="h-1 w-20 bg-slate-700 rounded-full"></div>
        </div>
      </Reveal>

      {/* Current Role Wrapper */}
      <Reveal delay={200}>
        <div className="mb-12">
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 mb-12 text-center shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50"></div>
                <div className="flex flex-col items-center gap-4 relative z-10">
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-white/10 text-slate-300 uppercase tracking-widest border border-slate-600/50 backdrop-blur-sm flex flex-col md:flex-row items-center gap-1 md:gap-3">
                        <span>VENHANCER (Dış Kaynak)</span>
                        <span className="hidden md:inline text-slate-500">|</span>
                        <span className="text-blue-400">Temmuz 2024 - Günümüz</span>
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase leading-tight drop-shadow-sm">
                        Aktif Olarak Görev Yaptığım <br className="hidden md:block"/> Projeler Aşağıdaki Gibidir
                    </h3>
                    <p className="text-slate-400 max-w-2xl mx-auto mt-2">
                        Şu anda Venhancer çalışanı olarak Dış Kaynak rolüyle Türkiye'nin önde gelen şirketlerinde tam zamanlı olarak görev almaktayım.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {currentProjects.map((project, idx) => (
                     <ExperienceCard key={project.id} item={project} />
                ))}
            </div>
        </div>
      </Reveal>

      {/* Past Experience */}
      <Reveal delay={300}>
        <div className="mt-24">
            <div className="flex items-center justify-center mb-12 relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-slate-800"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-slate-950 px-8 py-3 rounded-xl text-3xl md:text-4xl font-bold text-slate-200 uppercase tracking-tight">
                        Geçmiş Deneyim
                    </span>
                </div>
            </div>
            <ExperienceCard item={pastExperience} />
        </div>
      </Reveal>

    </section>
  );
};

export default Experience;