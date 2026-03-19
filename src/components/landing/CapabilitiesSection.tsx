import { Inbox, MessageCircle, Brain, GitBranch, Lightbulb, BookOpen, History, Layers } from "lucide-react";

const capabilities = [
  { icon: Inbox, title: "Собирает все входящие", desc: "Email, WhatsApp, Telegram, сайт и другие каналы в одном рабочем месте" },
  { icon: MessageCircle, title: "Ведёт живой диалог", desc: "Не задаёт длинную анкету. Сначала отвечает по смыслу, потом уточняет нужное" },
  { icon: Brain, title: "Понимает запрос клиента", desc: "Определяет тип запроса, недостающие данные и необходимость передачи менеджеру" },
  { icon: GitBranch, title: "Маршрутизирует", desc: "По правилам, закреплению, сегменту или типу обращения" },
  { icon: Lightbulb, title: "Подсказывает менеджеру", desc: "Готовит выжимку, рекомендации и вариант ответа" },
  { icon: BookOpen, title: "Работает с базой знаний", desc: "Ищет ответы по документам, FAQ, прайсам и условиям" },
  { icon: History, title: "Помнит контекст", desc: "Сохраняет состояние общения, важные данные и этап разговора" },
  { icon: Layers, title: "Масштабируется", desc: "Подключение новых компаний и сценариев без сборки с нуля" },
];

const CapabilitiesSection = () => (
  <section id="capabilities" className="section-padding">
    <div className="container-landing">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Что умеет система</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Полный цикл обработки входящих обращений — от приёма до передачи менеджеру
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((c) => (
          <div key={c.title} className="bg-card rounded-xl p-6 border hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <c.icon size={20} className="text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
