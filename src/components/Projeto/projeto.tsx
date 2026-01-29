import React from 'react';

const ProjectArchitecture = () => {
  const archetypes = [
    {
      title: "SÁBIO",
      description: "Conhecimento validado. Ciência atualizada. Autoridade baseada em dados e fatos."
    },
    {
      title: "GOVERNANTE",
      description: "Estrutura e ordem. Padrão elevado. Posicionamento institucional e liderança."
    },
    {
      title: "CRIADOR TÉCNICO",
      description: "Inovação aplicada. Tecnologia como ferramenta de precisão. Experiência desenhada com intenção."
    }
  ];

  const galleryImages = [
    "/image/detalhe1.png", 
    "/image/detalhe3.png",
    "/image/detalhe2.png",
  ];

  return (
    <section className="w-full bg-[#d1d1d1] pt-24 pb-0 text-black">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* CABEÇALHO */}
        <div className="mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl mb-6">
            Arquitetura do projeto
          </h2>
          <p className="font-tenor text-sm md:text-base max-w-2xl leading-relaxed opacity-80">
            É uma comunicação que sustenta autoridade, constrói diferenciação e organiza percepção, sempre com critério, clareza e intenção.
          </p>
        </div>

        {/* INTRODUÇÃO ARQUÉTIPOS */}
        <div className="text-center mb-12">
          <p className="font-tenor text-[10px] md:text-xs tracking-[0.2em] uppercase max-w-2xl mx-auto opacity-70">
            A identidade do DOLT FACE é sustentada por três arquétipos aplicados de forma racional, estratégica e baseada em neurociência, não simbólica.
          </p>
        </div>

        {/* CARDS DOS ARQUÉTIPOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {archetypes.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#bababa] p-8 min-h-[180px] flex flex-col justify-center transition-all duration-500 hover:shadow-lg"
            >
              <h3 className="font-tenor text-sm tracking-[0.2em] mb-4 uppercase font-bold">
                {item.title}
              </h3>
              <p className="font-tenor text-xs md:text-sm leading-relaxed opacity-80">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* FRASE DE FECHAMENTO */}
        <div className="text-center mb-20">
          <p className="font-tenor text-xs md:text-sm tracking-widest italic opacity-70">
            Essa combinação sustenta a percepção de autoridade, confiança e alto valor do congresso.
          </p>
        </div>
      </div>

      {/* GALERIA FINAL (SEM PADDING PARA ENCOSTAR NAS BORDAS) */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full h-[300px] md:h-[450px]">
        {galleryImages.map((src, index) => (
          <div key={index} className="relative overflow-hidden group">
            <img 
              src={src} 
              alt={`Detalhe do projeto ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay sutil para elegância */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectArchitecture;