import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Это заменяет менеджеров?", a: "Нет. Система помогает менеджерам работать эффективнее: быстрее квалифицировать, точнее маршрутизировать и не терять контекст. Человек остаётся в процессе." },
  { q: "Можно ли сначала без автоответов?", a: "Да. На старте система может работать только как помощник менеджера — подсказывать, собирать данные, готовить ответы, но не писать клиенту автоматически." },
  { q: "Какие каналы можно подключить?", a: "WhatsApp, Telegram, email, виджет на сайте и другие каналы через Chatwoot. Список каналов расширяется." },
  { q: "Подходит ли это для сложных продаж?", a: "Да. Система умеет работать с базой знаний, прайсами и правилами компании, что особенно полезно для сложных B2B-продаж." },
  { q: "Можно ли использовать свою базу знаний?", a: "Да. Вы можете подключить свои документы, FAQ, прайсы и правила. Система будет искать ответы по ним." },
  { q: "Можно ли подключать несколько компаний?", a: "Да. Система масштабируется: можно подключать новые компании и сценарии без сборки новой системы с нуля." },
  { q: "Что будет, если AI не уверен?", a: "Если уверенность низкая — система не угадывает, а уточняет у клиента или сразу передаёт диалог менеджеру." },
  { q: "Можно ли настраивать правила маршрутизации?", a: "Да. Правила маршрутизации настраиваются под вашу структуру: по менеджерам, сегментам, регионам, типу запроса." },
];

const FAQSection = () => (
  <section id="faq" className="section-padding">
    <div className="container-landing max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Частые вопросы</h2>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border rounded-lg px-5">
            <AccordionTrigger className="text-left text-sm font-medium">{f.q}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
