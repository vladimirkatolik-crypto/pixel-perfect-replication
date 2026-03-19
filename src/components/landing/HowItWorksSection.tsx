const steps = [
  { num: "01", title: "Клиент пишет", desc: "Из любого канала — WhatsApp, Telegram, email, сайт" },
  { num: "02", title: "Единое окно", desc: "Сообщение попадает в рабочее пространство менеджера" },
  { num: "03", title: "Анализ запроса", desc: "Система понимает тип запроса и контекст обращения" },
  { num: "04", title: "AI извлекает данные", desc: "Определяет важные данные и предлагает следующий шаг" },
  { num: "05", title: "База знаний", desc: "Ищет факты по документам, FAQ, прайсам и правилам" },
  { num: "06", title: "Подсказка менеджеру", desc: "Готовит выжимку, рекомендации и вариант ответа" },
  { num: "07", title: "Маршрутизация", desc: "Диалог передаётся нужному менеджеру" },
  { num: "08", title: "Сохранение контекста", desc: "Всё сохраняется в истории разговора" },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding bg-section-alt">
    <div className="container-landing">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Как это работает</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        От сообщения клиента до готовой подсказки менеджеру — за секунды
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.num} className="relative bg-card rounded-xl p-6 border">
            <span className="text-3xl font-extrabold text-accent/20">{s.num}</span>
            <h3 className="font-semibold text-foreground mt-2 mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
