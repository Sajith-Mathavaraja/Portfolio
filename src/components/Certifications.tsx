import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Python",
      issuer: "University of Moratuwa",
      category: "Programming",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "HTML",
      issuer: "SoloLearn",
      category: "Web Development",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "CSS",
      issuer: "Great Learning",
      category: "Web Development",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "CSS Crash Course",
      issuer: "Udemy",
      category: "Web Development",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Database Management Systems",
      issuer: "Udemy",
      category: "Database",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Full Stack Project Workshop",
      issuer: "NoviTech",
      category: "Development",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Diploma in Information Technology",
      issuer: "Esoft Metro Campus",
      category: "Academic",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section id="certifications" className="py-20 lg:py-32 bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through recognized courses and certifications in web development and technology.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="glass p-6 rounded-xl hover-lift group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certificate Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Award className="h-6 w-6" />
              </div>

              {/* Certificate Details */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-muted-foreground font-medium">
                  {cert.issuer}
                </p>

                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {cert.category}
                  </span>
                  
                  <Button variant="ghost" size="sm" className="hover-scale opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="glass p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Committed to <span className="gradient-text">Continuous Learning</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In the rapidly evolving world of technology, I believe in continuous skill development. 
              These certifications represent my commitment to staying current with industry best practices 
              and emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;