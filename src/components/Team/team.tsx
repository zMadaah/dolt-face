"use client";

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function FinalSection() {
  const [showCards, setShowCards] = useState(false);

  return (
    <section className="relative w-full font-tenor text-white overflow-hidden bg-black">
      
      {/* SEÇÃO 1: IMAGEM E CONTEÚDO SUPERIOR */}
      <div className="relative w-full min-h-[750px] md:min-h-[600px] flex flex-col items-center justify-start pt-12 pb-20 px-6">
        
        {/* IMAGEM DE FUNDO */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/image/socios.png" 
            alt="Liderança Dolt Face" 
            className="w-full h-full object-cover object-top md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90 md:from-black/40 md:to-black/80" />
        </div>

        {/* TÍTULO CENTRALIZADO */}
        <div className="relative z-10 text-center space-y-2 mb-10 md:mb-16">
          <p className="text-[#e7ca9d] text-[10px] md:text-xs tracking-[0.5em] uppercase opacity-80">
            Sobre Nós
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl text-[#e7ca9d] italic leading-tight">
            Liderança que sustenta a visão
          </h2>
        </div>

        {/* BOTÃO SAIBA MAIS (VISÍVEL APENAS NO MOBILE) */}
        {!showCards && (
          <button 
            onClick={() => setShowCards(true)}
            className="md:hidden relative z-20 mt-4 flex items-center gap-3 px-8 py-3 border border-[#e7ca9d]/40 bg-black/40 backdrop-blur-md rounded-full text-[#e7ca9d] text-xs uppercase tracking-[0.2em] transition-all active:scale-95"
          >
            <Plus size={14} />
            Saiba Mais
          </button>
        )}

        {/* CONTAINER DE TEXTOS: CARDS REVELADOS OU COLUNAS DESKTOP */}
        <div className={`relative z-10 w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-stretch md:items-start gap-6 md:gap-0 transition-all duration-700 ${showCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto'}`}>
          
          {/* Card Liderança 1: Dra. Gel Venancio */}
          <div className="flex-1 max-w-full md:max-w-[320px] p-6 md:p-0 bg-black/60 md:bg-transparent backdrop-blur-xl md:backdrop-blur-0 border border-[#e7ca9d]/20 md:border-none rounded-2xl md:rounded-none">
            <div className="space-y-4">
              <h3 className="font-playfair text-[#e7ca9d] text-xl md:text-lg italic border-l border-[#e7ca9d]/60 pl-4 md:pl-3">
                Dra. Gel Venancio
              </h3>
              <p className="text-[12px] md:text-xs leading-relaxed opacity-90 md:opacity-80 uppercase tracking-wider">
                Responsável pela visão estratégica, curadoria institucional e condução do projeto como plataforma internacional.
              </p>
            </div>
          </div>

          {/* Card Liderança 2: Abraão Veríssimo */}
          <div className="flex-1 max-w-full md:max-w-[320px] p-6 md:p-0 bg-black/60 md:bg-transparent backdrop-blur-xl md:backdrop-blur-0 border border-[#e7ca9d]/20 md:border-none rounded-2xl md:rounded-none md:text-right mt-4 md:mt-0">
            <div className="space-y-4">
              <h3 className="font-playfair text-[#e7ca9d] text-xl md:text-lg italic border-l md:border-l-0 md:border-r border-[#e7ca9d]/60 pl-4 md:pl-0 md:pr-3">
                Abraão Veríssimo
              </h3>
              <p className="text-[12px] md:text-xs leading-relaxed opacity-90 md:opacity-80 uppercase tracking-wider">
                Atua na direção e execução do DOLT FACE, transformando conceito em experiência, com precisão estética e excelência operacional.
              </p>
            </div>
          </div>

          {/* Botão para fechar no mobile */}
          {showCards && (
            <button 
              onClick={() => setShowCards(false)}
              className="md:hidden mt-6 self-center text-[#e7ca9d]/60 text-[10px] uppercase tracking-widest flex items-center gap-2"
            >
              <X size={12} /> Fechar
            </button>
          )}
          
        </div>
      </div>
    </section>
  );
}