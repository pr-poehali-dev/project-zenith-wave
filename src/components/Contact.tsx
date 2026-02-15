import { motion } from "framer-motion";
import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-[#111] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-[#e10600] uppercase text-sm tracking-[0.2em] mb-4 font-medium">Контакты</h3>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Свяжитесь с нами</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#e10600]/10 text-[#e10600] shrink-0">
                  <Icon name="MapPin" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">Адрес</p>
                  <p className="text-white/50 text-sm">Москва, ул. Примерная, д. 5</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#e10600]/10 text-[#e10600] shrink-0">
                  <Icon name="Phone" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">Телефон</p>
                  <a href="tel:+79001234567" className="text-white/50 text-sm hover:text-[#e10600] transition-colors">+7 (900) 123-45-67</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#e10600]/10 text-[#e10600] shrink-0">
                  <Icon name="Mail" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">Email</p>
                  <a href="mailto:info@lumieteauto.com" className="text-white/50 text-sm hover:text-[#e10600] transition-colors">info@lumieteauto.com</a>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://wa.me/79001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] px-5 py-2.5 text-xs uppercase tracking-wider font-medium hover:bg-[#25D366]/20 transition-colors"
              >
                <Icon name="MessageCircle" size={16} /> WhatsApp
              </a>
              <a
                href="https://t.me/lumieteauto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#2AABEE]/10 border border-[#2AABEE]/30 text-[#2AABEE] px-5 py-2.5 text-xs uppercase tracking-wider font-medium hover:bg-[#2AABEE]/20 transition-colors"
              >
                <Icon name="Send" size={16} /> Telegram
              </a>
            </div>

            <div className="mt-10 h-[200px] bg-white/5 border border-white/10 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIxLjAiTiAzN8KwMzcnMDIuMyJF!5e0!3m2!1sru!2sru!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                title="Lumiete Auto на карте"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-[#e10600]/10 text-[#e10600]">
                  <Icon name="Check" size={32} />
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">Заявка отправлена!</h3>
                <p className="text-white/50">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              >
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">Имя</label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    required
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm placeholder:text-white/20 focus:border-[#e10600] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm placeholder:text-white/20 focus:border-[#e10600] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm placeholder:text-white/20 focus:border-[#e10600] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">Сообщение</label>
                  <textarea
                    placeholder="Расскажите, какой автомобиль вас интересует..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 text-sm placeholder:text-white/20 focus:border-[#e10600] focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#e10600] text-white py-3.5 text-sm uppercase tracking-wider font-semibold hover:bg-[#ff1a14] transition-colors cursor-pointer"
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
