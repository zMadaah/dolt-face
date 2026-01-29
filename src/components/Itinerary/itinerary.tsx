import React from 'react';

const ITINERARY_DATA = {
    mainTitle: "Pacientes estão mais exigentes.",
    subTitle: "Luxo virou padrão, não diferencial.",
    speakerTitle: "Palestrante internacional",
    speakerTheme: "Tendências globais, tecnologias emergentes e o futuro do mercado premium",
    description: "Posicionando o DOLT FACE no circuito internacional de excelência.",
    subDescription: "Autoridade internacional em estética facial e regenerativa."
};

const Itinerary = () => {
    return (
        <section className="w-full bg-bg-graphite py-24 px-6 text-white overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* CABEÇALHO DA SEÇÃO */}
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-3xl md:text-5xl text-cream-brand mb-2 italic">
                        {ITINERARY_DATA.mainTitle}
                    </h2>
                    <p className="font-tenor text-sm tracking-[0.3em] uppercase opacity-60">
                        {ITINERARY_DATA.subTitle}
                    </p>
                </div>

                {/* ÁREA DO PALESTRANTE */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-20 border-b border-white/10 pb-12">
                    <div className="text-center md:text-right flex-1">
                        <h3 className="font-playfair text-4xl md:text-6xl text-cream-brand leading-tight">
                            Palestrante <br /> internacional
                        </h3>
                    </div>
                    <div className="hidden md:block w-[1px] h-24 bg-bronze-brand/50" />
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-bronze-brand font-tenor text-lg uppercase tracking-widest mb-2">
                            Tema:
                        </p>
                        <p className="font-tenor text-xl md:text-2xl opacity-90 leading-relaxed">
                            {ITINERARY_DATA.speakerTheme}
                        </p>
                    </div>
                </div>

                {/* CHAMADA CENTRAL */}
                <div className="text-center mb-16">
                    <p className="text-cream-brand font-playfair text-2xl md:text-3xl mb-4 italic">
                        {ITINERARY_DATA.description}
                    </p>
                    <p className="font-tenor text-sm tracking-[0.2em] opacity-60 uppercase">
                        {ITINERARY_DATA.subDescription}
                    </p>
                </div>

                {/* GRID DE CARDS COM HOVER DOURADO */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-6">

                    {/* CARD MÉDICOS */}
                    <div className="group relative p-8 border border-white/10 bg-black/20 transition-all duration-500 hover:border-gold-brand hover:shadow-[0_0_20px_rgba(197,162,103,0.15)]">
                        <h4 className="font-playfair text-2xl text-cream-brand mb-2">
                            Médicos | <span className="text-white/70 italic">Visão cirúrgica & estética avançada</span>
                        </h4>
                        <p className="text-bronze-brand text-xs uppercase tracking-widest mb-6 border-b border-bronze-brand/20 pb-2">
                            Precisão clínica. Segurança. Decisão.
                        </p>
                        <ul className="space-y-3 font-tenor text-sm text-white/70">
                            {[
                                "Anatomia aplicada à estética de alto nível",
                                "Segurança clínica e tomada de decisão",
                                "Manejo de intercorrências e complicações",
                                "Protocolos medicamentosos em cenários críticos",
                                "Refinamento de suturas e cicatrização avançada"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <span className="text-gold-brand">+</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CARD DENTISTAS */}
                    <div className="group relative p-8 border border-white/10 bg-black/20 transition-all duration-500 hover:border-gold-brand hover:shadow-[0_0_20px_rgba(197,162,103,0.15)]">
                        <h4 className="font-playfair text-2xl text-cream-brand mb-2">
                            Dentistas | <span className="text-white/70 italic">HOF de alta performance</span>
                        </h4>
                        <p className="text-bronze-brand text-xs uppercase tracking-widest mb-6 border-b border-bronze-brand/20 pb-2">
                            Naturalidade como assinatura. Técnica como base.
                        </p>
                        <ul className="space-y-3 font-tenor text-sm text-white/70">
                            {[
                                "Planejamento facial estratégico avançado",
                                "Naturalidade como diferencial estético premium",
                                "Longevidade e previsibilidade dos resultados",
                                "Precificação inteligente e posicionamento",
                                "Tecnologia aplicada à performance previsível"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <span className="text-gold-brand">+</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CARD INFERIOR LARGO */}
                <div className="w-full group relative p-8 border border-white/10 bg-black/20 transition-all duration-500 hover:border-gold-brand hover:shadow-[0_0_20px_rgba(197,162,103,0.15)] mb-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h4 className="font-playfair text-3xl text-cream-brand mb-1">Imagem, mentalidade & vendas</h4>
                            <p className="text-bronze-brand text-xs uppercase tracking-[0.3em]">Valor não se disputa. Se sustenta.</p>
                        </div>
                        <div className="max-w-md text-right">
                            <p className="font-tenor text-sm text-white/60 leading-relaxed">
                                Ciência do comportamento humano aplicada à conexão, condução e conversão — sem desgaste, sem concessões.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CARD INFERIOR 2: (O ÚLTIMO CARD) */}
                <div className="w-full group relative p-8 border border-white/10 bg-black/20 transition-all duration-500 hover:border-gold-brand hover:shadow-[0_0_20px_rgba(197,162,103,0.15)]">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

                        {/* Título e Subtítulo à esquerda */}
                        <div className="flex-1">
                            <h4 className="font-playfair text-3xl text-cream-brand mb-2">
                                Gestão e blindagem clínica
                            </h4>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-[1px] bg-bronze-brand/50" />
                                <p className="font-tenor text-xs text-bronze-brand uppercase tracking-[0.3em]">
                                    Estrutura que protege. Gestão que sustenta.
                                </p>
                            </div>
                        </div>

                        {/* Lista e Descrição à direita */}
                        <div className="max-w-lg text-right flex-1">
                            <ul className="font-tenor text-[10px] md:text-xs text-white/50 uppercase tracking-widest mb-4 space-y-1 list-none">
                                <li>• Vigilância Sanitária</li>
                                <li>• Auditoria Clínica & Tributária</li>
                                <li>• Sistemas & Inteligência Artificial</li>
                            </ul>
                            <p className="font-tenor text-sm text-white/80 leading-relaxed italic opacity-90">
                                Como transformar uma clínica estética em uma operação blindada, dentro das normas, auditada, com assessoria jurídica completa e eficiência tributária.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Itinerary;