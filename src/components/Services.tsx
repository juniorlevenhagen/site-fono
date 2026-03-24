const Services = () => {
    const listaServicos = [
        {
            title: "Linguagem e Fala",
            desc: "Apoio no desenvolvimento da comunicação verbal e escrita, desde as primeiras palavras.",
            icon: "🗣️"
        },
        {
            title: "Voz e Dicção",
            desc: "Aperfeiçoamento da clareza vocal para profissionais e reabilitação de patologias.",
            icon: "🎭"
        },
        {
            title: "Motricidade Orofacial",
            desc: "Tratamento de funções vitais como respiração, mastigação e deglutição segura.",
            icon: "✨"
        },
        {
            title: "Processamento Auditivo",
            desc: "Avaliação e treino das habilidades auditivas para melhor compreensão e foco.",
            icon: "👂"
        }
    ];

    return (
        <section className="py-24 px-12 md:px-24 bg-[#FBF8FB] w-full border-t border-[#F6EEF5]">
            {/* Removi o max-w para alinhar com a amplitude do seu Hero */}
            <div className="flex flex-col gap-20 w-full">

                {/* CABEÇALHO DA SEÇÃO: Ajustado para o padrão Eleven */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 pb-16 border-b border-[#EEDDF6]/50">

                    {/* O segredo está no 'space-y-6' aqui embaixo */}
                    <div className="max-w-3xl space-y-6">
                        <span className="inline-block bg-[#F6EEF5] px-4 py-1.5 rounded-full text-[10px] font-bold text-[#553C6A] tracking-[2px] uppercase">
                            Nossas Especialidades
                        </span>

                        <h2 className="text-5xl md:text-7xl font-bold text-[#1D1A1F] tracking-tighter leading-[0.95]">
                            Soluções <span className="text-[#6E5483] italic font-medium">Clínicas</span> <br />
                            Especializadas.
                        </h2>
                    </div>

                    <p className="text-gray-500 max-w-sm text-lg leading-relaxed lg:mb-2">
                        Ciência e empatia aplicadas à saúde da comunicação em todas as fases da vida.
                    </p>
                </div>

                {/* GRID DE CARDS: Alinhamento consistente */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {listaServicos.map((servico, index) => (
                        <div
                            key={index}
                            className="group bg-white p-10 rounded-[50px] transition-all duration-700 hover:bg-[#553C6A] hover:-translate-y-4 cursor-pointer shadow-[0_20px_50px_-20px_rgba(85,60,106,0.08)] hover:shadow-[0_30px_60px_-15px_rgba(85,60,106,0.3)] flex flex-col h-full border border-white"
                        >
                            {/* Ícone com fundo suave */}
                            <div className="w-16 h-16 bg-[#FBF8FB] rounded-[24px] flex items-center justify-center text-3xl mb-12 group-hover:bg-white/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                {servico.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-[#553C6A] group-hover:text-white transition-colors duration-300 mb-4 leading-tight">
                                {servico.title}
                            </h3>

                            <p className="text-gray-500 group-hover:text-white/70 transition-colors duration-300 text-base leading-relaxed grow">
                                {servico.desc}
                            </p>

                            {/* Indicador de Ação Sutil */}
                            <div className="mt-12 flex items-center gap-3 text-[#6E5483] group-hover:text-white font-bold text-[10px] uppercase tracking-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                                Saiba mais
                                <span className="w-8 h-px bg-current"></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;