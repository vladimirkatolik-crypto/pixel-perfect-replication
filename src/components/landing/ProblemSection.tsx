import { XCircle, CheckCircle } from "lucide-react";

const without = [
  "Заявки приходят из разных мест и теряются",
  "Сотрудники отвечают по-разному",
  "Никто не понимает, кто должен вести клиента",
  "Нет единой истории общения",
  "Клиент раздражается из-за повторных вопросов",
];

const withSystem = [
  "Все обращения в одном окне",
  "Единые правила обработки",
  "Автоматическая маршрутизация",
  "Полный контекст и история",
  "Клиент чувствует порядок",
];

const ProblemSection = () => (
  <section className="section-padding">
    <div className="container-landing">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Хаос входящих или порядок?</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-8 space-y-4">
          <h3 className="font-bold text-lg text-destructive">Без системы — хаос</h3>
          <ul className="space-y-3">
            {without.map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-foreground/80">
                <XCircle size={18} className="text-destructive shrink-0 mt-0.5" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-accent/20 bg-accent/5 p-8 space-y-4">
          <h3 className="font-bold text-lg text-accent">С системой — единый порядок</h3>
          <ul className="space-y-3">
            {withSystem.map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
