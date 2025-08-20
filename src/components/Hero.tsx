
import { Button } from "@/components/ui/button";
import { Folder, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                Kwabena
                <span className="block text-primary">Osei-Tutu</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Data Professional & Full Stack Developer
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Data Enthusiast and Full Stack Developer with over four years in the telecom IT sector, 
              specializing in data mining, machine learning, and deep learning.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
              <Button size="lg" className="hover-scale">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              </a>
              
              <a href="#portfolio">
              <Button variant="outline" size="lg" className="hover-scale">
                <Folder className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </a>
          
            </div>
            
            
            <div className="flex space-x-6">
              <a href="https://github.com/Nanasei878" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/kwabena-osei-tutu-1b6009a0/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:kwabena.oseitutu@etu.unilasalle.fr" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="w-full max-w-md mx-auto">
              <img
                src="/lovable-uploads/1730a2e0-63c0-429b-8d4d-1d2776112547.png"
                alt="Kwabena Osei-Tutu"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
