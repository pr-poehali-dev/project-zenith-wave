import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const advantages = [
  { icon: "ShieldCheck", title: "Официальные поставки", desc: "Прямые контракты с производителями" },
  { icon: "Award", title: "Гарантия", desc: "Полная гарантия от производителя" },
  { icon: "Wallet", title: "Лизинг и кредит", desc: "Выгодные программы финансирования" },
  { icon: "ArrowLeftRight", title: "Trade-in", desc: "Обменяйте старый авто на новый" },
  { icon: "Truck", title: "Доставка", desc: "По России и Европе" },
];

export default function Featured() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[#e10600] uppercase text-sm tracking-[0.2em] mb-4 font-medium">О салоне</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Будущее начинается здесь
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-4">
              Lumiete Auto — это премиальный автосалон по продаже эксклюзивных электромобилей. Мы предлагаем только проверенные модели мировых брендов.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Гарантируем высокий уровень сервиса, индивидуальный подход и быструю доставку по всей России и Европе.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-[500px]"
          >
            <img
              src="https://cdn.poehali.dev/projects/6bf7c36b-a7f2-4cbe-944b-d5d430ab188c/files/86c21afc-bd78-460a-9fe1-5d6675b4b90f.jpg"
              alt="Lumiete Auto showroom interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-6 text-center hover:border-[#e10600]/40 transition-colors duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-[#e10600]">
                <Icon name={item.icon} size={28} />
              </div>
              <h4 className="text-white text-sm font-semibold mb-2">{item.title}</h4>
              <p className="text-white/40 text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
