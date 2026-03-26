import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, X } from 'lucide-react';
// Importando Swiper e estilos
// 1. O Swiper principal e os módulos
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// 2. Os CSS corrigidos (Caminhos universais)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Se for usar autoplay

const Testimonials = () => {
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

    // Esta lista viria do seu "banco de dados" (JSON que você alimenta com o Google Forms)
    const depoimentos = [
        {
            paciente: "Pedro",
            responsavel: "Carla (Mãe)",
            relato: "O desenvolvimento do Pedro com a Dra. Roseli foi nítido desde o primeiro mês. A Dra. Roseli tem um dom com crianças, ele adora ir às sessões!",
            categoria: "Terapia Pediátrica",
            estrelas: 5
        },
        {
            paciente: "Sr. Geraldo",
            responsavel: "", // No caso de adulto, o responsável fica vazio
            relato: "Recuperei minha clareza na fala após meses de dedicação. O consultório em Baependi é impecável e o atendimento nota mil.",
            categoria: "Reabilitação Adulta",
            estrelas: 5
        },
        {
            paciente: "Sr. Geraldo",
            responsavel: "", // No caso de adulto, o responsável fica vazio
            relato: "Recuperei minha clareza na fala após meses de dedicação. O consultório em Baependi é impecável e o atendimento nota mil.",
            categoria: "Reabilitação Adulta",
            estrelas: 5
        },
        {
            paciente: "Sr. Geraldo",
            responsavel: "", // No caso de adulto, o responsável fica vazio
            relato: "Recuperei minha clareza na fala após meses de dedicação. O consultório em Baependi é impecável e o atendimento nota mil.",
            categoria: "Reabilitação Adulta",
            estrelas: 5
        },
    ];

    return (
        <section className="py-24 bg-[#FBF8FB] w-full border-t border-[#F6EEF5] overflow-hidden">
            <div className="max-w-full mx-auto px-12 md:px-24 space-y-16">

                {/* CABEÇALHO */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 border-b border-[#EEDDF6]/50 pb-4 md:pb-12">
                    <div className="max-w-2xl space-y-4 md:space-y-6">
                        <span className="inline-block bg-[#EEDDF6]/60 px-5 py-2 rounded-full text-[10px] font-bold text-[#553C6A] tracking-[3px] uppercase">
                            Experiências Reais
                        </span>
                        <h2 className="text-4xl md:text-7xl font-bold text-[#1D1A1F] tracking-tighter leading-[0.95]">
                            Vozes que <span className="text-[#6E5483] italic font-medium">Transformamos.</span>
                        </h2>
                    </div>

                    {/* Controles do Slider - Escondidos no mobile para limpar o visual se desejar, ou mantidos com gap menor */}
                    <div className="flex gap-4 pb-2 md:pb-0">
                        <button className="swiper-prev-btn w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#EEDDF6] flex items-center justify-center text-[#553C6A] hover:bg-[#553C6A] hover:text-white transition-all duration-500 cursor-pointer">
                            <ChevronLeft size={20} className="md:w-6 md:h-6" />
                        </button>
                        <button className="swiper-next-btn w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#EEDDF6] flex items-center justify-center text-[#553C6A] hover:bg-[#553C6A] hover:text-white transition-all duration-500 cursor-pointer">
                            <ChevronRight size={20} className="md:w-6 md:h-6" />
                        </button>
                    </div>
                </div>

                {/* SLIDER CONTAINER */}
                <div className="relative -mx-4">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-next-btn',
                            prevEl: '.swiper-prev-btn',
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 3.5 },
                            1600: { slidesPerView: 4 }
                        }}
                        // REMOVIDO O PB-20! E ADICIONADO RESPONSIVIDADE
                        className="pb-2 md:pb-20 px-4"
                    >
                        {depoimentos.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white p-12 rounded-[50px] shadow-[0_20px_50px_-15px_rgba(85,60,106,0.06)] border border-[#F6EEF5]/50 flex flex-col justify-between h-[400px] relative group hover:border-[#6E5483]/30 transition-all duration-700">
                                    <Quote className="absolute top-10 right-12 text-[#F6EEF5] group-hover:text-[#EEDDF6] transition-colors" size={50} />

                                    <div className="space-y-8 relative z-10">
                                        <div className="flex gap-1">
                                            {[...Array(item.estrelas)].map((_, i) => (
                                                <Star key={i} size={14} fill="#6E5483" className="text-[#6E5483]" />
                                            ))}
                                        </div>
                                        <p className="text-gray-600 text-lg leading-relaxed italic line-clamp-6">
                                            &ldquo;{item.relato}&rdquo;
                                        </p>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-[#F6EEF5] flex items-center gap-5">
                                        <div className="w-12 h-12 bg-linear-to-tr from-[#553C6A] to-[#6E5483] rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                            {item.paciente.charAt(0)}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            {/* Nome de quem está falando (Responsável ou o próprio Paciente Adulto) */}
                                            <h4 className="font-bold text-[#1D1A1F] text-base leading-tight">
                                                {item.responsavel ? item.responsavel : item.paciente}
                                            </h4>

                                            {/* Contexto: Se houver responsável, mostra quem é o paciente. Se não, mostra a categoria. */}
                                            <div className="flex items-center gap-2">
                                                <p className="text-[10px] text-[#6E5483] font-bold uppercase tracking-[2px]">
                                                    {item.responsavel
                                                        ? `Paciente: ${item.paciente}`
                                                        : item.categoria
                                                    }
                                                </p>

                                                {/* Um divisor sutil se você quiser mostrar a categoria mesmo em casos infantis */}
                                                {item.responsavel && (
                                                    <>
                                                        <span className="w-1 h-1 bg-[#EEDDF6] rounded-full"></span>
                                                        <p className="text-[10px] text-gray-400 uppercase tracking-[1px]">
                                                            {item.categoria}
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* BOTÃO PARA AVALIAR */}
                <div className="flex flex-col items-center gap-8 pt-10">
                    <div className="h-px w-24 bg-[#EEDDF6]"></div>
                    <button
                        onClick={() => setIsFeedbackOpen(true)}
                        className="group flex items-center gap-4 bg-white border border-[#EEDDF6] px-10 py-5 rounded-full hover:bg-[#553C6A] transition-all duration-500 shadow-sm hover:shadow-2xl"
                    >
                        <span className="text-[#553C6A] group-hover:text-white font-bold text-[11px] uppercase tracking-[3px] transition-colors">
                            Deixar meu Depoimento
                        </span>
                        <div className="w-8 h-8 rounded-full bg-[#F6EEF5] group-hover:bg-white/20 flex items-center justify-center transition-colors">
                            <ChevronRight size={16} className="text-[#553C6A] group-hover:text-white" />
                        </div>
                    </button>
                </div>
            </div>

            {isFeedbackOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D1A1F]/60 p-6 backdrop-blur-sm"
                    onClick={() => setIsFeedbackOpen(false)}
                    role="presentation"
                >
                    <div
                        className="relative w-full max-w-lg rounded-[40px] bg-white p-10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="feedback-modal-title"
                    >
                        <button
                            type="button"
                            onClick={() => setIsFeedbackOpen(false)}
                            className="absolute right-6 top-6 text-gray-400 transition-colors hover:text-[#553C6A]"
                            aria-label="Fechar"
                        >
                            <X size={22} />
                        </button>
                        <h3 id="feedback-modal-title" className="pr-10 text-xl font-bold text-[#1D1A1F]">
                            Deixar depoimento
                        </h3>
                        {/* MODAL DE AVALIAÇÃO */}
                        {isFeedbackOpen && (
                            <div className="fixed inset-0 z-70 flex items-center justify-center p-4 md:p-10 bg-[#1D1A1F]/60 backdrop-blur-md transition-all">

                                {/* Janela do Modal - Definimos max-w-4xl (mais largo) e h-[85vh] (mais alto) */}
                                <div className="bg-white w-full max-w-4xl h-[85vh] rounded-[40px] md:rounded-[60px] shadow-2xl relative overflow-hidden flex flex-col animate-modalIn">

                                    {/* Cabeçalho Fixo */}
                                    <div className="p-6 md:p-8 border-b border-[#F6EEF5] flex justify-between items-center bg-white">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-[#1D1A1F]">Avaliar Atendimento</h3>
                                            <p className="text-[10px] text-[#6E5483] font-bold uppercase tracking-widest mt-1">Sua opinião é fundamental</p>
                                        </div>
                                        <button
                                            onClick={() => setIsFeedbackOpen(false)}
                                            className="p-3 bg-[#FBF8FB] rounded-full text-gray-400 hover:text-[#553C6A] transition-all"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    {/* Container do Iframe - O segredo está no flex-1 */}
                                    <div className="flex-1 w-full bg-[#FBF8FB] relative overflow-hidden">
                                        <iframe
                                            src="https://docs.google.com/forms/d/e/1FAIpQLSeYE6CzUdx54C_XfoYa5Bh_syk1F5jlv98a0mTSwfT41lJNrQ/viewform?usp=dialog"
                                            /* w-full h-full aqui só funciona se o pai (a div acima) 
                                               tiver uma altura definida ou for flex-1 dentro de um pai com altura.
                                            */
                                            className="absolute inset-0 w-full h-full border-none"
                                            title="Formulário de Avaliação Consultorio Dra."
                                        >
                                            Carregando…
                                        </iframe>
                                    </div>

                                    {/* Rodapé Fixo (Opcional, dá um acabamento melhor) */}
                                    <div className="p-4 bg-white border-t border-[#F6EEF5] text-center">
                                        <p className="text-[9px] text-gray-400 uppercase tracking-[2px]">
                                            Privacidade garantida
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Testimonials;