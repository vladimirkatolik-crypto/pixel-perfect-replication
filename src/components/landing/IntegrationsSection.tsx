import { MessageSquare, Workflow, Brain, BookOpen, FileText, Table } from "lucide-react";

const items = [
  { icon: MessageSquare, label: "Chatwoot", desc: "Единое рабочее место" },
  { icon: Workflow, label: "n8n", desc: "Логика и интеграции" },
  { icon: Brain, label: "AI / LLM", desc: "Анализ и подсказки" },
  { icon: BookOpen, label: "База знаний", desc: "RAG по документам" },
  { icon: FileText, label: "Google Drive", desc: "Документы и файлы" },
  { icon: Table, label: "Прайсы", desc: "Справочники и таблицы" },
];

const IntegrationsSection = () => (
  <section className="section-padding">
    <div className="container-landing">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Состав системы</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Полноценная система, которая встраивается в рабочий контур компании
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map((item) => (
          <div key={item.label} className="bg-card rounded-xl border p-5 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
              <item.icon size={24} className="text-accent" />
            </div>
            <h3 className="font-semibold text-sm text-foreground">{item.label}</h3>
            <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IntegrationsSection;
