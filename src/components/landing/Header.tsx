import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#for-whom", label: "Для кого" },
  { href: "#how-it-works", label: "Как работает" },
  { href: "#capabilities", label: "Возможности" },
  { href: "#scenarios", label: "Сценарии" },
  { href: "#faq", label: "FAQ" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b">
      <div className="container-landing flex items-center justify-between h-16 px-4 md:px-8">
        <a href="#" className="text-lg font-bold text-foreground">
          m4<span className="text-accent">biz</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#cta">Запросить демо</a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-b px-4 pb-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground py-1" onClick={() => setMobileOpen(false)}>
                {l.label}
              </a>
            ))}
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 mt-2">
              <a href="#cta" onClick={() => setMobileOpen(false)}>Запросить демо</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
