import React from 'react';
import { Zap, Users, Globe, ArrowRight } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Zap className="w-10 h-10 text-blue-600" />,
      title: 'Rapidez',
      description: 'Atendimento ágil com análise documental em 24h e protocolo de ações urgentes',
      highlight: '24h'
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: 'Especialização',
      description: 'Equipe dedicada exclusivamente ao Direito da Saúde com experiência comprovada',
      highlight: '+10 anos'
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-600" />,
      title: 'Atuação Nacional',
      description: 'Atendimento 100% digital em todo o Brasil, sem necessidade de deslocamento',
      highlight: 'Todo Brasil'
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            Por que nos escolher?
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Garantimos medicamentos,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              cirurgias e terapias
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            quando o plano ou SUS nega seus direitos
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 hover:border-blue-200">
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {benefit.highlight}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{benefit.description}</p>
                
                {/* Hover Arrow */}
                <div className="flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span className="mr-2">Saiba mais</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;