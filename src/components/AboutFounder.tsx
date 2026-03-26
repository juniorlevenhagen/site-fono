const AboutFounder = () => {
    return (

        <section className="py-24 px-12 md:px-24 bg-white w-full border-t border-[#F6EEF5]">

            <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-32 w-full">

                {/* LADO ESQUERDO: Imagem e Experiência */}
                <div className="w-full lg:w-[30%] relative">
                  

                    <div className="relative rounded-[50px] overflow-hidden border border-[#F6EEF5] transition-transform duration-700 hover:scale-[1.01] ">
                        <img
                            src="/public/imagens/rose_perfil.png"
                            alt="Dra. Roseli Assis Bernardes"
                            className="w-full aspect-4/5 object-cover grayscale-20 transition-all duration-700"
                        />
                    </div>

                    {/* Badge de Experiência: Agora mais integrada ao design do site */}
                    <div className="absolute -bottom-6 -right-6 bg-[#553C6A] text-white p-8 rounded-[40px] shadow-2xl flex flex-col items-center border-4 border-white">
                        <span className="text-4xl font-bold italic tracking-tighter leading-none">22</span>
                        <div className="flex flex-col items-center mt-1">
                            <span className="text-[9px] uppercase tracking-[3px] font-bold opacity-80 leading-none">Anos de</span>
                            <span className="text-[9px] uppercase tracking-[3px] font-bold opacity-80 mt-1">Trajetória</span>
                        </div>
                    </div>
                </div>

                {/* LADO DIREITO: História e Formação (Alinhado à Esquerda como o resto do site) */}
                <div className="w-full lg:w-[60%] space-y-12">
                    <div className="space-y-6">
                        <span className="inline-block bg-[#EEDDF6]/60 px-5 py-2 rounded-full text-[10px] font-bold text-[#553C6A] tracking-[3px] uppercase">
                            Idealizadora e Especialista
                        </span>

                        <h2 className="text-5xl md:text-7xl font-bold text-[#1D1A1F] tracking-tighter leading-[0.95]">
                            Dra. Roseli Assis <br />
                            <span className="text-[#6E5483] italic font-medium">Bernardes</span>
                        </h2>
                    </div>

                    <div className="space-y-8">
                        <p className="text-gray-600 text-xl leading-relaxed max-w-2xl font-light">
                            Com mais de duas décadas de atuação ininterrupta, Roseli acredita que o cuidado fonoaudiológico deve ser tão único quanto o paciente.
                        </p>

                        <div className="w-full h-px bg-linear-to-r from-[#F6EEF5] to-transparent"></div>

                        <div className="prose prose-gray max-w-3xl">
                            <p className="text-gray-500 text-base leading-relaxed">
                                Especialista em <strong>Disfagia Hospitalar</strong> e <strong>Neuropsicologia</strong>, Roseli dedica sua carreira à reabilitação de funções vitais e ao desenvolvimento da comunicação humana, sendo referência em Baependi e região há 22 anos. Sua atuação abrange desde o cuidado neonatal até o suporte em distúrbios neurodegenerativos.
                            </p>
                        </div>
                    </div>

                    {/* GRID DE QUALIFICAÇÕES: Ajustado para ser mais clean */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 pt-4">
                        {[
                            { label: "Alta Especialização", desc: "Pós-graduada em Disfagia Hospitalar e Neuropsicologia." },
                            { label: "Atuação Consolidada", desc: "Referência com consultório particular em Baependi há 22 anos." },
                            { label: "Trajetória Pública", desc: "17 anos de atuação na rede pública e atendimentos via NASF." },
                            { label: "Experiência APAE", desc: "7 anos dedicados à reabilitação na APAE de Lambari-MG." }
                        ].map((item, i) => (
                            <div key={i} className="space-y-2 border-l-2 border-[#F6EEF5] pl-6 hover:border-[#6E5483] transition-colors duration-500">
                                <h4 className="font-bold text-[#1D1A1F] text-xs uppercase tracking-widest">{item.label}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Frase Final de Impacto */}
                    <div className="pt-8">
                        <p className="text-[#553C6A] font-serif italic text-2xl max-w-xl">
                            &ldquo;A ciência nos dá a técnica, mas a sensibilidade é o que nos permite transformar vidas através da comunicação.&ldquo;
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutFounder