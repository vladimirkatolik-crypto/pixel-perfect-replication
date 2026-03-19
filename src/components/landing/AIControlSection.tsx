import { Shield, UserCheck, Settings, AlertTriangle, ArrowRightLeft, Lock } from "lucide-react";

const points = [
  { icon: UserCheck, text: "Человек остаётся в контуре принятия решений" },
  { icon: Shield, text: "AI не обязан автоматически писать клиенту" },
  { icon: Settings, text: "На старте работает как помощник менеджера" },
  { icon: AlertTriangle, text: "При низкой уверенности — уточняет или передаёт" },
  { icon: ArrowRightLeft, text: "Сложные кейсы уходят человеку" },
  { icon: Lock, text: "Правила включения AI задаются компанией" },
];

const AIControlSection = () => (
  <section className="section-padding">
    <div className="container-landing">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">AI работает управляемо</h2>
        <p className="text-lg text-muted-foreground">
          AI помогает, а не принимает хаотичные решения вместо бизнеса
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {points.map((p) => (
          <div key={p.text} className="flex items-start gap-3 p-4">
            <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <p.icon size={18} className="text-accent" />
            </div>
            <p className="text-sm text-foreground leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AIControlSection;
