import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/6bf7c36b-a7f2-4cbe-944b-d5d430ab188c/files/7d8716ae-2d66-4c8a-8d2f-ca8f0f7fdd4c.jpg"
          alt="Lumiete Auto showroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center text-white px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#e10600] uppercase tracking-[0.3em] text-sm mb-6 font-medium"
        >
          Премиальные электромобили будущего
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6"
        >
          LUMIETE <span className="text-[#e10600]">AUTO</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl max-w-2xl mx-auto opacity-80 mb-10"
        >
          Эксклюзивные модели. Максимальная мощность. Абсолютный комфорт.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#catalog"
            className="bg-[#e10600] text-white px-8 py-3 uppercase text-sm tracking-wider font-semibold hover:bg-[#ff1a14] transition-all duration-300 hover:scale-105"
          >
            Смотреть каталог
          </a>
          <a
            href="#contact"
            className="border border-white/40 text-white px-8 py-3 uppercase text-sm tracking-wider font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Связаться
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-3 bg-[#e10600] rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}
