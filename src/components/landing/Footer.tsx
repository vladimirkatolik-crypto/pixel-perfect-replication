const Footer = () => (
  <footer className="bg-card border-t py-8 px-4 md:px-8">
    <div className="container-landing flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span>© {new Date().getFullYear()} m4biz. Все права защищены.</span>
      <div className="flex gap-6">
        <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
        <a href="mailto:info@example.com" className="hover:text-foreground transition-colors">Связаться</a>
      </div>
    </div>
  </footer>
);

export default Footer;
