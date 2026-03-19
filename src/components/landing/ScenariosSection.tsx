const scenarios = [
  {
    title: "Новый лид",
    client: "«Здравствуйте, пришлите прайс»",
    system: "Система понимает, что данных недостаточно, мягко уточняет нужное, сохраняет контекст и передаёт менеджеру.",
  },
  {
    title: "Вопрос по доставке",
    client: "«Какие сроки доставки в Казань?»",
    system: "Система ищет ответ в базе знаний и подготавливает корректную подсказку менеджеру.",
  },
  {
    title: "Действующий клиент",
    client: "«У меня вопрос по заказу №1234»",
    system: "Если менеджер уже закреплён, диалог сразу передаётся ему с полным контекстом.",
  },
  {
    title: "Сложный товарный запрос",
    client: "«Нужен подбор оборудования под наш проект»",
    system: "Система определяет, нужен ли поиск по базе знаний, прайсу или подключение менеджера.",
  },
];

const ScenariosSection = () => (
  <section id="scenarios" className="section-padding bg-section-alt">
    <div className="container-landing">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Сценарии использования</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {scenarios.map((s) => (
          <div key={s.title} className="bg-card rounded-xl border p-6 space-y-4">
            <h3 className="font-bold text-foreground">{s.title}</h3>
            <div className="bg-accent/5 rounded-lg p-3 border border-accent/10">
              <p className="text-sm italic text-muted-foreground">Клиент: {s.client}</p>
            </div>
            <p className="text-sm text-foreground/80">{s.system}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ScenariosSection;
