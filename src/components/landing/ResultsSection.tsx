import { TrendingDown, Zap, Target, Eye, BarChart3, Settings, ArrowDown, Layers } from "lucide-react";

const results = [
  { icon: ArrowDown, text: "Меньше потерь входящих обращений" },
  { icon: TrendingDown, text: "Меньше хаоса в переписке" },
  { icon: Zap, text: "Быстрее первичная реакция" },
  { icon: Target, text: "Аккуратнее квалификация" },
  { icon: Settings, text: "Меньше ручной рутины" },
  { icon: BarChart3, text: "Лучше качество передачи менеджеру" },
  { icon: Eye, text: "Прозрачность процессов" },
  { icon: Layers, text: "Основа для дальнейшей автоматизации" },
];

const ResultsSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="container-landing">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Что получает бизнес</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {results.map((r) => (
          <div key={r.text} className="flex items-start gap-3 bg-card rounded-xl border p-5">
            <r.icon size={20} className="text-accent shrink-0 mt-0.5" />
            <p className="text-sm font-medium text-foreground">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
