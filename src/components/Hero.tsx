const Hero = () => {
    return (
        <div className="min-h-[85vh] w-full bg-[#F6EEF5] px-12 md:px-24 flex flex-col md:flex-row items-center justify-between gap-12 py-16 overflow-hidden">

            {/* COLUNA DA ESQUERDA: Texto e Botões */}
            <div className="flex flex-col items-start gap-6 md:w-1/2 z-10">
                {/* Badge/Etiqueta */}
                <span className="inline-block bg-[#EEDDF6] px-4 py-1.5 rounded-full text-xs font-bold text-[#553C6A] tracking-[1px] text-center">
                    EMPODERANDO VOZES
                </span>

                {/* Título Principal */}
                <h1 className="text-6xl md:text-7xl font-bold max-w-3xl text-[#1D1A1F] tracking-[-3px] leading-[1.1]">
                    Cuidado Especializado para <span className="text-[#6E5483] italic">Todas as Idades.</span>
                </h1>

                <h2 className="text-xl max-w-2xl font-medium text-[#372C3F] leading-relaxed">
                    Oferecemos fonoaudiologia completa e personalizada para crianças e adultos.
                    Nossa clínica cobre todas as especialidades, garantindo excelência e empatia em cada etapa da jornada de comunicação.
                </h2>

                <div className="flex flex-wrap gap-4 mt-8">
                    {/* Botão Principal: Conversão Direta para WhatsApp */}
                    <a
                        href="https://wa.me/5535997329063?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Dra.%20Roseli%20e%20gostaria%20de%20marcar%20uma%20consulta."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#553C6A] text-white font-bold px-10 py-4 rounded-full hover:bg-[#28103C] transition-all shadow-lg active:scale-95 cursor-pointer flex items-center justify-center"
                    >
                        Agendar Consulta
                    </a>

                    {/* Botão Secundário: Scroll Suave para a seção de Serviços */}
                    <a
                        href="#servicos"
                        className="border-2 border-[#553C6A] text-[#553C6A] px-10 py-4 rounded-full font-bold hover:bg-[#553C6A]/5 transition-all cursor-pointer flex items-center justify-center"
                    >
                        Nossos Serviços
                    </a>
                </div>
            </div>

            {/* COLUNA DA DIREITA: A Composição Artística com Textos no Hover */}
            <div className="w-full md:w-1/2 h-[650px] relative flex items-center justify-center">

                {/* Círculo decorativo de fundo (Unifica a composição) */}
                <div className="absolute w-[500px] h-[500px] rounded-full bg-[#EEDDF6]/50 z-0 animate-pulse-slow"></div>

                {/* VÍDEO 1: Profissional (Atendimento) - Centro
       Ajuste de Design: Reduzi a borda para 6px e adicionei o texto de ação.
    */}
                <div className="absolute w-[290px] h-[290px] rounded-full overflow-hidden border-6 border-white shadow-2xl z-20 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer group">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                        <source src="/videos/5998395-hd_1080_1920_30fps.mp4" type="video/mp4" />
                    </video>

                    {/* TEXTO NO HOVER: Agendar Agora (Estilo Premium Roxo)
           z-index alto e alinhamento flexível para ficar centralizado na base do círculo.
        */}
                    <div className="absolute inset-x-0 bottom-10 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                        <span className="bg-[#553C6A] text-white px-5 py-2 rounded-full text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            Agendar Atendimento
                        </span>
                    </div>
                    {/* Overlay escuro opcional para destacar o texto */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                </div>

                {/* VÍDEO 2: Criança (Superior Direita) */}
                <div className="absolute w-[200px] aspect-3/4 rounded-[40px] overflow-hidden shadow-xl z-10 -translate-y-48 translate-x-40 opacity-95 hover:opacity-100 hover:scale-110 hover:z-30 transition-all duration-500 cursor-pointer group">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                        <source src="/videos/8088345-uhd_2160_3840_30fps.mp4" type="video/mp4" />
                    </video>

                    {/* TEXTO NO HOVER: Fono Infantil (Estilo Vidro Fosco)
           Usamos a classe 'group-hover' para controlar a opacidade do span interno.
        */}
                    <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                        <span className="bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-[11px] font-bold text-[#553C6A] uppercase tracking-wider shadow-sm">
                            Infantil
                        </span>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                </div>

                {/* VÍDEO 3: Idosa (Inferior Esquerda) */}
                <div className="absolute w-[180px] aspect-3/4 rounded-[40px] overflow-hidden shadow-xl z-10 translate-y-52 -translate-x-44 opacity-90 hover:opacity-100 hover:scale-110 hover:z-30 transition-all duration-500 cursor-pointer group">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover object-top">
                        <source src="/videos/5798910-hd_1080_1920_25fps.mp4" type="video/mp4" />
                    </video>

                    {/* TEXTO NO HOVER: Longevidade (Estilo Vidro Fosco) */}
                    <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                        <span className="bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-[11px] font-bold text-[#553C6A] uppercase tracking-wider shadow-sm">
                            Saúde do Adulto
                        </span>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                </div>
                {/* PÍLULA DE AUTORIDADE: +1000 Vidas Transformadas */}
                <div className="absolute -bottom-6 -right-6 md:right-4 bg-white/70 backdrop-blur-md px-6 py-4 rounded-[30px] shadow-2xl z-40 border border-white/50 flex flex-col items-center justify-center transition-all duration-700 hover:scale-110 hover:-translate-y-2 cursor-default group/pill">

                    {/* Estrelinhas de Avaliação */}
                    <div className="flex gap-1 mb-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <svg key={i} className="w-3 h-3 text-[#6E5483] fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-black text-[#553C6A] leading-none tracking-tighter">
                            +1.000
                        </span>

                        <span className="text-[10px] font-bold text-[#49454A] uppercase tracking-[2px] mt-1 whitespace-nowrap opacity-80 group-hover/pill:opacity-100 transition-opacity">
                            Vidas Transformadas
                        </span>
                    </div>

                    {/* Efeito de Brilho que percorre a pílula (opcional, mas fica lindo) */}
                    <div className="absolute inset-0 rounded-[30px] overflow-hidden pointer-events-none">
                        <div className="absolute top-0 -left-full w-1/2 h-full bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] group-hover/pill:left-[150%] transition-all duration-1000"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;