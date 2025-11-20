import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Interactive Web Apps",
      description: "Building responsive and dynamic web applications with modern technologies",
      image: "https://cdn.poehali.dev/projects/92f641b0-c8dd-4721-9949-45c8af8e6964/files/58b33fe0-2e98-4fbb-b2e3-d6a8669f5501.jpg"
    },
    {
      title: "Custom Solutions",
      description: "Tailored web solutions for businesses and creative projects",
      image: "https://cdn.poehali.dev/projects/92f641b0-c8dd-4721-9949-45c8af8e6964/files/58b33fe0-2e98-4fbb-b2e3-d6a8669f5501.jpg"
    }
  ];

  const games = [
    {
      title: "Roblox Games",
      description: "Creative and engaging Roblox game experiences",
      image: "https://cdn.poehali.dev/projects/92f641b0-c8dd-4721-9949-45c8af8e6964/files/d31b4cd1-00fd-4f72-9690-d95cdc3ff541.jpg"
    },
    {
      title: "Game Development",
      description: "Innovative gameplay mechanics and immersive worlds",
      image: "https://cdn.poehali.dev/projects/92f641b0-c8dd-4721-9949-45c8af8e6964/files/d31b4cd1-00fd-4f72-9690-d95cdc3ff541.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              a1rblake
            </h2>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground/80 hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-foreground/80 hover:text-primary transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('games')} className="text-foreground/80 hover:text-primary transition-colors">
                Games
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-primary transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 animate-gradient bg-[length:200%_200%]"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
              a1rblake
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
              Game & Web Developer
            </p>
            <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
              Creating immersive games and cutting-edge websites. Bringing ideas to life through code and creativity.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Web applications built with modern technologies
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

      <section id="games" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Games
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Interactive gaming experiences on Roblox
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Get in touch through my social channels
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-secondary to-secondary/80 hover:opacity-90 transition-opacity gap-2 text-lg px-8"
              asChild
            >
              <a href="https://t.me/nikolaydemidov" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={24} />
                Telegram
              </a>
            </Button>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-accent to-accent/80 hover:opacity-90 transition-opacity gap-2 text-lg px-8"
              asChild
            >
              <a href="https://roblox.com/users/nikolaydemidov" target="_blank" rel="noopener noreferrer">
                <Icon name="Gamepad2" size={24} />
                Roblox
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 a1rblake. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;