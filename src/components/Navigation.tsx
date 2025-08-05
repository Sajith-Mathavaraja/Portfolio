import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/20 bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Sajith.dev</h3>
            <p className="text-muted-foreground">
              Crafting seamless digital experiences with precision and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/sajith09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass hover:text-primary hover-scale transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/sajith09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass hover:text-primary hover-scale transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:mathavarajasajith@gmail.com"
                className="p-2 rounded-lg glass hover:text-primary hover-scale transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Sajith Mathavaraja. Made with{" "}
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            and lots of code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;