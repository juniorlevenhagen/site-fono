import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  // Função para fechar o menu mobile ao clicar em um link
  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#fafaf5]/80 backdrop-blur-md border-b border-gray-100 text-gray-600">
      <div className="max-w-full mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">

          {/* Logo Identidade Pessoal */}
          <div className="flex flex-col leading-none cursor-pointer group">
            <span className="text-2xl font-black tracking-tighter text-[#1D1A1F] transition-colors">
              ROSELI <span className="text-[#6E5483]">BERNARDES</span>
            </span>
            <span className="text-[9px] uppercase tracking-[3px] font-bold text-gray-400 mt-1.5 transition-all">
              Fonoaudiologia Especializada
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-10 text-[15px] font-semibold uppercase tracking-wider">
            <a
              href="#servicos"
              className="text-gray-500 hover:text-[#6E5483] transition-colors duration-300"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="text-gray-500 hover:text-[#6E5483] transition-colors duration-300"
            >
              Sobre Nós
            </a>
            <a
              href="#recursos"
              className="text-gray-500 hover:text-[#6E5483] transition-colors duration-300"
            >
              Recursos
            </a>
            {/* No seu Header.tsx */}
            <a
              href="https://wa.me/5535997329063?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Dra.%20Roseli%20e%20gostaria%20de%20marcar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#553C6A] text-white px-8 py-3 rounded-full hover:bg-[#28103C] transition-all shadow-lg active:scale-95 text-xs font-semibold uppercase tracking-wider"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Botão Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#1D1A1F] p-2"
          >
            {open ? (
              <span className="text-2xl">✕</span>
            ) : (
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-[#1D1A1F]"></div>
                <div className="w-6 h-0.5 bg-[#1D1A1F]"></div>
                <div className="w-4 h-0.5 bg-[#6E5483]"></div>
              </div>
            )}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {open && (
          <div className="md:hidden pb-8 space-y-6 border-t border-gray-100 pt-6 bg-[#fafaf5] absolute left-0 w-full px-6 shadow-xl animate-in fade-in slide-in-from-top-4">
            <a href="#servicos" onClick={closeMenu} className="block text-lg font-medium text-gray-700">
              Serviços
            </a>
            <a href="#sobre" onClick={closeMenu} className="block text-lg font-medium text-gray-700">
              Sobre Nós
            </a>
            <a href="#recursos" onClick={closeMenu} className="block text-lg font-medium text-gray-700">
              Recursos para Pacientes
            </a>
            <a
              href="#contato"
              onClick={closeMenu}
              className="block bg-[#553C6A] text-white text-center py-4 rounded-xl font-bold"
            >
              Falar no WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;