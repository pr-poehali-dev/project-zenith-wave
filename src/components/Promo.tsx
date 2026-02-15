import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/6bf7c36b-a7f2-4cbe-944b-d5d430ab188c/files/09695649-f150-47d2-91fb-aad762351336.jpg"
            alt="Electric car at night"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-[#e10600] uppercase z-10 text-sm md:text-base tracking-[0.2em] font-medium">
        Почему выбирают нас
      </h3>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          15 эксклюзивных моделей. <br />
          <span className="text-[#e10600]">Один премиальный сервис.</span>
        </p>
      </div>

      <p className="absolute bottom-12 right-6 text-white/60 text-sm md:text-base max-w-xs sm:max-w-md z-10 text-right">
        От Tesla до Lucid Air — только лучшие электромобили мира с полной гарантией и доставкой.
      </p>
    </div>
  );
}
