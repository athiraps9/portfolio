import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/90 to-navy-dark/95" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-4 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              Web Developer
            </span>
          </div>
          
          <h1 className="mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-white">
              Athira PS
            </span>
          </h1>
          
          <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
            A dedicated <span className="text-primary font-semibold">Web Developer</span>, crafting responsive, 
            user-friendly, and high-performance web applications
          </p>

          <p className="mb-8 sm:mb-12 text-sm sm:text-base md:text-lg text-white/75 max-w-2xl mx-auto px-4">
            Experienced in MERN-stack (MongoDB , Express.js, React.js ,Node.js) development and next.js.
            Skilled in UI/UX collaboration, API integration to deliver secure and scalable  efficient web applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Experience
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <a 
              href="https://linkedin.com/in/athira-ps-developer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-primary text-white hover:text-primary-foreground transition-all hover:scale-110 backdrop-blur-sm border border-white/20"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-primary text-white hover:text-primary-foreground transition-all hover:scale-110 backdrop-blur-sm border border-white/20"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=athirapspalakkal98@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-primary text-white hover:text-primary-foreground transition-all hover:scale-110 backdrop-blur-sm border border-white/20"
>
  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
</a>


          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;