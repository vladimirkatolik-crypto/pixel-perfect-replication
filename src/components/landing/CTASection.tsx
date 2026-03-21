import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send, MessageCircle } from "lucide-react";

const TELEGRAM_LINK = "https://t.me/m4biz";
const WHATSAPP_LINK = "https://wa.me/79001234567";

const CTASection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Спасибо! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <section id="cta" className="section-padding" style={{ background: "var(--hero-gradient)" }}>
      <div className="container-landing">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            Выберите удобный способ связи
          </h2>
          <p className="text-primary-foreground/70 mb-10 text-base md:text-lg">
            Можно оставить заявку, написать в Telegram или сразу связаться в WhatsApp — как вам удобнее.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Форма заявки */}
            <div className="bg-card rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Send className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Оставить заявку</h3>
              <p className="text-muted-foreground text-sm mb-5 flex-1">
                Заполните форму, и мы свяжемся с вами.
              </p>

              {!showForm && !submitted && (
                <Button
                  onClick={() => setShowForm(true)}
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Отправить заявку
                </Button>
              )}

              {showForm && !submitted && (
                <form onSubmit={handleSubmit} className="w-full space-y-3 text-left">
                  <Input required placeholder="Ваше имя" />
                  <Input required type="tel" placeholder="Номер телефона" />
                  <Input required type="email" placeholder="Email" />
                  <Textarea placeholder="Коротко опишите задачу" rows={2} />
                  <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Отправить
                  </Button>
                </form>
              )}

              {submitted && (
                <div className="w-full bg-accent/10 rounded-lg p-4">
                  <p className="text-sm font-medium text-foreground">Спасибо! Мы свяжемся с вами.</p>
                </div>
              )}
            </div>

            {/* Telegram */}
            <div className="bg-card rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Send className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Telegram</h3>
              <p className="text-muted-foreground text-sm mb-5 flex-1">
                Напишите нам в Telegram, если удобнее общаться в мессенджере.
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
                  Написать в Telegram
                </a>
              </Button>
            </div>

            {/* WhatsApp */}
            <div className="bg-card rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground text-sm mb-5 flex-1">
                Напишите нам в WhatsApp для быстрого контакта.
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Написать в WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
