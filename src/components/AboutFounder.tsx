const AboutFounder = () => {
    return (
        /* Padding responsivo: px-6 no mobile para o texto respirar, md:px-24 no desktop */
        <section className="py-16 md:py-24 px-6 sm:px-12 md:px-24 bg-[#FBF8FB] w-full border-t border-[#F6EEF5]">

            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-32 w-full">

                {/* LADO ESQUERDO: Imagem e Experiência */}
                <div className="hidden lg:block w-full lg:w-[30%] relative group ">
                    <div className="relative rounded-[40px] lg:rounded-[50px] overflow-hidden border border-[#F6EEF5] transition-transform duration-700 hover:scale-[1.01] ">
                        <img
                            src="/imagens/rose_perfil.png"
                            alt="Dra. Roseli Assis Bernardes"
                            className="w-full aspect-4/5 object-cover grayscale-20 transition-all duration-700 group-hover:grayscale-0"
                        />
                    </div>

                    {/* Badge de Experiência: Travada com lg: para garantir o Desktop Original */}
                    <div className="absolute -bottom-2 -right-2 lg:-bottom-6 lg:-right-6 bg-[#553C6A] text-white p-5 lg:p-8 rounded-[30px] lg:rounded-[40px] shadow-2xl flex flex-col items-center border-4 border-white z-20">
                        <span className="text-3xl lg:text-4xl font-bold italic tracking-tighter leading-none">22</span>
                        <div className="flex flex-col items-center mt-1">
                            <span className="text-[8px] lg:text-[9px] uppercase tracking-[2px] lg:tracking-[3px] font-bold opacity-80 leading-none">Anos de</span>
                            <span className="text-[8px] lg:text-[9px] uppercase tracking-[2px] lg:tracking-[3px] font-bold opacity-80 mt-1">Trajetória</span>
                        </div>
                    </div>
                </div>

                {/* LADO DIREITO: História e Formação */}
                {/* LADO DIREITO: História e Formação
   Ajuste 1: Transformei este container em um Flexbox Vertical no mobile.
   Isso permite usar a propriedade 'order' nos elementos internos.
*/}
                <div className="w-full lg:w-[60%] flex flex-col space-y-8 lg:space-y-12">

                    {/* Bloco 1: Título (Order 1 no Mobile) */}
                    <div className="space-y-4 lg:space-y-6 order-1 lg:order-0">
                        <span className="inline-block bg-[#EEDDF6]/60 px-5 py-2 rounded-full text-[9px] lg:text-[10px] font-bold text-[#553C6A] tracking-[2px] lg:tracking-[3px] uppercase">
                            Idealizadora e Especialista
                        </span>

                        <h2 className="text-4xl lg:text-7xl font-bold text-[#1D1A1F] tracking-tighter leading-none lg:leading-[0.95]">
                            Dra. Roseli Assis <br />
                            <span className="text-[#6E5483] italic font-medium">Bernardes</span>
                        </h2>
                    </div>

                    {/* Bloco 2: Frase Introdutória (Order 2 no Mobile) */}
                    <div className="space-y-6 lg:space-y-8 order-2 lg:order-0">
                        {/* Esta frase ficará colada ACIMA da foto no mobile */}
                        <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-2xl font-light">
                            Com mais de duas décadas de atuação ininterrupta, Roseli acredita que o cuidado fonoaudiológico deve ser tão único quanto o paciente.
                        </p>

                        {/* Divisor Desktop (Oculto no mobile para não duplicar vácuo) */}
                        <div className="hidden lg:block w-full h-px bg-linear-to-r from-[#F6EEF5] to-transparent"></div>
                    </div>

                    {/* FOTO E EXPERIÊNCIA (Order 3 no Mobile)
       O segredo: Duplicamos a foto AQUI, mas ela só aparece no mobile.
       Usamos 'block lg:hidden' para que ela substitua a coluna da esquerda apenas em telas pequenas.
    */}
                    <div className="block lg:hidden w-full relative group -mt-8 order-3 lg:order-0 z-10">
                        <div className="relative rounded-[40px] overflow-hidden border border-[#F6EEF5] transition-transform duration-700 hover:scale-[1.01]">
                            <img
                                src="/imagens/rose_perfil.png"
                                alt="Dra. Roseli Assis Bernardes"
                                className="w-full aspect-4/5 object-cover grayscale-20 transition-all duration-700 group-hover:grayscale-0"
                            />
                        </div>

                        {/* Badge de Experiência Mobile */}
                        <div className="absolute -bottom-2 -right-2 bg-[#553C6A] text-white p-5 rounded-[30px] shadow-2xl flex flex-col items-center border-4 border-white z-20">
                            <span className="text-3xl font-bold italic tracking-tighter leading-none">22</span>
                            <div className="flex flex-col items-center mt-1">
                                <span className="text-[8px] uppercase tracking-[2px] font-bold opacity-80 leading-none">Anos de</span>
                                <span className="text-[8px] uppercase tracking-[2px] font-bold opacity-80 mt-1">Trajetória</span>
                            </div>
                        </div>
                    </div>

                    {/* Bloco 3: Prose/Formação (Order 4 no Mobile) */}
                    <div className="prose prose-gray max-w-3xl order-4 lg:order-0">
                        <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
                            Especialista em <strong>Disfagia e Fonoaudiologia Hospitalar</strong>, com atuação em <strong>disfagia neonatal, adulta e geriátrica</strong>, Roseli dedica sua carreira à reabilitação de funções vitais e ao desenvolvimento da comunicação humana.
                            Referência em Baependi e região há mais de 22 anos, sua prática abrange desde o cuidado neonatal até o suporte a pacientes com distúrbios neurológicos e neurodegenerativos.
                        </p>
                    </div>

                    {/* Bloco 4: GRID DE QUALIFICAÇÕES (Order 5 no Mobile) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 lg:gap-y-10 gap-x-12 pt-4 order-5 lg:order-0">
                        {[
                            { label: "Alta Especialização", desc: "Pós-graduada em Disfagia Hospitalar e Neuropsicologia." },
                            { label: "Atuação Consolidada", desc: "Referência com consultório particular em Baependi há 22 anos." },
                            { label: "Trajetória Pública", desc: "17 anos de atuação na rede pública e atendimentos via NASF." },
                            { label: "Experiência APAE", desc: "7 anos dedicados à reabilitação na APAE de Lambari-MG." }
                        ].map((item, i) => (
                            <div key={i} className="space-y-2 border-l-2 border-[#F6EEF5] pl-6 hover:border-[#6E5483] transition-colors duration-500">
                                <h4 className="font-bold text-[#1D1A1F] text-[10px] lg:text-xs uppercase tracking-widest">{item.label}</h4>
                                <p className="text-xs lg:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Bloco 5: Frase Final de Impacto (Order 6 no Mobile) */}
                    <div className="pt-4 lg:pt-8 order-6 lg:order-0">
                        <p className="text-[#553C6A] font-serif italic text-xl lg:text-2xl max-w-xl leading-relaxed">
                            &ldquo;A ciência nos dá a técnica, mas a sensibilidade é o que nos permite transformar vidas através da comunicação.&ldquo;
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutFounder;