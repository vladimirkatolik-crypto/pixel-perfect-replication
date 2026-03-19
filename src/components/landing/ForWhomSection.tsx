import { Briefcase, HeadphonesIcon, Truck, Filter, MessagesSquare } from "lucide-react";

const items = [
  { icon: Briefcase, title: "Продажи B2B", desc: "Обработка входящих запросов от корпоративных клиентов" },
  { icon: HeadphonesIcon, title: "Клиентский сервис", desc: "Быстрые ответы и решение вопросов в едином окне" },
  { icon: Truck, title: "Дистрибуция и опт", desc: "Работа с заказами, прайсами и условиями поставки" },
  { icon: Filter, title: "Сложная квалификация", desc: "Определение типа клиента, сегмента и потребности" },
  { icon: MessagesSquare, title: "Мультиканальный бизнес", desc: "Входящие из WhatsApp, Telegram, email, сайта и других каналов" },
];

const ForWhomSection = () => (
  <section id="for-whom" className="section-padding bg-section-alt">
    <div className="container-landing">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Для кого эта система</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Подходит для компаний, где входящие обращения — основа продаж и сервиса
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.title} className="bg-card rounded-xl p-6 border hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <item.icon size={20} className="text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ForWhomSection;
