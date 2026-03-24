import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#fafaf5] text-gray-600">
      {/* 1. Trocamos 'max-w-7xl' por 'max-w-[1440px]' ou 'max-w-full' para espalhar.
          2. Adicionei 'px-6' ou 'px-10' para o conteúdo não grudar no vidro do monitor. 
      */}
      <div className="max-w-full mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {' '}
          {/* Aumentei um pouco a altura (h-20) para dar ar de clínica premium */}
          {/* Logo - Agora bem à esquerda */}
          <div className="text-2xl font-bold tracking-tight text-green-900 cursor-pointer">
            Minha<span className="text-green-600">Marca</span>
          </div>
          {/* Menu desktop */}
          <div className="hidden md:flex items-center gap-10 text-lg font-medium">
            <a
              href="#servicos"
              className="text-gray-600 hover:text-emerald-700 transition-colors duration-300 pb-1 underline-animated"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="text-gray-600 hover:text-emerald-700 transition-colors duration-300 pb-1 underline-animated"
            >
              Sobre Nós
            </a>
            <a
              href="#recursos"
              className="text-gray-600 hover:text-emerald-700 transition-colors duration-300 pb-1 underline-animated"
            >
              Recursos para Pacientes
            </a>
            <a
              href="#contato"
              className="bg-[#553C6A] text-white px-6 py-2.5 rounded-full hover:bg-[#28103C] transition-all shadow-md active:scale-95"
            >
              Contato
            </a>
          </div>
          {/* Botão mobile */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
            {open ? '✕' : '☰'}
          </button>
        </div>

        {/* Menu mobile */}
        {open && (
          <div className="md:hidden pb-6 space-y-4 border-t border-gray-300 pt-4 animate-in slide-in-from-top">
            <a href="#servicos" className="block text-lg px-2">
              Serviços
            </a>
            <a href="#sobre" className="block text-lg px-2">
              Sobre Nós
            </a>
            <a
              href="#contato"
              className="block bg-green-700 text-white text-center py-3 rounded-lg"
            >
              Contato
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
