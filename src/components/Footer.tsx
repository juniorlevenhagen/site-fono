import { MapPin, MessageCircle, Clock } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/5 bg-[#1D1A1F] px-12 pb-10 pt-24 text-white md:px-24">
            <div className="mx-auto max-w-[1300px]">
                <div className="flex flex-col gap-20 pb-20 lg:flex-row lg:gap-32">
                    <div className="w-full space-y-10 lg:w-1/3">
                        <div className="space-y-6">
                            {/* MARCA PESSOAL - Ajustada para o fundo escuro */}
                            <div className="flex flex-col leading-none">
                                <span className="text-2xl font-black tracking-tighter text-white">
                                    ROSELI <span className="text-[#6E5483]">BERNARDES</span>
                                </span>
                                <span className="text-[9px] uppercase tracking-[3px] font-bold text-[#6E5483] mt-2">
                                    Fonoaudiologia Especializada
                                </span>
                            </div>
                            <p className="max-w-xs text-sm leading-relaxed text-gray-500">
                                Ciência e sensibilidade dedicadas à comunicação humana em todas as fases da vida.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* INSTAGRAM EM DESTAQUE */}
                            <a 
                                href="https://www.instagram.com/rosefono67" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group flex items-center gap-5 p-2 -ml-2 rounded-2xl hover:bg-white/5 transition-all duration-500"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-tr from-[#553C6A] via-[#6E5483] to-[#EEDDF6]/20 shadow-lg transition-transform duration-500 group-hover:scale-110">
                                    <FaInstagram className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#6E5483]">Acompanhe no Instagram</p>
                                    <p className="text-sm font-medium text-gray-200 transition-colors group-hover:text-white">@rosefono67</p>
                                </div>
                            </a>

                            {/* WHATSAPP */}
                            <a
                                href="https://wa.me/5535997329063"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-5 p-2 -ml-2"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 transition-all group-hover:bg-[#553C6A]">
                                    <MessageCircle size={24} className="text-[#6E5483] group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-gray-600">Agendamentos via WhatsApp</p>
                                    <span className="text-sm font-medium text-gray-300 transition-colors group-hover:text-white">
                                        (35) 99732-9063
                                    </span>
                                </div>
                            </a>

                            {/* HORÁRIO */}
                            <div className="flex items-center gap-5 p-2 -ml-2">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
                                    <Clock size={24} className="text-[#6E5483]" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-gray-600">Horário de Atendimento</p>
                                    <span className="text-sm text-gray-300">Segunda a Sexta — 08h às 18h</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUNA DO MAPA */}
                    <div className="flex w-full flex-col gap-12 md:flex-row lg:w-2/3">
                        <div className="space-y-6 md:w-1/2">
                            <div className="inline-block rounded-full border border-[#553C6A] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[2px] text-[#6E5483]">
                                Onde estamos
                            </div>
                            <div className="space-y-2">
                                <p className="text-xl font-bold text-gray-200">Baependi, MG</p>
                                <p className="text-sm leading-relaxed text-gray-500">
                                    Rua Dr. Tomás de Almeida, nº 53 <br />
                                    Centro — CEP: 37443-000 <br />
                                
                                </p>
                            </div>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#6E5483] transition-colors hover:text-white"
                            >
                                <MapPin size={14} />
                                Ver no Google Maps
                            </a>
                        </div>

                        <div className="h-64 overflow-hidden rounded-[40px] border border-white/5 shadow-2xl grayscale-60 transition-all duration-700 hover:grayscale-0 md:w-1/2">
                            <iframe
                                title="Localização Roseli Bernardes"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.034372545934!2d-44.89134762391217!3d-22.1627918115664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e0839e31d4d67%3A0x6b8a8b8b8b8b8b8b!2sR.%20Dr.%20Tom%C3%A1s%20de%20Almeida%2C%2053%2C%20Baependi%20-%20MG%2C%2037443-000!5e0!3m2!1spt-BR!2sbr!4v1711412345678!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>

                {/* RODAPÉ TÉCNICO */}
                <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 md:flex-row">
                    <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                            Roseli Assis Bernardes — CRFa 4909
                        </p>
                        <span className="hidden md:block w-1 h-1 bg-gray-800 rounded-full"></span>
                        <p className="text-[10px] text-gray-600">
                            © {year} Roseli Bernardes. Todos os direitos reservados.
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-[9px] font-bold uppercase tracking-[3px] text-gray-700">Design by</span>
                        <span className="text-[10px] font-black tracking-tighter text-gray-400"><a href="https://www.elevenweb.dev">ELEVEN</a></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;