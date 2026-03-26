import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const faqs = [
    {
        question: "Como funciona a primeira consulta?",
        answer: "A primeira sessão é uma avaliação detalhada (anamnese), onde conversamos sobre o histórico, queixas principais e realizamos testes iniciais para traçar o plano terapêutico personalizado."
    },
    {
        question: "Vocês atendem convênios?",
        answer: "Trabalhamos no modelo particular, fornecendo recibos e documentação completa para que você solicite o reembolso integral ou parcial junto ao seu plano de saúde."
    },
    {
        question: "Qual a duração média das sessões?",
        answer: "As sessões individuais duram entre 40 a 50 minutos, garantindo foco total no desenvolvimento do paciente em cada encontro."
    }
];

const Resources = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="recursos" className="scroll-mt-24 py-24 bg-white">
            <div className="max-w-[1100px] mx-auto px-6">

                {/* Layout em Grid 2 Colunas: Título à esquerda, Conteúdo à direita */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Lado Esquerdo: Título e Orientações rápidas */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black tracking-tighter text-[#1D1A1F]">
                                Recursos para <br />
                                <span className="text-[#6E5483]">o Paciente</span>
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                                Informações essenciais para sua primeira visita e orientações sobre o processo terapêutico.
                            </p>
                        </div>

                        {/* Checklist de Preparação - Substituindo o card escuro */}
                        <div className="space-y-4 pt-4">
                            <p className="text-[10px] font-bold uppercase tracking-[2px] text-gray-400">Preparação para Consulta</p>
                            <ul className="space-y-3">
                                {[
                                    "Trazer exames auditivos anteriores",
                                    "Relatórios de outros especialistas",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                        <CheckCircle2 size={16} className="text-[#6E5483]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Lado Direito: FAQ Minimalista */}
                    <div className="lg:col-span-7">
                        <div className="divide-y divide-gray-100 border-t border-gray-100">
                            {faqs.map((faq, index) => (
                                <div key={index} className="py-2">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex items-center justify-between py-6 text-left group"
                                    >
                                        <span className="text-lg font-bold text-[#1D1A1F] group-hover:text-[#6E5483] transition-colors">
                                            {faq.question}
                                        </span>
                                        <span className={`text-xl transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-[#6E5483]' : 'text-gray-300'}`}>
                                            +
                                        </span>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-sm text-gray-500 leading-relaxed pr-8">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Resources;