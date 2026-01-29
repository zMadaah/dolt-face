import React from 'react';

const Sponsorship = () => {
  const audienceCards = [
    "Donos e gestores de clínicas",
    "Líderes regionais e formadores de opinião",
    "Profissionais high-ticket em processo de expansão"
  ];

  const decisionCriteria = [
    "Domínio sobre auditoria, tributação e gestão financeira",
    "Uso de IA aplicada à gestão, performance e tomada de decisão",
    "Critério para decisões de compra e escolha de fornecedores",
    "Modelos que permitam escalar a clínica com autonomia e liberdade operacional"
  ];

  const strategicReasons = [
    "Compram em alto volume",
    "Investem continuamente em tecnologia e inovação",
    "Contratam sistemas, equipamentos e serviços recorrentes",
    "Trocam de fornecedores por performance e resultado",
    "Influenciam outros profissionais e lideram equipes inteiras"
  ];

  return (
    <section className="w-full bg-[#1c1c1c] text-white overflow-hidden flex flex-col items-center">
      
      {/* CONTEÚDO PRINCIPAL (PADDING SUPERIOR) */}
      <div className="max-w-6xl mx-auto py-24 px-6 flex flex-col items-center">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-16 max-w-4xl">
          <h2 className="font-playfair text-3xl md:text-5xl text-[#e7ca9d] mb-8 italic">
            Por que ser um patrocinador Dolt Face:
          </h2>
          <p className="font-tenor text-sm md:text-lg leading-relaxed opacity-80 tracking-wide">
            O Dolt Face reúne um público estratégico, formado por profissionais que não apenas consomem soluções, mas decidem, investem e escalam. Patrocinar o Dolt Face é acessar diretamente quem opera no topo da cadeia decisória da estética médica e odontológica.
          </p>
        </div>

        {/* QUEM ESTARÁ NA PLATEIA - GRID */}
        <div className="w-full mb-12 text-center">
          <h3 className="font-playfair text-2xl text-[#e7ca9d] mb-10 italic">
            Quem estará na plateia:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audienceCards.map((item, index) => (
              <div key={index} className="group p-8 border border-white/10 bg-black/20 transition-all duration-500 hover:border-[#C5A267] hover:shadow-[0_0_20px_rgba(197,162,103,0.1)] flex items-center justify-center min-h-[120px]">
                <div className="flex items-center gap-4 text-left">
                  <span className="text-[#C5A267] font-bold text-lg">›</span>
                  <p className="font-tenor text-xs md:text-sm uppercase tracking-widest leading-snug">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LISTAS DE CRITÉRIOS */}
        <div className="w-full max-w-4xl mb-20">
          <div className="space-y-4">
            <div className="group p-6 border border-white/10 bg-black/20 transition-all duration-500 hover:border-[#C5A267] flex items-center gap-6">
              <span className="text-[#C5A267] text-xl">›</span>
              <p className="font-tenor text-sm md:text-base tracking-widest uppercase opacity-90">Integração legal e operacional entre médico e dentista na mesma estrutura</p>
            </div>
            <div className="group p-6 border border-white/10 bg-black/20 transition-all duration-500 hover:border-[#C5A267] flex items-center gap-6">
              <span className="text-[#C5A267] text-xl">›</span>
              <p className="font-tenor text-sm md:text-base tracking-widest uppercase opacity-90">Compliance sanitário e blindagem institucional</p>
            </div>
            {decisionCriteria.map((item, index) => (
              <div key={index} className="group p-6 border border-white/10 bg-black/20 transition-all duration-500 hover:border-[#C5A267] flex items-center gap-6">
                <span className="text-[#C5A267] text-xl">›</span>
                <p className="font-tenor text-sm md:text-base tracking-widest uppercase opacity-90">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEÇÃO ESTRATÉGICA FINAL */}
        <div className="w-full max-w-4xl text-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#e7ca9d] mb-6 italic">
            Por que esse público é estratégico para patrocinadores:
          </h2>
          <p className="font-tenor text-sm md:text-lg opacity-70 tracking-widest uppercase mb-12">
            Médicos e dentistas presentes no Dolt Face:
          </p>
          <div className="space-y-4 mb-20">
            {strategicReasons.map((item, index) => (
              <div key={index} className="group p-6 border border-white/10 bg-black/20 transition-all duration-500 hover:border-[#C5A267] flex items-center gap-6">
                <span className="text-[#C5A267] text-xl group-hover:translate-x-2 transition-transform">›</span>
                <p className="font-tenor text-sm md:text-base tracking-widest uppercase opacity-90">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 1. TEXTO DE QUALIFICAÇÃO (Fundo Grafite) */}
        <div className="max-w-4xl text-center py-12 border-t border-white/5">
          <p className="font-tenor text-base md:text-xl leading-relaxed opacity-90 tracking-wide italic">
            "É um público com capital, poder de decisão e comportamento de compra ativo. Não são curiosos. São compradores qualificados, preparados para investir em soluções que sustentem crescimento, segurança e posicionamento."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;