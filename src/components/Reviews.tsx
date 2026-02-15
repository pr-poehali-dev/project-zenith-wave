import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Алексей К.",
    car: "Tesla Model S",
    text: "Невероятный сервис! Автомобиль доставили за 2 недели, всё в идеальном состоянии. Рекомендую Lumiete Auto всем!",
    rating: 5,
  },
  {
    name: "Марина В.",
    car: "Porsche Taycan",
    text: "Оформление прошло быстро и прозрачно. Менеджер помог с лизингом — условия оказались лучше, чем в банке.",
    rating: 5,
  },
  {
    name: "Дмитрий Л.",
    car: "BMW i7",
    text: "Третий автомобиль беру в Lumiete Auto. Уровень сервиса на высоте, trade-in оценили справедливо.",
    rating: 5,
  },
  {
    name: "Елена С.",
    car: "Mercedes EQS",
    text: "Долго выбирала между салонами. Здесь и цена приятнее, и подход индивидуальный. Очень довольна покупкой!",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#0a0a0a] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-[#e10600] uppercase text-sm tracking-[0.2em] mb-4 font-medium">Отзывы</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Нам доверяют</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-6 md:p-8 hover:border-[#e10600]/30 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Icon key={j} name="Star" size={16} className="text-[#e10600] fill-[#e10600]" />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">"{review.text}"</p>
              <div>
                <p className="text-white font-semibold text-sm">{review.name}</p>
                <p className="text-white/40 text-xs">{review.car}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
