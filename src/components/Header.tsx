import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-100 w-full bg-[#fafaf5] md:bg-[#fafaf5]/90 border-b border-gray-100">
      <div className="max-w-full mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">

          {/* Logo Identidade Pessoal */}
          <div className="flex flex-col leading-none cursor-pointer">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-[#1D1A1F]">
              ROSELI <span className="text-[#6E5483]">BERNARDES</span>
            </span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[2px] md:tracking-[3px] font-bold text-gray-400 mt-1">
              Fonoaudiologia Especializada
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8 text-[13px] font-semibold uppercase tracking-wider">
            <a href="#servicos" className="text-gray-500 hover:text-[#6E5483] transition-colors">Serviços</a>
            <a href="#sobre" className="text-gray-500 hover:text-[#6E5483] transition-colors">Sobre Nós</a>
            <a href="#recursos" className="text-gray-500 hover:text-[#6E5483] transition-colors">Recursos</a>
            <a
              href="https://wa.me/5535997329063"
              className="bg-[#553C6A] text-white px-6 py-3 rounded-full hover:bg-[#28103C] transition-all text-xs font-bold uppercase"
            >
              Agendar
            </a>
          </div>

          {/* Botão Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col items-end justify-center w-10 h-10 gap-1.5 cursor-pointer"
          >
            <div className={`h-0.5 bg-[#1D1A1F] transition-all duration-300 ${open ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></div>
            <div className={`h-0.5 bg-[#1D1A1F] transition-all duration-300 ${open ? 'opacity-0' : 'w-6'}`}></div>
            <div className={`h-0.5 bg-[#6E5483] transition-all duration-300 ${open ? 'w-6 -rotate-45 -translate-y-2' : 'w-4'}`}></div>
          </button>
        </div>

        {/* MENU MOBILE COMPACTO - Não ocupa a tela toda */}
        <div className={`
          md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-[#fafaf5]
          ${open ? 'max-h-[400px] border-t border-gray-100 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="flex flex-col py-6 space-y-5">
            <a href="#servicos" onClick={closeMenu} className="text-sm font-bold text-[#1D1A1F] uppercase tracking-widest px-2">
              Serviços
            </a>
            <a href="#sobre" onClick={closeMenu} className="text-sm font-bold text-[#1D1A1F] uppercase tracking-widest px-2">
              Sobre Nós
            </a>
            <a href="#recursos" onClick={closeMenu} className="text-sm font-bold text-[#1D1A1F] uppercase tracking-widest px-2">
              Recursos
            </a>
            <div className="pt-4">
              <a
                href="https://wa.me/5535997329063"
                className="bg-[#553C6A] text-white text-center py-4 rounded-xl font-bold text-xs uppercase tracking-widest block w-full shadow-md"
              >
                Agendar WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;