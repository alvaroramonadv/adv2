import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria S.',
      location: 'São Paulo, SP',
      text: 'Consegui autorização para cirurgia cardíaca que o plano negava há meses. Atendimento profissional e resultado rápido.',
      rating: 5,
      avatar: 'M',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'João P.',
      location: 'Rio de Janeiro, RJ',
      text: 'Medicamento de alto custo liberado pelo SUS em 15 dias. Equipe muito competente e atenciosa.',
      rating: 5,
      avatar: 'J',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Ana C.',
      location: 'Belo Horizonte, MG',
      text: 'Reembolso integral de tratamento oncológico. Acompanhamento constante durante todo o processo.',
      rating: 5,
      avatar: 'A',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 rounded-full text-sm font-medium mb-6">
            Depoimentos de Clientes
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Avaliação{' '}
            <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
              5 ★ no Google
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Veja o que nossos clientes dizem
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-500 transform hover:-translate-y-2 border border-white/50 hover:border-blue-200/50 h-full">
                {/* Rating Stars */}
                <div className="flex items-center mb-6">
                  <div className="flex text-amber-400 mr-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-slate-600">5.0</span>
                </div>
                
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-blue-600/20 mb-6" />
                
                {/* Testimonial Text */}
                <p className="text-slate-700 mb-8 leading-relaxed italic text-lg">
                  "{testimonial.text}"
                </p>
                
                {/* Client Info */}
                <div className="flex items-center">
                  <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg">{testimonial.name}</div>
                    <div className="text-slate-500 text-sm">{testimonial.location}</div>
                  </div>
                </div>
                
                {/* Verified Badge */}
                <div className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  Verificado
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl`}></div>
            </div>
          ))}
        </div>
        
        {/* Google Reviews CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
            <div className="flex text-amber-400 mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-slate-900">+200 avaliações</div>
              <div className="text-slate-600 text-sm">no Google Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;