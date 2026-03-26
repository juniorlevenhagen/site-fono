import { useState, type ComponentType } from 'react';
import { Users, Activity, BrainCircuit, Ear, MoveRight, X, MessageCircle } from 'lucide-react';

type ServiceIcon = ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
}>;

type Service = {
    title: string;
    desc: string;
    longDesc: string;
    icon: ServiceIcon;
    cta: string;
};

const Services = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    const listaServicos: Service[] = [
        {
            title: "Terapia Pediátrica",
            desc: "Intervenção precoce focada em articulação, atrasos de linguagem e marcos de desenvolvimento.",
            longDesc: "Nossa abordagem lúdica e humanizada ajuda crianças a superarem desafios de comunicação. Focamos na correção da fala (articulação), atrasos no desenvolvimento da linguagem e alfabetização. Criamos um ambiente acolhedor onde seu filho aprende brincando, fortalecendo a confiança para interagir com o mundo.",
            icon: Users,
            cta: "Agendar Avaliação"
        },
        {
            title: "Reabilitação Adulta",
            desc: "Suporte especializado para recuperação pós-AVC, TCE e distúrbios neurodegenerativos.",
            longDesc: "Recuperar a autonomia na comunicação é vital após eventos como AVC ou traumatismos. Oferecemos terapia especializada para reabilitar a fala, linguagem e deglutição, adaptando o tratamento às necessidades de cada paciente. Nosso objetivo é devolver a qualidade de vida e a capacidade de expressão no dia a dia.",
            icon: Activity,
            cta: "Solicitar Plano de Reabilitação"
        },
        {
            title: "Motricidade Orofacial",
            desc: "Tratamento de funções vitais como respiração, mastigação e deglutição segura.",
            longDesc: "O equilíbrio da musculatura facial é essencial para respirar, mastigar e engolir corretamente. Tratamos disfunções que afetam essas funções (como respiração bucal ou dificuldade em engolir), garantindo mais segurança e conforto. Uma função orofacial correta é a base para uma fala clara e um sorriso saudável.",
            icon: BrainCircuit,
            cta: "Marcar Consulta Funcional"
        },
        {
            title: "Audição",
            desc: "Avaliação e treino das habilidades auditivas e do processamento central.",
            longDesc: "Ouvir bem é diferente de entender bem. Avaliamos e treinamos o Processamento Auditivo Central (PAC), ajudando o cérebro a interpretar melhor os sons. Ideal para quem sente dificuldade de foco em ambientes barulhentos ou tem atrasos de aprendizado. Treinar a audição é potencializar a comunicação e o aprendizado.",
            icon: Ear,
            cta: "Agendar Treino Auditivo"
        }
    ];

    return (
        /* Padding responsivo consistente com as outras seções */
        <section className="py-16 md:py-24 px-6 sm:px-12 md:px-24 bg-white w-full border-t border-[#F6EEF5] relative">
            <div className="flex flex-col gap-12 md:gap-20 w-full">

                {/* CABEÇALHO DA SEÇÃO */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pb-12 md:pb-16 border-b border-[#EEDDF6]/50">
                    <div className="max-w-3xl space-y-4 md:space-y-6">
                        <span className="inline-block bg-[#EEDDF6]/60 px-5 py-2 rounded-full text-[9px] md:text-[10px] font-bold text-[#553C6A] tracking-[2px] md:tracking-[3px] uppercase">
                            Nossas Especialidades
                        </span>
                        <h2 className="text-4xl md:text-7xl font-bold text-[#1D1A1F] tracking-tighter leading-none md:leading-[0.95]">
                            Soluções <span className="text-[#6E5483] italic font-medium">Clínicas</span> <br className="hidden md:block" />
                            Especializadas.
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-3xl">
                            Ciência e empatia aplicadas à saúde da comunicação em todas as fases da vida.
                        </p>
                    </div>
                </div>

                {/* GRID DE CARDS */}
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full z-10">
                    {listaServicos.map((servico, index) => {
                        const IconComponent = servico.icon;
                        return (
                            <div
                                key={index}
                                onClick={() => setSelectedService(servico)}
                                className="group bg-white p-8 md:p-10 rounded-[28px] md:rounded-[32px] transition-all duration-500 hover:bg-[#553C6A] hover:-translate-y-3 cursor-pointer shadow-[0_10px_30px_-15px_rgba(85,60,106,0.1)] hover:shadow-[0_30px_60px_-12px_rgba(85,60,106,0.3)] flex flex-col h-full border border-gray-100/80 active:scale-95 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-10 -mt-10 transition-all group-hover:bg-white/10" />

                                <div className="w-14 md:w-16 h-16 bg-[#F6EEF5] rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:bg-white/20 transition-all duration-500">
                                    <IconComponent size={28} strokeWidth={1.2} className="text-[#6E5483] group-hover:text-white transition-colors duration-500" />
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-[#1D1A1F] group-hover:text-white transition-colors duration-300 mb-3 md:mb-4 leading-tight tracking-tight">
                                    {servico.title}
                                </h3>

                                <p className="text-gray-500 group-hover:text-white/80 transition-colors duration-300 text-sm md:text-base leading-relaxed grow">
                                    {servico.desc}
                                </p>

                                <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gray-50 group-hover:border-white/10 flex items-center justify-between">
                                    <span className="text-[#6E5483] group-hover:text-white font-bold text-[10px] md:text-[11px] uppercase tracking-[2px] transition-colors">
                                        Explorar Detalhes
                                    </span>
                                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500">
                                        <MoveRight size={18} className="text-[#6E5483] group-hover:text-white transform group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* MODAL RESPONSIVO */}
            {/* MODAL RESPONSIVO CORRIGIDO */}
            {selectedService !== null && (
                <div
                    className="fixed inset-0 z-200 flex items-end md:items-center justify-center p-0 md:p-6 bg-[#1D1A1F]/60 backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setSelectedService(null)}
                >
                    <div
                        className="bg-[#fafaf5] p-6 md:p-16 rounded-t-[32px] md:rounded-[60px] shadow-2xl max-w-2xl w-full relative border border-[#EEDDF6]/30 animate-modalIn max-h-[92vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Barra de arraste visual para mobile (opcional, dá um toque premium) */}
                        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-4 md:hidden" />

                        {/* Botão de Fechar - Ajustado para não sumir no mobile */}
                        <button
                            onClick={() => setSelectedService(null)}
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-gray-400 hover:text-[#553C6A] p-3 transition-all bg-white md:bg-transparent rounded-full shadow-sm md:shadow-none z-10"
                        >
                            <X size={24} className="md:w-7 md:h-7" />
                        </button>

                        {/* Conteúdo com Scroll Interno para telas pequenas */}
                        <div className="overflow-y-auto pr-2 custom-scrollbar">
                            <div className="space-y-6 md:space-y-10">

                                {/* Header do Modal */}
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                                    <div className="w-14 h-14 md:w-20 md:h-20 bg-[#F6EEF5] rounded-[20px] md:rounded-[28px] flex items-center justify-center shrink-0">
                                        <selectedService.icon strokeWidth={1.2} className="w-8 h-8 md:w-10 md:h-10 text-[#6E5483]" />
                                    </div>
                                    <div>
                                        <span className="text-[#6E5483] font-bold text-[10px] uppercase tracking-[2px]">Especialidade</span>
                                        <h3 className="text-3xl md:text-5xl font-bold text-[#1D1A1F] tracking-tighter leading-[1.1] md:leading-tight mt-1">
                                            {selectedService.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Descrição */}
                                <div className="space-y-4 md:space-y-6">
                                    <p className="text-gray-600 text-base md:text-xl leading-relaxed">
                                        {selectedService.longDesc}
                                    </p>
                                    <div className="bg-[#F6EEF5]/30 p-4 md:p-6 rounded-2xl border-l-4 border-[#6E5483]">
                                        <p className="text-[#553C6A] text-xs md:text-sm font-medium italic leading-relaxed">
                                            &ldquo;Nossa equipe coordenada pela Dra. Roseli está pronta para oferecer um atendimento personalizado e acolhedor.&ldquo;
                                        </p>
                                    </div>
                                </div>

                                {/* CTA - Botão fixo ou no fim do scroll */}
                                <div className="pt-4 md:pt-6">
                                    <a
                                        href="https://wa.me/5535997329063"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-3 bg-[#553C6A] hover:bg-[#6E5483] text-white px-8 py-5 md:py-6 rounded-2xl md:rounded-full text-xs md:text-sm font-bold uppercase tracking-[2px] shadow-lg hover:shadow-xl transition-all w-full md:w-auto active:scale-95"
                                    >
                                        <MessageCircle size={20} />
                                        {selectedService.cta}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Services;