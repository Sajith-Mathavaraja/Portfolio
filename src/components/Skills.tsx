import { Code, Palette, Database, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const headerAnimation = useScrollAnimation('slideUp');
  const skillsAnimation = useScrollAnimation('scale');
  const highlightsAnimation = useScrollAnimation('slideUp');
  const skillCategories = [
    {
      title: "Frontend & Development",
      icon: <Code className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["HTML", "CSS", "JavaScript", "React Js", "PHP", "C#", "Python"],
    },
    {
      title: "UI/UX & Design",
      icon: <Palette className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      skills: ["Prototyping", "Interaction Design", "User Research", "Figma"],
    },
    {
      title: "Tools & Platforms",
      icon: <Database className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      skills: ["WordPress", "SQL", "Git", "VS Code"],
    },
    {
      title: "Languages",
      icon: <Globe className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      skills: ["English", "Tamil"],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerAnimation.ref} className={`text-center mb-16 ${headerAnimation.animationClass}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and exceptional user experiences.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div ref={skillsAnimation.ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${skillsAnimation.animationClass}`}>
          {skillCategories.map((category, categoryIndex) => {
            const categoryAnimation = useScrollAnimation('slideUp', 0.1, true);
            return (
              <div 
                key={categoryIndex}
                ref={categoryAnimation.ref}
                className={`card-3d glass p-6 rounded-xl group perspective-1000 relative overflow-hidden ${categoryAnimation.animationClass}`}
                style={{ animationDelay: `${categoryIndex * 0.15}s` }}
              >
                {/* 3D Background Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Category Header */}
                <div className="text-center mb-6 relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 transform-gpu`}>
                    {category.icon}
                    <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-all duration-300 transform group-hover:translate-y-1">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 transform hover:translate-x-1 hover:scale-105"
                    >
                      <span className="text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                        {skill}
                      </span>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill Highlights */}
        <div ref={highlightsAnimation.ref} className={`mt-16 text-center ${highlightsAnimation.animationClass}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="card-3d glass p-6 rounded-xl group">
              <div className="text-2xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Programming Languages</div>
            </div>
            <div className="card-3d glass p-6 rounded-xl group">
              <div className="text-2xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Frontend Technologies</div>
            </div>
            <div className="card-3d glass p-6 rounded-xl group">
              <div className="text-2xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">4+</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Design Tools</div>
            </div>
            <div className="card-3d glass p-6 rounded-xl group">
              <div className="text-2xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">2</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Spoken Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;