import { Search, Database, BookCheck, Settings, ArrowRight, UserCheck, Save } from "lucide-react";

const steps = [
  { icon: Search, text: "Понять запрос" },
  { icon: Database, text: "Собрать недостающие данные" },
  { icon: BookCheck, text: "Проверить базу знаний" },
  { icon: Settings, text: "Учесть правила компании" },
  { icon: ArrowRight, text: "Выбрать следующий шаг" },
  { icon: UserCheck, text: "Передать нужному человеку" },
  { icon: Save, text: "Сохранить всё в контексте" },
];

const DecisionBlock = () => (
  <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
    <div className="container-landing text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
        Не просто AI-ответы
      </h2>
      <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
        Система принимает решение, что делать с каждым входящим сообщением
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {steps.map((s, i) => (
          <div key={s.text} className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-5 py-2.5">
            <s.icon size={16} className="text-accent" />
            <span className="text-sm text-primary-foreground font-medium">{s.text}</span>
            {i < steps.length - 1 && <span className="text-primary-foreground/30 ml-1">→</span>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DecisionBlock;
