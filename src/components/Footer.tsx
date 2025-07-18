import React from 'react';
import { Scale, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23334155%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <Scale className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Escritório de Advocacia</h3>
            </div>
            <p className="text-slate-300 mb-8 leading-relaxed text-lg">
              Especialistas em Direito da Saúde com atuação nacional. 
              Defendemos seus direitos com experiência e dedicação.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center text-slate-300 hover:text-white transition-colors duration-300">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center mr-3">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg">(85) 3456-7890</span>
              </div>
              <div className="flex items-center text-slate-300 hover:text-white transition-colors duration-300">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center mr-3">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">contato@escritorio.com.br</span>
              </div>
              <div className="flex items-center text-slate-300 hover:text-white transition-colors duration-300">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center mr-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-lg">Aldeota, Fortaleza - CE</span>
              </div>
            </div>
          </div>
          
          {/* Practice Areas */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Áreas de Atuação</h4>
            <ul className="space-y-3">
              {[
                'Plano de Saúde',
                'SUS',
                'Erro Médico',
                'Medicamentos Alto Custo',
                'Liminar Urgente',
                'Reajuste Abusivo'
              ].map((area, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                    <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                'Sobre Nós',
                'Contato',
                'Blog',
                'Política de Privacidade',
                'Termos de Uso',
                'LGPD'
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                    <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Ethical Notice */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-900 p-6 rounded-2xl mb-8 border border-amber-200">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <span className="text-white text-xs font-bold">!</span>
              </div>
              <div>
                <p className="font-semibold mb-2">Aviso Ético:</p>
                <p className="text-sm leading-relaxed">
                  Página institucional mantida em observância ao Código de Ética da OAB. 
                  Não fazemos promessas de resultado. Os resultados dependem de diversos fatores e particularidades 
                  de cada caso específico.
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <p>&copy; 2024 Escritório de Advocacia. Todos os direitos reservados.</p>
            <div className="flex items-center mt-4 md:mt-0 space-x-6">
              <span className="bg-slate-700 px-3 py-1 rounded-full">OAB/CE 12345</span>
              <span className="bg-slate-700 px-3 py-1 rounded-full">CNPJ: 12.345.678/0001-90</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;