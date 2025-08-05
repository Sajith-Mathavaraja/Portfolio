import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Linkedin, ArrowDown } from "lucide-react";
import WordByWordTypewriter from "./WordByWordTypewriter";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual PDF
    // For now, we'll show a toast notification
    console.log("Resume download initiated");
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-l from-accent/25 to-primary/25 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-1 lg:order-1 text-center lg:text-left space-y-6 animate-fade-in-up">
            {/* Welcome Text */}
            <div className="animate-fade-in">
              <p className="text-sm sm:text-base font-medium tracking-widest uppercase text-primary/80 mb-4">
                WELCOME TO MY PORTFOLIO
              </p>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground mb-2 animate-fade-in-up">Hi, I'm</span>
                <span className="block gradient-text animate-fade-in-up hover-glow" style={{ animationDelay: "0.2s" }}>
                  Sajith Mathavaraja
                </span>
              </h1>
              <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <p className="text-xl sm:text-2xl lg:text-3xl gradient-text font-medium mt-4 hover-glow">
                  <WordByWordTypewriter 
                    text="frontend web developer & UI/UX Designer"
                    className="gradient-text"
                    wordSpeed={600}
                    pauseDuration={300}
                    resetPause={2000}
                  />
                </p>
              </div>
              <p className="text-lg text-muted-foreground flex items-center justify-center lg:justify-start gap-2 hover-slide">
                📍 Kalmunai, Sri Lanka
              </p>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-8">
<a
  href="https://drive.google.com/uc?export=download&id=1MnSNUFLdCLvAvweYCveSGihlZEm5VGnS"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button 
    variant="hero" 
    size="xl" 
    className="w-full sm:w-auto hover-lift hover-glow"
  >
    <Download className="mr-2 h-5 w-5" />
    Download Resume
  </Button>
</a>

              <Button 
                variant="glass" 
                size="xl"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto hover-tilt"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-8">
              <a 
                href="mailto:mathavarajasajith@gmail.com" 
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover-scale"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+94756692809" 
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover-scale"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/sajith09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover-scale"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="order-2 lg:order-2 flex justify-center -mt-8">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-all duration-700 animate-pulse"></div>
              
              {/* Middle ring */}
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              
              {/* Inner border ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-50 group-hover:opacity-80 transition-all duration-300 animate-glow"></div>
              
              {/* Main image */}
              <img 
                src="/lovable-uploads/8a7c667a-614a-453a-922a-288833f259ef.png" 
                alt="Sajith Mathavaraja - Professional Portrait"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover object-top rounded-full border-4 border-background shadow-2xl hover-lift hover-glow transition-all duration-700 group-hover:scale-105"
              />
              
              {/* Rotating border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 blur-sm group-hover:animate-spin" style={{ animation: "spin 8s linear infinite" }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300 hover-pulse"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;