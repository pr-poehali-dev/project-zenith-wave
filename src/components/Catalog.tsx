import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";

interface Car {
  id: number;
  brand: string;
  model: string;
  price: number;
  image: string;
  range: string;
  power: string;
  acceleration: string;
}

const cars: Car[] = [
  { id: 1, brand: "Tesla", model: "Model S", price: 9800000, image: "https://cdn.poehali.dev/projects/6bf7c36b-a7f2-4cbe-944b-d5d430ab188c/files/7d8716ae-2d66-4c8a-8d2f-ca8f0f7fdd4c.jpg", range: "652 км", power: "670 л.с.", acceleration: "2.1 с" },
  { id: 2, brand: "Tesla", model: "Model 3", price: 6500000, image: "https://cdn.poehali.dev/projects/6bf7c36b-a7f2-4cbe-944b-d5d430ab188c/files/7d8716ae-2d66-4c8a-8d2f-ca8f0f7fdd4c.jpg", range: "602 км", power: "510 л.с.", acceleration: "3.1 с" },
  { id: 3, brand: "Tesla", model: "Model X", price: 10000000, image: "https://cdn.poehali.dev/projects/6bf7c36b-a7f2-4cbe-944b-d5d430ab188c/files/7d8716ae-2d66-4c8a-8d2f-ca8f0f7fdd4c.jpg", range: "576 км", power: "670 л.с.", acceleration: "2.5 с" },
  { id: 4, brand: "Tesla", model: "Model Y", price: 7200000, image: "https://cdn.poehali.dev/projects/6bf7c36b-a7f2-4cbe-944b-d5d430ab188c/files/7d8716ae-2d66-4c8a-8d2f-ca8f0f7fdd4c.jpg", range: "533 км", power: "514 л.с.", acceleration: "3.5 с" },
  { id: 5, brand: "Tesla", model: "Cybertruck", price: 12000000, image: "https://cdn.poehali.dev/projects/6bf7c36b-a7f2-4cbe-944b-d5d430ab188c/files/09695649-f150-47d2-91fb-aad762351336.jpg", range: "547 км", power: "845 л.с.", acceleration: "2.6 с" },
  { id: 6, brand: "Porsche", model: "Taycan", price: 13500000, image: "https://cdn.poehali.dev/projects/6bf7c36b-a7f2-4cbe-944b-d5d430ab188c/files/09695649-f150-47d2-91fb-aad762351336.jpg", range: "510 км", power: "761 л.с.", acceleration: "2.8 с" },
  { id: 7, brand: "Audi", model: "e-tron GT", price: 11800000, image: "https://cdn.poehali.dev/projects/6bf7c36b-a7f2-4cbe-944b-d5d430ab188c/files/09695649-f150-47d2-91fb-aad762351336.jpg", range: "488 км", power: "646 л.с.", acceleration: "3.3 с" },
  { id: 8, brand: "BMW", model: "i7", price: 14200000, image: "https://cdn.poehali.dev/projects/6bf7c36b-a7f2-4cbe-944b-d5d430ab188c/files/86c21afc-bd78-460a-9fe1-5d6675b4b90f.jpg", range: "625 км", power: "544 л.с.", acceleration: "4.5 с" },
  { id: 9, brand: "Mercedes", model: "EQS", price: 13900000, image: "https://cdn.poehali.dev/projects/6bf7c36b-a7f2-4cbe-944b-d5d430ab188c/files/86c21afc-bd78-460a-9fe1-5d6675b4b90f.jpg", range: "770 км", power: "658 л.с.", acceleration: "3.4 с" },
  { id: 10, brand: "Hyundai", model: "Ioniq 5", price: 5900000, image: "https://cdn.poehali.dev/projects/6bf7c36b-a7f2-4cbe-944b-d5d430ab188c/files/86c21afc-bd78-460a-9fe1-5d6675b4b90f.jpg", range: "481 км", power: "325 л.с.", acceleration: "5.1 с" },
  { id: 11, brand: "Kia", model: "EV6", price: 6100000, image: "https://cdn.poehali.dev/projects/6bf7c36b-a7f2-4cbe-944b-d5d430ab188c/files/86c21afc-bd78-460a-9fe1-5d6675b4b90f.jpg", range: "528 км", power: "585 л.с.", acceleration: "3.5 с" },
  { id: 12, brand: "Lucid", model: "Air", price: 15000000, image: "https://cdn.poehali.dev/projects/6bf7c36b-a7f2-4cbe-944b-d5d430ab188c/files/09695649-f150-47d2-91fb-aad762351336.jpg", range: "837 км", power: "1111 л.с.", acceleration: "1.9 с" },
  { id: 13, brand: "Rivian", model: "R1T", price: 11500000, image: "https://cdn.poehali.dev/projects/6bf7c36b-a7f2-4cbe-944b-d5d430ab188c/files/09695649-f150-47d2-91fb-aad762351336.jpg", range: "505 км", power: "835 л.с.", acceleration: "3.0 с" },
  { id: 14, brand: "Ford", model: "Mustang Mach-E", price: 6700000, image: "https://cdn.poehali.dev/projects/6bf7c36b-a7f2-4cbe-944b-d5d430ab188c/files/7d8716ae-2d66-4c8a-8d2f-ca8f0f7fdd4c.jpg", range: "502 км", power: "480 л.с.", acceleration: "3.5 с" },
  { id: 15, brand: "Volkswagen", model: "ID.4", price: 5800000, image: "https://cdn.poehali.dev/projects/6bf7c36b-a7f2-4cbe-944b-d5d430ab188c/files/86c21afc-bd78-460a-9fe1-5d6675b4b90f.jpg", range: "520 км", power: "299 л.с.", acceleration: "5.4 с" },
];

const brands = ["Все", ...Array.from(new Set(cars.map((c) => c.brand)))];
const priceRanges = [
  { label: "Все цены", min: 0, max: Infinity },
  { label: "до 7 млн", min: 0, max: 7000000 },
  { label: "7–12 млн", min: 7000000, max: 12000000 },
  { label: "от 12 млн", min: 12000000, max: Infinity },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
}

export default function Catalog() {
  const [selectedBrand, setSelectedBrand] = useState("Все");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [modalCar, setModalCar] = useState<Car | null>(null);

  const filtered = cars.filter((car) => {
    const brandOk = selectedBrand === "Все" || car.brand === selectedBrand;
    const range = priceRanges[selectedPrice];
    const priceOk = car.price >= range.min && car.price < range.max;
    return brandOk && priceOk;
  });

  return (
    <section id="catalog" className="bg-[#111] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-[#e10600] uppercase text-sm tracking-[0.2em] mb-4 font-medium">Каталог</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Выберите свой электромобиль</h2>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all duration-300 border cursor-pointer ${
                selectedBrand === brand
                  ? "bg-[#e10600] border-[#e10600] text-white"
                  : "border-white/20 text-white/60 hover:border-white/40 hover:text-white"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {priceRanges.map((range, i) => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(i)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all duration-300 border cursor-pointer ${
                selectedPrice === i
                  ? "bg-[#e10600] border-[#e10600] text-white"
                  : "border-white/20 text-white/60 hover:border-white/40 hover:text-white"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((car) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white/5 border border-white/10 overflow-hidden hover:border-[#e10600]/40 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#e10600] text-white text-[10px] uppercase tracking-wider px-3 py-1 font-semibold">
                    {car.brand}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-white text-lg font-bold mb-1">
                    {car.brand} {car.model}
                  </h3>
                  <p className="text-[#e10600] text-xl font-bold mb-4">{formatPrice(car.price)}</p>
                  <div className="flex gap-4 text-white/40 text-xs mb-5">
                    <span className="flex items-center gap-1">
                      <Icon name="Zap" size={12} /> {car.power}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Gauge" size={12} /> {car.acceleration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Route" size={12} /> {car.range}
                    </span>
                  </div>
                  <button
                    onClick={() => setModalCar(car)}
                    className="w-full bg-white/10 text-white py-2.5 text-xs uppercase tracking-wider font-semibold hover:bg-[#e10600] transition-colors duration-300 cursor-pointer"
                  >
                    Заказать
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {filtered.length === 0 && (
          <p className="text-white/40 text-center py-12">Нет автомобилей по выбранным фильтрам</p>
        )}
      </div>

      <AnimatePresence>
        {modalCar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setModalCar(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1a1a1a] border border-white/10 max-w-md w-full overflow-hidden"
            >
              <div className="relative h-48">
                <img src={modalCar.image} alt={modalCar.model} className="w-full h-full object-cover" />
                <button
                  onClick={() => setModalCar(null)}
                  className="absolute top-3 right-3 bg-black/60 text-white w-8 h-8 flex items-center justify-center hover:bg-[#e10600] transition-colors cursor-pointer"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-white text-2xl font-bold mb-1">{modalCar.brand} {modalCar.model}</h3>
                <p className="text-[#e10600] text-2xl font-bold mb-4">{formatPrice(modalCar.price)}</p>
                <div className="flex gap-6 text-white/60 text-sm mb-6">
                  <div className="flex items-center gap-2"><Icon name="Zap" size={16} /> {modalCar.power}</div>
                  <div className="flex items-center gap-2"><Icon name="Gauge" size={16} /> {modalCar.acceleration}</div>
                  <div className="flex items-center gap-2"><Icon name="Route" size={16} /> {modalCar.range}</div>
                </div>
                <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setModalCar(null); }}>
                  <input type="text" placeholder="Ваше имя" className="w-full bg-white/5 border border-white/10 text-white px-4 py-2.5 text-sm placeholder:text-white/30 focus:border-[#e10600] focus:outline-none transition-colors" />
                  <input type="tel" placeholder="Телефон" className="w-full bg-white/5 border border-white/10 text-white px-4 py-2.5 text-sm placeholder:text-white/30 focus:border-[#e10600] focus:outline-none transition-colors" />
                  <button type="submit" className="w-full bg-[#e10600] text-white py-3 text-sm uppercase tracking-wider font-semibold hover:bg-[#ff1a14] transition-colors cursor-pointer">
                    Оставить заявку
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
