import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-[#0a0a0a] py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-white/30 text-xs sm:text-sm tracking-wider">Навигация</h3>
                <a href="#catalog" className="text-white/70 hover:text-[#e10600] transition-colors duration-300 text-sm sm:text-base">
                  Каталог
                </a>
                <a href="#about" className="text-white/70 hover:text-[#e10600] transition-colors duration-300 text-sm sm:text-base">
                  О нас
                </a>
                <a href="#contact" className="text-white/70 hover:text-[#e10600] transition-colors duration-300 text-sm sm:text-base">
                  Контакты
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-white/30 text-xs sm:text-sm tracking-wider">Услуги</h3>
                <span className="text-white/70 text-sm sm:text-base">Лизинг</span>
                <span className="text-white/70 text-sm sm:text-base">Trade-in</span>
                <span className="text-white/70 text-sm sm:text-base">Доставка</span>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-white/30 text-xs sm:text-sm tracking-wider">Соцсети</h3>
                <div className="flex gap-3">
                  <a href="#" className="text-white/70 hover:text-[#e10600] transition-colors">
                    <Icon name="MessageCircle" size={18} />
                  </a>
                  <a href="#" className="text-white/70 hover:text-[#e10600] transition-colors">
                    <Icon name="Send" size={18} />
                  </a>
                  <a href="#" className="text-white/70 hover:text-[#e10600] transition-colors">
                    <Icon name="Instagram" size={18} />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[14vw] sm:text-[12vw] lg:text-[10vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                LUMIETE<span className="text-[#e10600]">.</span>
              </h1>
              <p className="text-white/30 text-sm sm:text-base">{new Date().getFullYear()} Lumiete Auto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
