import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const CTASection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Спасибо! Мы свяжемся с вами и покажем систему на вашем кейсе.");
  };

  return (
    <section id="cta" className="section-padding" style={{ background: "var(--hero-gradient)" }}>
      <div className="container-landing">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Покажем, как это будет работать на вашем потоке обращений
          </h2>
          <p className="text-primary-foreground/70 mb-8">
            Разберём ваши каналы, типы обращений, правила маршрутизации и покажем, где AI реально поможет, а где лучше оставить человека.
          </p>

          {submitted ? (
            <div className="bg-primary-foreground/10 rounded-xl p-8 text-primary-foreground">
              <p className="text-lg font-semibold">Спасибо за заявку!</p>
              <p className="text-primary-foreground/70 mt-2">Мы свяжемся с вами и покажем систему на вашем кейсе.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 space-y-4 text-left">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Имя</label>
                <Input required placeholder="Ваше имя" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Компания</label>
                <Input required placeholder="Название компании" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Телефон или Telegram</label>
                <Input required placeholder="+7 ... или @username" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Кратко опишите задачу</label>
                <Textarea placeholder="Расскажите о вашем потоке обращений" rows={3} />
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base">
                Получить демонстрацию
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
