import React from 'react';

const CreativeDirectionFull = () => {
  return (
    <section className="w-full bg-[#d1d1d1] pt-12 pb-24 text-black font-tenor">
      
      {/* FRASE SUPERIOR - Centralizada mas com respiro */}
      <div className="w-full text-center mb-12 px-6">
        <p className="text-sm md:text-lg tracking-wider opacity-80">
          A comunicação do DOLT FACE não busca volume. Busca reconhecimento.
        </p>
      </div>

      {/* FAIXA VINHO - EXPANSÃO TOTAL (W-FULL) */}
      <div className="w-full bg-[#520709] py-16 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12 text-white border-y border-[#e7ca9d]/20">
        
        {/* LADO ESQUERDO: TÍTULO E DESCRIÇÃO */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#e7ca9d] italic leading-tight">
            Direção criativa
          </h2>
          <div className="space-y-4">
            <p className="border-l border-[#e7ca9d]/40 text-[#e7ca9d] pl-4 text-base md:text-lg opacity-95 italic">
             A identidade como instrumento de autoridade.
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-85 max-w-xl">
              A direção criativa do DOLT FACE traduz luxo, tecnologia e sofisticação em cada detalhe visual.
            </p>
          </div>
        </div>

        {/* DIVISOR VERTICAL (ESTILIZADO) */}
        <div className="hidden md:block w-[1px] h-40 bg-gradient-to-b from-transparent via-[#e7ca9d]/30 to-transparent" />

        {/* LADO DIREITO: TÓPICOS E IDENTIDADE */}
        <div className="w-full md:w-1/3 space-y-8">
          <h3 className="text-[#e7ca9d] text-sm md:text-base tracking-[0.3em] uppercase">
            Aqui a identidade:
          </h3>
          <ul className="space-y-4 text-base md:text-xl font-light">
            <li className="flex items-center gap-3 tracking-wide">
              <span className="text-[#e7ca9d]"></span> Impõe presença
            </li>
            <li className="flex items-center gap-3 tracking-wide">
              <span className="text-[#e7ca9d]"></span> Sustenta posicionamento
            </li>
            <li className="flex items-center gap-3 tracking-wide">
              <span className="text-[#e7ca9d]"></span> Eleva a percepção de valor
            </li>
          </ul>
        </div>
      </div>

      {/* DIRETRIZ CENTRAL - OCUPANDO LARGURA ESTRATÉGICA */}
      <div className="w-full px-6 mt-16">
        <div className="max-w-7xl mx-auto border border-black/40 p-10 md:p-14 text-center bg-white/30 backdrop-blur-sm">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase leading-loose">
            <span className="font-bold text-black">Diretriz central |</span> O DOLT FACE não disputa atenção. Ele atrai quem já reconhece valor.
          </p>
        </div>
      </div>

    </section>
  );
};

export default CreativeDirectionFull;