import React from 'react';

const About = () => {
  return (
    <section className="relative w-full bg-[#1c1c1c] text-white flex flex-col items-center overflow-hidden">
      
      {/* 1. CONTEÚDO PRINCIPAL (ABOUT) */}
      <div className="py-20 px-6 w-full flex flex-col items-center">
        {/* Título Superior */}
        <div className="max-w-4xl text-center mb-16 animate-fade-in">
          <p className="font-tenor text-sm md:text-base tracking-[0.2em] leading-relaxed opacity-80 uppercase">
            O DOLT FACE | Dubai Congress é um congresso internacional de alto nível, criado para profissionais da estética que operam com rigor técnico e exigem atualização real, proteção institucional e posicionamento estratégico de longo prazo.
          </p>
        </div>

        {/* GRID DE CARDS COM EFEITO HOVER */}
        <div className="max-w-5xl w-full space-y-4">
          
          {/* Card Principal */}
          <div className="group relative p-10 md:p-16 border border-white/20 bg-transparent transition-all duration-500 hover:border-white/50 hover:bg-white/[0.02] cursor-default">
            <div className="max-w-3xl">
              <h3 className="font-playfair text-xl md:text-2xl mb-6 tracking-wide italic">
                Onde só sobe quem sustenta.
              </h3>
              <p className="font-tenor text-sm md:text-base opacity-70 leading-relaxed mb-8">
                O palco do DOLT FACE é um espaço para profissionais que operam no topo. Nele, ciência, gestão, blindagem fiscal e imagem caminham no mesmo circuito, integradas como pilares de uma liderança madura, segura e preparada para escalar com consistência.
              </p>
              <p className="font-tenor text-sm md:text-base opacity-90 leading-relaxed">
                Tudo o que um líder precisa para <span className="italic font-bold">escalar faturamento, ampliar autoridade e transformar sua clínica</span> em uma operação de alto nível.
              </p>
            </div>
          </div>

          {/* Cards Menores */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group p-8 border border-white/20 text-center flex flex-col items-center justify-center transition-all duration-500 hover:border-white/50 hover:bg-white/[0.02] cursor-default min-h-[160px]">
              <p className="font-tenor text-xs md:text-sm tracking-widest leading-relaxed uppercase">
                <span className="text-white font-bold block mb-1">Tecnologia</span> não é espetáculo. É precisão, domínio técnico e controle.
              </p>
            </div>

            <div className="group p-8 border border-white/20 text-center flex flex-col items-center justify-center transition-all duration-500 hover:border-white/50 hover:bg-white/[0.02] cursor-default min-h-[160px]">
              <p className="font-tenor text-xs md:text-sm tracking-widest leading-relaxed uppercase">
                <span className="text-white font-bold block mb-1">Naturalidade</span> não é simplificação estética. É o resultado direto de excelência.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TRECHO FINAL (DIVISÓRIA DE IMPACTO) */}
      <div className="w-full bg-[#520709] py-16 px-6 border-y-4 border-[#927B59] mt-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-playfair text-2xl md:text-[2.5rem] text-[#e7ca9d] leading-[1.4] tracking-wide italic">
            "O Dolt Face é onde médicos aprendem a cobrar mais, estruturar melhor e escalar suas clínicas."
          </h2>
        </div>
      </div>

    </section>
  );
};

export default About;