import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
            
            <div className="flex flex-col md:flex-row gap-6 mb-8">
                <a href="mailto:celocan93@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    <Mail size={18} />
                    <span>celocan93@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/celal-can-akbulut/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    <Linkedin size={18} />
                    <span>linkedin.com/in/celal-can-akbulut</span>
                </a>
            </div>

            <p className="text-slate-600 text-sm">
                © {new Date().getFullYear()} Celal Can Akbulut. All rights reserved.
            </p>
        </div>
    </footer>
  );
};

export default Footer;