import React from 'react';

const StrategicDifference = () => {
  const leftItems = [
    "Médicos e dentistas em nível de excelência",
    "Visão cirúrgica avançada",
    "Gestão clínica com inteligência artificial",
    "Auditoria clínica e tributária"
  ];

  const rightItems = [
    "Compliance sanitário",
    "Estratégias de venda high-ticket",
    "Imagem pessoal como ferramenta de autoridade",
    "Experiência de luxo e networking decisório"
  ];

  return (
    <section className="w-full font-tenor">
      {/* SEÇÃO PRINCIPAL - DIFERENCIAL ESTRATÉGICO */}
      <div className="bg-[#520709] py-24 px-6 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#e7ca9d] italic mb-4">
            Diferencial Estratégico
          </h2>
          <p className="text-sm md:text-lg opacity-80 mb-16 tracking-wide">
            O que não se encontra reunido em outro lugar
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {/* COLUNA ESQUERDA */}
            <div className="space-y-4">
              {leftItems.map((item, index) => (
                <div 
                  key={index} 
                  className="group border border-white/10 bg-black/10 p-6 flex items-center gap-4 transition-all duration-500 hover:border-[#C5A267] hover:bg-black/20"
                >
                  <span className="text-[#C5A267] text-lg">›</span>
                  <p className="text-xs md:text-sm tracking-widest uppercase opacity-90">{item}</p>
                </div>
              ))}
            </div>

            {/* COLUNA DIREITA */}
            <div className="space-y-4">
              {rightItems.map((item, index) => (
                <div 
                  key={index} 
                  className="group border border-white/10 bg-black/10 p-6 flex items-center gap-4 transition-all duration-500 hover:border-[#C5A267] hover:bg-black/20"
                >
                  <span className="text-[#C5A267] text-lg">›</span>
                  <p className="text-xs md:text-sm tracking-widest uppercase opacity-90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RODAPÉ DE IMPACTO */}
      <div className="w-full bg-[#1c1c1c] py-20 px-6 border-t border-[#C5A267]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-playfair text-2xl md:text-[2.5rem] text-[#e7ca9d] italic leading-tight tracking-wide">
            "Quem entende, permanece. Quem decide, avança."
          </h3>
        </div>
      </div>
    </section>
  );
};

export default StrategicDifference;