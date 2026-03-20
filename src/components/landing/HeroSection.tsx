import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Phone, Globe } from "lucide-react";

const benefits = [
  "Все каналы в одном месте",
  "Живой диалог без жёсткой анкеты",
  "Подсказки менеджеру, а не хаос",
  "База знаний и сохранение контекста",
  "Маршрутизация по правилам",
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-16" style={{ background: "var(--hero-gradient)" }}>
      <div className="section-padding container-landing">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-primary-foreground">
              AI-система для входящих обращений в продажах и клиентском сервисе
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
              Собирает сообщения из WhatsApp, Telegram, email, сайта и других каналов в одном окне, понимает контекст, помогает вести диалог, подсказывает менеджеру и маршрутизирует клиента по правилам.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8">
                <a href="#cta">Запросить демо</a>
              </Button>
              <Button asChild size="lg" className="bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-base px-8">
                <a href="#cta">Показать мой кейс</a>
              </Button>
            </div>
            <ul className="space-y-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual — unified inbox mockup */}
          <div className="hidden lg:block">
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 p-6 space-y-4">
              <div className="flex items-center gap-2 text-primary-foreground/60 text-xs font-medium uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Единое окно обращений
              </div>
              {[
                { icon: MessageSquare, channel: "WhatsApp", msg: "Здравствуйте, пришлите прайс на оборудование", time: "2 мин" },
                { icon: Mail, channel: "Email", msg: "Добрый день, хотели бы обсудить условия поставки", time: "5 мин" },
                { icon: Phone, channel: "Telegram", msg: "Подскажите сроки доставки в Казань?", time: "8 мин" },
                { icon: Globe, channel: "Сайт", msg: "Оставил заявку на сайте, жду обратной связи", time: "12 мин" },
              ].map((item) => (
                <div key={item.channel} className="flex items-start gap-3 bg-primary-foreground/5 rounded-lg p-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-primary-foreground">{item.channel}</span>
                      <span className="text-xs text-primary-foreground/40">{item.time}</span>
                    </div>
                    <p className="text-xs text-primary-foreground/60 truncate">{item.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
