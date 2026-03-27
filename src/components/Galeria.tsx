import { useState } from 'react';
import { Camera, X, Maximize2 } from 'lucide-react';

type FotoMomento = {
    src: string;
    alt: string;
    legenda: string;
};

const Galeria = () => {
    const [fotoSelecionada, setFotoSelecionada] = useState<FotoMomento | null>(null);

    const listaFotos: FotoMomento[] = [
        {
            src: "/imagens/galeria01.jpeg",
            alt: "Atendimento lúdico com criança",
            legenda: "Aprender brincando é o nosso segredo."
        },
        {
            src: "/imagens/galeria02.jpeg",
            alt: "Roseli Bernardes e paciente",
            legenda: "Conexão e confiança em cada sessão."
        },
        {
            src: "/imagens/galeria03.jpeg",
            alt: "Exercício de motricidade orofacial",
            legenda: "Resultados que transformam sorrisos."
        },
        {
            src: "/imagens/galeria04.jpeg",
            alt: "Criança feliz no atendimento",
            legenda: "A alegria de se comunicar com clareza."
        }
    ];

    return (
        <section id="galeria" className="scroll-mt-24 py-16 md:py-24 px-5 md:px-24 bg-[#FAF8FB] w-full border-t border-[#F6EEF5] relative overflow-hidden">
            {/* Removemos o max-w-1400px para permitir que a seção respire mais nas laterais em telas ultra-wide */}
            <div className="flex flex-col gap-12 md:gap-20 w-full mx-auto">

                {/* CABEÇALHO PADRONIZADO */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pb-12 border-b border-[#EEDDF6]/50">
                    <div className="max-w-4xl space-y-4 md:space-y-6">
                        <span className="inline-flex items-center gap-2.5 bg-[#EEDDF6]/60 px-5 py-2 rounded-full text-[9px] md:text-[10px] font-bold text-[#553C6A] tracking-[3px] uppercase">
                            <Camera size={14} className="text-[#6E5483]" strokeWidth={2} />
                            Nosso Cuidado em Ação
                        </span>
                        <h2 className="text-4xl md:text-7xl font-bold text-[#1D1A1F] tracking-tighter leading-none md:leading-[0.95]">
                            Momentos que <span className="text-[#6E5483] italic font-medium">inspiram</span> <br className="hidden md:block" />
                            confiança.
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl">
                            Um olhar sensível sobre os processos de evolução, onde cada pequeno avanço é celebrado como uma grande conquista.
                        </p>
                    </div>
                </div>

                {/* GRID DE FOTOS - Expandido para as laterais */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full z-10">
                    {listaFotos.map((foto, index) => (
                        <div
                            key={index}
                            onClick={() => setFotoSelecionada(foto)}
                            className="group relative bg-white p-2 md:p-4 rounded-[24px] md:rounded-[40px] shadow-[0_10px_30px_-15px_rgba(85,60,106,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(85,60,106,0.2)] transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100 aspect-square overflow-hidden"
                        >
                            <div className="w-full h-full overflow-hidden rounded-[18px] md:rounded-[30px] bg-gray-50">
                                <img
                                    src={foto.src}
                                    alt={foto.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="absolute inset-2 md:inset-4 bg-[#553C6A]/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center rounded-[18px] md:rounded-[30px]">
                                <Maximize2 size={24} className="text-white/50 mb-3 md:mb-4 scale-50 group-hover:scale-100 transition-transform duration-500" />
                                <p className="text-white text-[10px] md:text-xs font-semibold leading-tight tracking-wide uppercase translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    {foto.legenda}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* LIGHTBOX */}
            {fotoSelecionada !== null && (
                <div
                    className="fixed inset-0 z-300 flex items-center justify-center p-4 md:p-10 bg-[#1D1A1F]/95 backdrop-blur-md transition-opacity duration-300"
                    onClick={() => setFotoSelecionada(null)}
                >
                    <button
                        onClick={() => setFotoSelecionada(null)}
                        className="absolute top-6 right-6 text-white/50 hover:text-white p-2 transition-colors"
                    >
                        <X size={32} />
                    </button>

                    <div
                        className="max-w-4xl w-full flex flex-col items-center animate-modalIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={fotoSelecionada.src}
                            alt={fotoSelecionada.alt}
                            className="w-full h-auto max-h-[75vh] rounded-[32px] md:rounded-[60px] object-contain shadow-2xl border border-white/10"
                        />
                        <p className="mt-8 text-white/90 text-lg md:text-2xl font-medium tracking-tight text-center">
                            {fotoSelecionada.legenda}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Galeria;