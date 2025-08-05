import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Figma, Database, Camera, Car, Video, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const headerAnimation = useScrollAnimation('slideUp');
  const projectsAnimation = useScrollAnimation('scale');
  
  const projects = [
    {
      title: "MS Furniture Shop – UI Design",
      description: "A modern, user-friendly furniture shopping interface designed in Figma. Features include product browsing, detailed item views, customer reviews, cart & checkout, secure payments, and real-time order tracking — all focused on elevating the shopping experience.",
      icon: <Figma className="h-6 w-6" />,
      tags: ["UI/UX", "Figma", "E-commerce", "Design System"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Malcolm Lismore Photographer's Website",
      description: "A responsive photography portfolio built with HTML, CSS, JavaScript, and PHP. Includes a dynamic gallery, client inquiry form, and optimized cross-device layout.",
      icon: <Camera className="h-6 w-6" />,
      tags: ["HTML", "CSS", "JavaScript", "PHP", "Responsive"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Auto Car – UI/UX",
      description: "A sleek taxi booking platform prototype designed with clean flows and intuitive user interaction from booking to payment.",
      icon: <Car className="h-6 w-6" />,
      tags: ["UI/UX", "Prototyping", "Mobile Design", "User Flow"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Quiet Attic Films – Production Database",
      description: "A full database solution with ER diagrams, SQL queries, and structured schemas to manage locations, clients, staff, and assets in film production.",
      icon: <Database className="h-6 w-6" />,
      tags: ["Database", "SQL", "ER Diagrams", "Data Management"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "EVC Cloud-Based Video Platform – UI/UX",
      description: "Designed the interface for a video player platform focused on usability, interactivity, and immersive visual design.",
      icon: <Video className="h-6 w-6" />,
      tags: ["UI/UX", "Video Platform", "Cloud", "Interactive Design"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Big Data Research on Plastic Usage",
      description: "Conducted a research project analyzing plastic utilization using big data methods. The study used surveys and statistical techniques to explore trends and sustainability implications in Sri Lanka's Eastern Province.",
      icon: <BarChart3 className="h-6 w-6" />,
      tags: ["Research", "Big Data", "Analytics", "Environmental Study"],
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerAnimation.ref} className={`text-center mb-16 ${headerAnimation.animationClass}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning web development, UI/UX design, database management, and research projects.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div ref={projectsAnimation.ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${projectsAnimation.animationClass}`}>
          {projects.map((project, index) => {
            const cardAnimation = useScrollAnimation('slideUp', 0.1, true);
            return (
              <Card 
                key={index} 
                ref={cardAnimation.ref}
                className={`glass border-0 card-3d group cursor-pointer perspective-1000 relative overflow-hidden ${cardAnimation.animationClass}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* 3D Background Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center text-white mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 transform-gpu`}>
                    {project.icon}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5 cursor-default"
                        style={{ animationDelay: `${tagIndex * 0.1}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="ghost" size="sm" className="button-3d hover:bg-primary hover:text-white">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm" className="button-3d hover:bg-accent hover:text-accent-foreground">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className={useScrollAnimation('fade').animationClass}>
            <p className="text-lg text-muted-foreground mb-6">
              Interested in working together or want to see more projects?
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="button-3d border-primary/20 hover:border-primary hover:bg-primary hover:text-white"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Let's Collaborate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;