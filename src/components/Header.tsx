import { useState } from "react";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/60 backdrop-blur-md border-b border-white/5 ${className ?? ""}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-lg font-bold tracking-widest uppercase">
          <span className="text-[#e10600]">Lumiete</span> Auto
        </a>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#catalog" className="text-white/80 hover:text-[#e10600] transition-colors duration-300 uppercase text-xs tracking-wider font-medium">
            Каталог
          </a>
          <a href="#about" className="text-white/80 hover:text-[#e10600] transition-colors duration-300 uppercase text-xs tracking-wider font-medium">
            О нас
          </a>
          <a href="#reviews" className="text-white/80 hover:text-[#e10600] transition-colors duration-300 uppercase text-xs tracking-wider font-medium">
            Отзывы
          </a>
          <a href="#contact" className="text-white/80 hover:text-[#e10600] transition-colors duration-300 uppercase text-xs tracking-wider font-medium">
            Контакты
          </a>
          <a href="#contact" className="bg-[#e10600] text-white px-5 py-2 text-xs uppercase tracking-wider font-semibold hover:bg-[#ff1a14] transition-colors duration-300">
            Связаться
          </a>
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>
      {mobileOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
          <a href="#catalog" onClick={() => setMobileOpen(false)} className="text-white/80 hover:text-[#e10600] transition-colors uppercase text-sm tracking-wider">Каталог</a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="text-white/80 hover:text-[#e10600] transition-colors uppercase text-sm tracking-wider">О нас</a>
          <a href="#reviews" onClick={() => setMobileOpen(false)} className="text-white/80 hover:text-[#e10600] transition-colors uppercase text-sm tracking-wider">Отзывы</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="text-white/80 hover:text-[#e10600] transition-colors uppercase text-sm tracking-wider">Контакты</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="bg-[#e10600] text-white px-5 py-2 text-xs uppercase tracking-wider font-semibold text-center hover:bg-[#ff1a14] transition-colors w-fit">Связаться</a>
        </nav>
      )}
    </header>
  );
}
