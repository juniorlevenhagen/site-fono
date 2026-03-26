const AboutLifespan = () => {
    return (
        /* Estrutura Principal: Mantivemos o w-full e px-12 md:px-24 para alinhar com o Hero */
        <section className="py-24 px-12 md:px-24 bg-white overflow-hidden w-full relative">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full">

                {/* LADO ESQUERDO: Texto (Largura flexível) */}
                <div className="w-full lg:w-[45%] flex flex-col gap-10">
                    <div className="space-y-6">
                        <span className="inline-block bg-[#F6EEF5] px-4 py-1.5 rounded-full text-[10px] font-bold text-[#553C6A] tracking-[2px] uppercase">
                            Resultados Reais
                        </span>

                        <h2 className="text-5xl md:text-6xl font-bold text-[#1D1A1F] leading-[1.1] tracking-tighter">
                            Comunicação Plena em <br />
                            <span className="text-[#6E5483] italic font-medium">Qualquer Momento.</span>
                        </h2>

                        <p className="text-gray-600 leading-relaxed text-lg max-w-2xl">
                            Superar desafios de fala, audição ou escrita não tem idade. Nossa missão é remover as barreiras que limitam sua expressão, garantindo que você seja ouvido e compreendido com clareza.
                        </p>
                    </div>

                    {/* GRID DE RESULTADOS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { label: "Desenvolvimento", text: "Linguagem e fala na infância" },
                            { label: "Performance", text: "Voz e dicção para adultos" },
                            { label: "Socialização", text: "Confiança para interagir e se expressar" },
                            { label: "Aprendizado", text: "Suporte em leitura e escrita" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 rounded-[35px] bg-[#F6EEF5]/40 border border-transparent hover:border-[#EEDDF6] transition-all group cursor-default">
                                <div className="mt-1.5 w-2 h-2 rounded-full bg-[#6E5483] group-hover:scale-150 transition-transform shrink-0"></div>
                                <div>
                                    <h4 className="font-bold text-[#553C6A] text-sm uppercase tracking-wider">{item.label}</h4>
                                    <p className="text-sm text-gray-500 leading-snug">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* LADO DIREITO: Imagem e Badge (Com Alinhamento Corrigido) */}
                <div className="w-full lg:w-[50%] relative flex justify-center items-center lg:justify-end">

                    {/* Elemento Geométrico de Fundo */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#EEDDF6]/30 rounded-full blur-3xl z-0"></div>

                    {/* Moldura da Imagem - Dica: Use uma foto real e calorosa aqui */}
                    <div className="relative w-full max-w-[600px] aspect-4/5 rounded-[70px] overflow-hidden shadow-2xl border-12 border-white z-10 transition-transform duration-700 hover:rotate-1">
                        {/* Espaço para sua foto real */}
                        <div className="w-full h-full bg-[#EEDDF6] flex items-center justify-center text-gray-400 italic">
                            <img
                                src="/imagens/pexels-matvalina-17049455.jpg"
                                alt="Atendimento Fonoaudiológico na Clínica"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* BADGE DE MISSÃO: O Ajuste do Alinhamento Premium
                       Movemos ela do canto inferior esquerdo (-left-12) para o canto superior esquerdo (top-12 md:left-12).
                       Usamos md:left-12 para garantir que ela fique sempre dentro da área de conteúdo (alinhada com o respiro do Hero).
                       Adicionei md:block para ela só aparecer em telas médias e grandes.
                    */}
                    <div className="absolute top-12 md:top-20 md:left-25 md:block bg-white p-8 rounded-[40px] shadow-2xl z-20 border border-[#F6EEF5] hover:scale-110 transition-transform animate-float">
                        <div className="w-10 h-1 bg-[#6E5483] mb-4 rounded-full"></div>
                        <p className="text-[#553C6A] font-bold text-xs uppercase tracking-[3px] mb-2">Nossa Missão</p>
                        <p className="text-gray-500 text-xs leading-relaxed max-w-[160px]">Transformar vidas através da excelência clínica e humana.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutLifespan