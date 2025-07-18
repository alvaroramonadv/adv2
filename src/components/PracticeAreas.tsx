import React from 'react';
import { Heart, Shield, AlertCircle, Pill, Clock, TrendingUp, Stethoscope, FileText } from 'lucide-react';

const PracticeAreas = () => {
  const areas = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Plano de Saúde',
      description: 'Negativas de cobertura, reembolsos e autorizações para procedimentos médicos',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'SUS',
      description: 'Acesso a medicamentos e cirurgias pelo Sistema Único de Saúde',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Erro Médico',
      description: 'Indenizações por negligência, imperícia ou imprudência médica',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: 'Medicamentos de Alto Custo',
      description: 'Acesso a medicamentos especiais e tratamentos oncológicos',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Liminar Urgente',
      description: 'Decisões judiciais rápidas para casos que não podem esperar',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Reajuste Abusivo',
      description: 'Contestação de aumentos irregulares nas mensalidades',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: 'Doenças Raras',
      description: 'Garantia de tratamento especializado para condições específicas',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Ressarcimento',
      description: 'Recuperação de valores pagos indevidamente por procedimentos',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            Áreas de Atuação
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Equipe{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              especializada
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            em planos de saúde, SUS e erro médico com mais de 10 anos de experiência
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/50 transition-all duration-500 transform hover:-translate-y-1 border border-white/50 hover:border-white/80 h-full">
                {/* Icon with Gradient Background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {area.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {area.description}
                </p>
                
                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${area.color} w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;