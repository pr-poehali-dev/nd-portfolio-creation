import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { translations, languageNames, type Language } from "@/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Index = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      title: t.projects.card1Title,
      description: t.projects.card1Desc,
      image: "https://cdn.poehali.dev/files/3a43aa8f-12ab-4429-8db8-652a7b64cd2a.png"
    },
    {
      title: t.projects.card2Title,
      description: t.projects.card2Desc,
      image: "https://cdn.poehali.dev/files/3a43aa8f-12ab-4429-8db8-652a7b64cd2a.png"
    }
  ];

  const games = [
    {
      title: t.games.card1Title,
      description: t.games.card1Desc,
      image: "https://cdn.poehali.dev/files/820ad58e-a2bd-49a3-b1cc-94ef2f12ae72.png"
    },
    {
      title: t.games.card2Title,
      description: t.games.card2Desc,
      image: "https://cdn.poehali.dev/files/820ad58e-a2bd-49a3-b1cc-94ef2f12ae72.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              a1rblake
            </h2>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden md:flex gap-8">
                <button onClick={() => scrollToSection('home')} className="text-foreground/80 hover:text-primary transition-colors">
                  {t.nav.home}
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-foreground/80 hover:text-primary transition-colors">
                  {t.nav.projects}
                </button>
                <button onClick={() => scrollToSection('games')} className="text-foreground/80 hover:text-primary transition-colors">
                  {t.nav.games}
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-primary transition-colors">
                  {t.nav.contact}
                </button>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2 hidden sm:flex">
                    <Icon name="Languages" size={16} />
                    <span className="hidden lg:inline">{languageNames[language]}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {(Object.keys(languageNames) as Language[]).map((lang) => (
                    <DropdownMenuItem
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={language === lang ? "bg-primary/10" : ""}
                    >
                      {languageNames[lang]}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden">
                    <Icon name="Menu" size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col gap-6 mt-8">
                    <button 
                      onClick={() => scrollToSection('home')} 
                      className="text-2xl font-bold text-foreground hover:text-primary transition-colors text-left"
                    >
                      {t.nav.home}
                    </button>
                    <button 
                      onClick={() => scrollToSection('projects')} 
                      className="text-2xl font-bold text-foreground hover:text-primary transition-colors text-left"
                    >
                      {t.nav.projects}
                    </button>
                    <button 
                      onClick={() => scrollToSection('games')} 
                      className="text-2xl font-bold text-foreground hover:text-primary transition-colors text-left"
                    >
                      {t.nav.games}
                    </button>
                    <button 
                      onClick={() => scrollToSection('contact')} 
                      className="text-2xl font-bold text-foreground hover:text-primary transition-colors text-left"
                    >
                      {t.nav.contact}
                    </button>
                    <div className="border-t border-border pt-6 mt-4">
                      <p className="text-sm text-muted-foreground mb-4">Language / Язык</p>
                      <div className="grid grid-cols-2 gap-2">
                        {(Object.keys(languageNames) as Language[]).map((lang) => (
                          <Button
                            key={lang}
                            variant={language === lang ? "default" : "outline"}
                            size="sm"
                            onClick={() => setLanguage(lang)}
                            className="justify-start"
                          >
                            {languageNames[lang]}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 animate-gradient bg-[length:200%_200%]"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 sm:mb-8 font-light">
              {t.hero.subtitle}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              {t.hero.description}
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-base sm:text-lg px-6 sm:px-8"
                onClick={() => scrollToSection('projects')}
              >
                {t.hero.viewProjects}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base sm:text-lg px-6 sm:px-8"
                onClick={() => scrollToSection('contact')}
              >
                {t.hero.getInTouch}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.projects.title}
          </h2>
          <p className="text-center text-muted-foreground mb-12 sm:mb-16 text-base sm:text-lg px-4">
            {t.projects.subtitle}
          </p>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden group hover:scale-105 transition-transform duration-300 bg-card/50 backdrop-blur border-2 border-primary/20 hover:border-primary/50"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-primary">{project.title}</h3>
                  <p className="text-foreground/70">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="games" className="py-16 sm:py-20 px-4 sm:px-6 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            {t.games.title}
          </h2>
          <p className="text-center text-muted-foreground mb-12 sm:mb-16 text-base sm:text-lg px-4">
            {t.games.subtitle}
          </p>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {games.map((game, index) => (
              <Card 
                key={index}
                className="overflow-hidden group hover:scale-105 transition-transform duration-300 bg-card/50 backdrop-blur border-2 border-accent/20 hover:border-accent/50"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-accent">{game.title}</h3>
                  <p className="text-foreground/70">{game.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground mb-8 sm:mb-12 text-base sm:text-lg px-4">
            {t.contact.subtitle}
          </p>
          <div className="flex gap-4 sm:gap-6 justify-center flex-wrap px-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-secondary to-secondary/80 hover:opacity-90 transition-opacity gap-2 text-base sm:text-lg px-6 sm:px-8"
              asChild
            >
              <a href="https://t.me/sky9line" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={20} />
                {t.contact.telegram}
              </a>
            </Button>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-accent to-accent/80 hover:opacity-90 transition-opacity gap-2 text-base sm:text-lg px-6 sm:px-8"
              asChild
            >
              <a href="https://www.roblox.com/users/8401129765/profile" target="_blank" rel="noopener noreferrer">
                <Icon name="Gamepad2" size={20} />
                {t.contact.roblox}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-sm sm:text-base">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;