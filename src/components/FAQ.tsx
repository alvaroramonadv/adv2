import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'Como funciona a ação contra plano de saúde?',
      answer: 'Iniciamos com análise do seu caso e documentos. Caso identifiquemos direito violado, protocolamos ação judicial buscando liminar para autorização imediata do procedimento ou medicamento.'
    },
    {
      question: 'O que é uma liminar?',
      answer: 'É uma decisão judicial provisória que determina ao plano de saúde ou SUS que autorize imediatamente o tratamento, antes mesmo do julgamento final do processo.'
    },
    {
      question: 'Devo processar o SUS ou o plano de saúde?',
      answer: 'Depende do seu caso. Se você possui plano de saúde, geralmente processamos a operadora. Para casos específicos do SUS, acionamos o poder público. Nossa equipe analisa qual estratégia é mais adequada.'
    },
    {
      question: 'O plano pode me retaliar se eu processá-lo?',
      answer: 'Não. É proibido por lei qualquer tipo de retaliação. Caso isso ocorra, constitui nova violação que pode gerar indenização adicional.'
    },
    {
      question: 'Quanto tempo demora para conseguir a autorização?',
      answer: 'Em casos urgentes, podemos obter liminar em 24 a 48 horas. Casos não urgentes podem levar de 7 a 30 dias, dependendo da complexidade.'
    },
    {
      question: 'Posso ser atendido à distância?',
      answer: 'Sim, nosso atendimento é 100% digital. Atendemos clientes em todo o Brasil através de videochamadas, WhatsApp e e-mail.'
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30"></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            Perguntas Frequentes
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Esclarecemos suas{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              principais dúvidas
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            sobre Direito da Saúde
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-300">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left bg-white/50 hover:bg-blue-50/50 transition-all duration-300 flex items-center justify-between group"
                >
                  <span className="font-bold text-slate-900 text-lg pr-4 group-hover:text-blue-600 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                        <Minus className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 hover:from-blue-500 hover:to-indigo-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl">
                        <Plus className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-8 py-6 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border-t border-blue-100">
                    <p className="text-slate-700 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA at bottom */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-3xl shadow-2xl shadow-blue-600/25">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Fale conosco e receba orientação personalizada sobre seu caso
            </p>
            <button className="bg-white hover:bg-slate-50 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Falar com especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;