import React from 'react';
import { MessageCircle, Calendar, Star, Shield, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f1f5f9%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Premium Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full text-blue-800 text-sm font-medium mb-8 shadow-lg shadow-blue-100/50">
          <Shield className="w-4 h-4 mr-2" />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
            Atendimento 100% Digital
          </span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-[0.9] tracking-tight">
          Escritório{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            referência nacional
          </span>
          <br />
          em Direito da Saúde
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Atendimento jurídico ágil e digital em todo o Brasil, assegurando seus direitos contra 
          <span className="font-medium text-slate-800"> negativas de cobertura</span>, acesso a 
          <span className="font-medium text-slate-800"> medicamentos e cirurgias de alto custo</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-green-600/25 hover:shadow-2xl hover:shadow-green-600/40 flex items-center">
            <MessageCircle className="w-6 h-6 mr-3" />
            Fale no WhatsApp
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-blue-300 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/30 flex items-center">
            <Calendar className="w-6 h-6 mr-3 text-blue-600" />
            Agendar consultoria
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform text-blue-600" />
          </button>
        </div>
        
        {/* Social Proof */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-slate-600">
          <div className="flex items-center bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <div className="flex text-amber-400 mr-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-slate-800">5.0 no Google</span>
          </div>
          <div className="w-px h-8 bg-slate-300 hidden md:block"></div>
          <div className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <span className="font-semibold text-slate-800">Atuação Nacional</span>
          </div>
          <div className="w-px h-8 bg-slate-300 hidden md:block"></div>
          <div className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <span className="font-semibold text-slate-800">+10 anos de experiência</span>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;