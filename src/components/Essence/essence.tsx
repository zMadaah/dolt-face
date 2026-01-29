import Image from 'next/image';

export default function Essence() {
  return (
    <section className="relative min-h-screen w-full bg-[#1c1c1c] pt-16 pb-20 overflow-hidden flex flex-col items-center">
      
      {/* CAMADA 1: FUNDO IMERSIVO */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/bg_essence.jpg"
          alt="Background"
          fill
          className="object-cover opacity-30 transition-transform duration-[10s] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1c] via-transparent to-[#1c1c1c]" />
      </div>

      {/* CAMADA 2: CONTEÚDO ESTRUTURADO */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 w-full flex flex-col items-center">
        
        {/* Título Superior Centralizado */}
        <div className="text-center mb-10 md:mb-20">
          <h2 className="font-playfair text-3xl md:text-6xl text-[#E7CA9D] uppercase tracking-[0.2em] mb-4 drop-shadow-2xl italic">
            A Essência do Dolt Face
          </h2>
          <div className="h-[1px] w-24 bg-[#927B59] mx-auto mb-6" />
          <p className="font-tenor text-white/80 max-w-xl mx-auto leading-relaxed text-xs md:text-base uppercase tracking-widest">
            Onde <span className="text-[#E7CA9D] font-bold">medicina</span> e <span className="text-[#E7CA9D] font-bold">odontologia</span> se encontram.
          </p>
        </div>

        {/* GRID DE 3 COLUNAS COM REORDENAÇÃO MOBILE */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-10 md:gap-16 items-center w-full">
          
          {/* COLUNA ESQUERDA - Ordem 1 (Top Mobile) */}
          <div className="order-1 lg:order-1 space-y-6 md:space-y-10 flex flex-col items-center lg:items-end z-30">
            {[
              "O Dolt Face existe para unir especialidades, passar pela vigilância e elevar o seu ticket sem medo.",
              "Aqui, a atuação é estruturada e consciente, alinhada às diretrizes institucionais, permitindo segurança e autoridade."
            ].map((text, i) => (
              <div key={i} className="group relative p-8 border border-white/10 bg-[#1c1c1c]/60 backdrop-blur-md 
                                     transition-all duration-500 hover:border-[#927B59] hover:bg-white/[0.02] cursor-default
                                     max-w-sm w-full lg:text-right">
                <p className="font-tenor text-sm md:text-base text-white/70 group-hover:text-white transition-colors leading-relaxed">
                  {text}
                </p>
                <div className="absolute bottom-0 right-0 w-0 h-[1px] bg-[#927B59] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>

          {/* COLUNA DIREITA - Ordem 2 (Meio Mobile) */}
          <div className="order-2 lg:order-3 space-y-6 md:space-y-10 flex flex-col items-center lg:items-start z-30">
            <div className="group relative p-8 border border-white/10 bg-[#1c1c1c]/60 backdrop-blur-md 
                                transition-all duration-500 hover:border-[#927B59] hover:bg-white/[0.02] cursor-default
                                max-w-sm w-full text-left">
              <p className="font-tenor text-sm md:text-base text-white/70 group-hover:text-white transition-colors leading-relaxed">
                O DOLT FACE é um congresso de alto padrão, guiado por ciência atualizada, tecnologia aplicada e visão internacional.
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#927B59] transition-all duration-500 group-hover:w-full" />
            </div>

            {/* Box Especial Vinho/Dourado */}
            <div className="group relative p-8 border border-[#927B59]/30 bg-[#520709]/20 backdrop-blur-xl 
                                transition-all duration-500 hover:border-[#E7CA9D] hover:shadow-[0_0_40px_rgba(82,7,9,0.3)] cursor-default
                                max-w-sm w-full text-left">
              <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#E7CA9D]/80 group-hover:text-[#E7CA9D] leading-loose transition-colors font-tenor">
                Ciência. Gestão. Blindagem jurídica.<br />
                Imagem. Mentalidade. Autoridade.<br />
                <span className="text-[#E7CA9D] font-bold border-b border-[#927B59]/50 pb-1">Tudo no mesmo circuito.</span>
              </p>
            </div>
          </div>

          {/* COLUNA CENTRAL - Luxury Card - Ordem 3 (Base Mobile) */}
          <div className="order-3 lg:order-2 relative flex justify-center items-center z-20 mt-12 lg:mt-0">
            {/* Moldura de Card de Luxo */}
            <div className="relative w-full max-w-[320px] md:max-w-[420px] aspect-[3/4.2] rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md p-3 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9)] overflow-hidden group">
              
              {/* Borda Dourada Interna Suave */}
              <div className="absolute inset-0 border border-[#927B59]/20 rounded-2xl pointer-events-none z-10" />
              
              {/* Container da Imagem Woman_Card */}
              <div className="relative w-full h-full overflow-hidden rounded-xl bg-[#131313]">
                <Image
                  src="/image/woman_card.png"
                  alt="Woman Essence Luxury Card"
                  fill
                  className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                  priority
                />
                
                {/* Vinheta de Integração do Card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-transparent to-black/20 opacity-80" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}