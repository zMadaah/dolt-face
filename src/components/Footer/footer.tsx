"use client";

import React from 'react';

export default function FooterSection() {
  return (
    <footer className="relative w-full bg-[#520709] text-white font-tenor overflow-hidden">
      {/* GRADIENTE DE TRANSIÇÃO SUPERIOR (VINHO PARA PRETO) */}
      <div className="w-full h-32 bg-gradient-to-b from-black to-[#520709]" />

      <div className="max-w-[1400px] mx-auto px-10 md:px-20 pb-16">
        
        {/* BLOCO SUPERIOR: FRASES DE IMPACTO */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 border-b border-white/10 pb-16">
          <div className="max-w-md">
            <p className="text-[11px] md:text-xs tracking-[0.2em] uppercase leading-relaxed opacity-80">
              Autoridade não se constrói com exposição. <br />
              Se constrói com rigor, clareza e visão internacional.
            </p>
          </div>

          <div className="hidden md:block h-12 w-[1px] bg-white/20" />

          <div className="md:text-right">
            <p className="text-[#e7ca9d] text-lg md:text-2xl italic font-playfair mb-2">
              O DOLT FACE não acompanha o mercado.
            </p>
            <p className="text-[#e7ca9d] text-xl md:text-3xl italic font-playfair">
              Ele estabelece o próximo nível.
            </p>
          </div>
        </div>

        {/* BLOCO INFERIOR: LOGOS, SOCIAL E CRÉDITOS */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* REALIZAÇÃO */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <span className="text-[9px] tracking-[0.5em] uppercase opacity-50">Realização:</span>
            <div className="flex items-center gap-10">
              
              {/* LOGO FOOTER COM LINK PARA O SITE */}
              <a 
                href="https://riquissimos-lp.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-opacity duration-300 hover:opacity-70"
              >
                <img 
                  src="/image/logo_footer.png" 
                  alt="Logo Realização" 
                  className="h-10 md:h-14 w-auto object-contain brightness-0 invert opacity-90"
                />
              </a>

              {/* INSTAGRAM ESTRUTURADO E ALINHADO */}
              <a
                href="https://www.instagram.com/riquissimosoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-2 transition-transform duration-300 hover:scale-110"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26" height="26"
                    viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2"
                    className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                
              </a>
            </div>
          </div>

          {/* DIREÇÃO E CONCEITO */}
          <div className="flex flex-col items-center md:items-end gap-3 md:text-right max-w-sm">
            <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-60">
              Direção de branding, experiência e posicionamento para projetos que exigem excelência absoluta.
            </p>
            <p className="text-xs md:text-sm italic opacity-90">
              "Quando há direção, a marca não precisa explicar. Ela se impõe."
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}