import { X, Check } from "lucide-react";

const rows = [
  { feature: "Живой диалог вместо жёсткого сценария", bot: false, system: true },
  { feature: "Понимает контекст и уточняет только важное", bot: false, system: true },
  { feature: "Работает с базой знаний компании", bot: false, system: true },
  { feature: "Гибкая маршрутизация по правилам", bot: false, system: true },
  { feature: "Помогает менеджеру, а не мешает ему", bot: false, system: true },
  { feature: "Передаёт сложные кейсы человеку", bot: false, system: true },
];

const ComparisonSection = () => (
  <section className="section-padding bg-section-alt">
    <div className="container-landing">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Почему это не обычный бот</h2>
      <div className="max-w-3xl mx-auto overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-3 pr-4 text-sm font-semibold text-foreground">Возможность</th>
              <th className="py-3 px-4 text-sm font-semibold text-muted-foreground text-center">Обычный бот</th>
              <th className="py-3 pl-4 text-sm font-semibold text-accent text-center">Наша система</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.feature} className="border-b border-border/50">
                <td className="py-3 pr-4 text-sm text-foreground">{r.feature}</td>
                <td className="py-3 px-4 text-center">
                  <X size={18} className="inline-block text-destructive" />
                </td>
                <td className="py-3 pl-4 text-center">
                  <Check size={18} className="inline-block text-accent" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
