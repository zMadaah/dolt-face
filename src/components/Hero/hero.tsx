"use client";

import React from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import ImageBackground from '../../../public/image/bg_hero.png';
import LogoMain from '../../../public/image/logo_hero.png';

const HERO_CONTENT = {
  description: "Uma nova referência internacional em estética, ciência e autoridade.",
  leftStaff: {
    label: "Idealizadora e Diretora",
    name: "Dra. Gel Venancio",
    instagramUrl: "https://www.instagram.com/dra_gel/"
  },
  rightStaff: {
    label: "Diretor e Executor Criativo",
    name: "Abraão Veríssimo",
    instagramUrl: "https://www.instagram.com/marealtapescados1/"
  }
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden bg-black">
      
      {/* CAMADA 1: FUNDO */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ImageBackground}
          alt="Dolt Face Dubai Background"
          fill
          className="object-cover opacity-60 transition-transform duration-[10s] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
      </div>

      {/* CAMADA 2: CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center">

        {/* LOGO CENTRAL */}
        <div className="w-full max-w-[300px] md:max-w-[650px] mb-12 animate-fade-in-up">
          <Image 
             src={LogoMain} 
             alt="Dolt Face Dubai Congress Logo" 
             width={800} 
             height={400} 
             className="object-contain"
             priority
           /> 
        </div>

        {/* DESCRIÇÃO E LINHA DIVISÓRIA */}
        <div className="w-full max-w-3xl text-center">
          <p className="font-tenor text-xs md:text-lg tracking-[0.1em] text-white/90 mb-6 uppercase">
            {HERO_CONTENT.description}
          </p>
          <div className="h-[0.5px] w-full bg-white/20" />
        </div>
      </div>

      {/* CAMADA 3: RODAPÉ COM INSTAGRAM */}
      <div className="absolute bottom-8 w-full max-w-6xl px-10 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[11px] tracking-[0.2em] font-tenor text-white/60">
        
        {/* Lado Esquerdo - Dra. Gel Venancio */}
        <div className="mb-4 md:mb-0 group">
          <a 
            href={HERO_CONTENT.leftStaff.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-all duration-500"
          >
            <p className="uppercase">
              {HERO_CONTENT.leftStaff.label} <span className="text-white/90 font-bold">{HERO_CONTENT.leftStaff.name}</span>
            </p>
            <Instagram size={14} strokeWidth={1.5} className="text-[#e7ca9d] group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Lado Direito - Abraão Veríssimo */}
        <div className="group">
          <a 
            href={HERO_CONTENT.rightStaff.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-all duration-500"
          >
            <Instagram size={14} strokeWidth={1.5} className="text-[#e7ca9d] group-hover:scale-110 transition-transform" />
            <p className="uppercase text-right">
              {HERO_CONTENT.rightStaff.label} <span className="text-white/90 font-bold">{HERO_CONTENT.rightStaff.name}</span>
            </p>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;