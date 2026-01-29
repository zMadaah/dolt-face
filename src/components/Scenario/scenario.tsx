"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Scenarios() {
  const curadoriaImages = ["/image/curadoria1.png", "/image/curadoria2.png", "/image/curadoria3.png"];
  const experienciaImages = ["/image/experiencia1.png", "/image/experiencia2.png", "/image/experiencia3.png"];

  return (
    <>
      <section className="w-full bg-[#520709] py-24 px-6 overflow-hidden text-white">
        <div className="max-w-6xl mx-auto space-y-32">
          
          {/* BLOCO 1: CARROSSEL À ESQUERDA, TEXTO À DIREITA */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                className="rounded-sm shadow-2xl border border-[#e7ca9d]/20"
              >
                {curadoriaImages.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative aspect-video">
                      <img src={src} alt="Curadoria" className="object-cover w-full h-full" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl text-[#e7ca9d] italic leading-tight">
                Curadoria que sustenta autoridade
              </h2>
              <div className="space-y-4 font-tenor text-sm md:text-base leading-relaxed opacity-90">
                <p>A estrutura do DOLT FACE é organizada em quadros estratégicos, cada um conduzindo um eixo essencial da operação premium em estética.</p>
                <p>Sessões abertas para discussão clínica e perguntas qualificadas. Integração estratégica entre médicos e dentistas como diferencial.</p>
              </div>
            </div>
          </div>

          {/* BLOCO 2: TEXTO À ESQUERDA, CARROSSEL À DIREITA */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5500 }}
                className="rounded-sm shadow-2xl border border-[#e7ca9d]/20"
              >
                {experienciaImages.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative aspect-video">
                      <img src={src} alt="Experiência" className="object-cover w-full h-full" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl text-[#e7ca9d] italic leading-tight">
                Experiência DOLT FACE
              </h2>
              <div className="space-y-4 font-tenor text-sm md:text-base leading-relaxed opacity-90">
                <p>Cada detalhe desenhado foi desenhado para sustentar autoridade, aprofundar repertório técnico e criar conexões reais entre profissionais que operam no topo.</p>
                <p className="text-[#e7ca9d] tracking-widest uppercase text-xs">Aqui, a experiência sustenta a linguagem, define o critério e consolida o posicionamento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER FINAL - PADRÃO GRAFITE E DOURADO */}
      <div className="w-full bg-[#1c1c1c] py-16 px-6 border-t-2 border-b-2 border-[#927B59]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-playfair text-xl md:text-3xl text-[#e7ca9d] leading-relaxed tracking-wide italic">
            "Aqui estão os profissionais que irão concentrar os maiores movimentos de investimento do próximo ciclo."
          </p>
        </div>
      </div>

      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev { color: #e7ca9d !important; transform: scale(0.7); }
        .swiper-pagination-bullet { background: white !important; opacity: 0.5; }
        .swiper-pagination-bullet-active { background: #e7ca9d !important; opacity: 1; }
      `}</style>
    </>
  );
}