const Hero = () => {
    return (
        <div className="min-h-[70vh] md:min-h-[85vh] w-full bg-[#F6EEF5] px-6 sm:px-10 md:px-24 flex flex-col md:flex-row items-center justify-between mt-0 md:mt-0 gap-2 md:gap-12 py-16 overflow-hidden">

            {/* COLUNA DA ESQUERDA: Texto */}
            <div className="flex flex-col items-start gap-6 md:w-1/2 z-10">
                <span className="inline-block bg-[#EEDDF6] px-4 py-1.5 rounded-full text-xs font-bold text-[#553C6A] tracking-[1px] text-center">
                    EMPODERANDO VOZES
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold max-w-3xl text-[#1D1A1F] tracking-[-2px] sm:tracking-[-3px] leading-[1.1]">
                    Cuidado Especializado para <span className="text-[#6E5483] italic">Todas as Idades.</span>
                </h1>

                <h2 className="text-xl max-w-2xl font-medium text-[#372C3F] leading-relaxed">
                    Oferecemos fonoaudiologia completa e personalizada para crianças e adultos.
                    Nossa clínica cobre todas as especialidades, garantindo excelência e empatia em cada etapa da jornada de comunicação.
                </h2>

                {/* BOTÕES DESKTOP (Somem no Mobile) */}
                <div className="hidden md:flex flex-wrap gap-4 mt-8">
                    <a
                        href="https://wa.me/5535997329063?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Dra.%20Roseli%20e%20gostaria%20de%20marcar%20uma%20consulta."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#553C6A] text-white font-bold px-10 py-4 rounded-full hover:bg-[#28103C] transition-all shadow-lg active:scale-95 cursor-pointer flex items-center justify-center"
                    >
                        Agendar Consulta
                    </a>
                    <a
                        href="#servicos"
                        className="border-2 border-[#553C6A] text-[#553C6A] px-10 py-4 rounded-full font-bold hover:bg-[#553C6A]/5 transition-all cursor-pointer flex items-center justify-center"
                    >
                        Nossos Serviços
                    </a>
                </div>
            </div>

            {/* COLUNA DA DIREITA: Composição de Vídeos (Mantida Original) */}
            <div className="w-full md:w-1/2 relative flex items-center justify-center min-h-[500px] md:min-h-[650px] scale-75 sm:scale-90 md:scale-100 -mt-10 md:mt-0">
                <div className="absolute w-[360px] h-[360px] md:w-[500px] md:h-[500px] rounded-full bg-[#EEDDF6]/50 z-0 animate-pulse-slow"></div>

                {/* VÍDEO 1: Profissional */}
                <div className="absolute w-[260px] h-[260px] md:w-[290px] md:h-[290px] rounded-full overflow-hidden border-6 border-white shadow-2xl z-20 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer group">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                    >
                        <source src="/videos/25998395-hd_1080_1920_30fps.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-x-0 bottom-8 md:bottom-10 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                    </div>
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                </div>

                {/* VÍDEO 2: Criança */}
                <div className="absolute w-[160px] md:w-[200px] aspect-3/4 rounded-[40px] overflow-hidden shadow-xl z-10 -translate-y-40 translate-x-34 md:-translate-y-48 md:translate-x-40 opacity-95 hover:opacity-100 hover:scale-110 hover:z-30 transition-all duration-500 cursor-pointer group">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                        <source src="/videos/8088345-uhd_2160_3840_30fps.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                        <span className="bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-[11px] font-bold text-[#553C6A] uppercase tracking-wider shadow-sm">Infantil</span>
                    </div>
                </div>

                {/* VÍDEO 3: Idosa */}
                <div className="absolute w-[140px] md:w-[180px] aspect-3/4 rounded-[40px] overflow-hidden shadow-xl z-10 md:translate-y-45 translate-y-45 -translate-x-30 md:-translate-x-44 opacity-90 hover:opacity-100 hover:scale-110 hover:z-30 transition-all duration-500 cursor-pointer group">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover object-top">
                        <source src="/videos/5798910-hd_1080_1920_25fps.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                        <span className="bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-[11px] font-bold text-[#553C6A] uppercase tracking-wider shadow-sm">Saúde do Adulto</span>
                    </div>
                </div>

                {/* PÍLULA DE AUTORIDADE */}
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:right-4 bg-white/70 backdrop-blur-md px-6 py-4 rounded-[30px] shadow-2xl z-40 border border-white/50 flex flex-col items-center justify-center">
                    <div className="flex gap-1 mb-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <svg key={i} className="w-3 h-3 text-[#6E5483] fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-3xl font-black text-[#553C6A] leading-none">+1.000</span>
                    <span className="text-[10px] font-bold text-[#49454A] uppercase tracking-[2px] mt-1">Vidas Transformadas</span>
                </div>
            </div>

            {/* BOTÕES MOBILE (Aparecem apenas no Mobile, abaixo dos vídeos) */}
            <div className="flex md:hidden flex-col gap-4 w-full z-10">
                <a
                    href="https://wa.me/5535997329063?text=Ol%C3%A1..."
                    className="bg-[#553C6A] text-white font-bold px-7 py-4 rounded-full text-center shadow-lg active:scale-95"
                >
                    Agendar Consulta
                </a>
                <a
                    href="#servicos"
                    className="border-2 border-[#553C6A] text-[#553C6A] px-7 py-4 rounded-full font-bold text-center"
                >
                    Nossos Serviços
                </a>
            </div>

        </div>
    );
};

export default Hero;