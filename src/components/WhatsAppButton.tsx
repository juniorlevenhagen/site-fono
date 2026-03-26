import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = "5535997329063";
    const message = encodeURIComponent("Olá, estou no site da Dra. Roseli e gostaria de agendar uma consulta.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-60 group flex items-center"
            aria-label="Agendar consulta pelo WhatsApp"
        >
            {/* Texto que aparece no Hover (Desktop) */}
            <span className="mr-3 overflow-hidden max-w-0 opacity-0 transition-all duration-500 group-hover:max-w-xs group-hover:opacity-100 bg-white text-[#1D1A1F] text-[10px] font-bold uppercase tracking-[2px] px-4 py-2 rounded-full shadow-xl border border-gray-100 whitespace-nowrap">
                Agendar Consulta
            </span>

            {/* Botão Principal */}
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#553C6A] text-white shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95">

                {/* Anel de Pulsação - Ativado apenas no HOVER do grupo */}
                <div className="absolute inset-0 rounded-full bg-[#6E5483] opacity-0 transition-all duration-500 group-hover:animate-ping group-hover:opacity-40"></div>

                {/* Ícone */}
                <MessageCircle size={28} strokeWidth={1.5} className="relative z-10" />
            </div>
        </a>
    );
};

export default WhatsAppButton;