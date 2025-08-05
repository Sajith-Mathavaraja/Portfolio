import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Higher National Diploma in Software Engineering",
      institution: "Esoft Metro Campus, Batticaloa",
      period: "March 2023 – Sep 2024",
      status: "Completed",
      description: "Comprehensive program covering software development, web technologies, database management, and project management.",
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Esoft Metro Campus, Batticaloa",
      period: "March 2023 – March 2024",
      status: "Completed",
      description: "Foundation program in IT fundamentals, programming basics, and computer systems.",
    },
  ];

  return (
    <section id="education" className="py-20 lg:py-32 bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey in software engineering and information technology.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((item, index) => (
              <div 
                key={index}
                className="relative pl-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary to-accent"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 top-6 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 animate-glow"></div>

                {/* Content */}
                <div className="relative ml-4 group perspective-1000">
                  {/* 3D Card Container */}
                  <div className="glass p-6 rounded-xl transform-gpu transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:rotate-x-5 hover:rotate-y-2 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-primary/20 preserve-3d">
                    {/* Background 3D Layer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-xl transform -translate-z-4 opacity-50"></div>
                    
                    {/* Content Layer */}
                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2 transform transition-transform duration-300 group-hover:translate-x-1">
                            <div className="relative">
                              <GraduationCap className="h-5 w-5 text-primary transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            {item.degree}
                          </h3>
                          <p className="text-lg text-muted-foreground mb-2 transform transition-transform duration-300 group-hover:translate-x-0.5">
                            {item.institution}
                          </p>
                          <p className="text-muted-foreground flex items-center gap-2 mb-4 transform transition-transform duration-300 group-hover:translate-x-0.5">
                            <Calendar className="h-4 w-4 transform transition-all duration-300 group-hover:scale-110" />
                            {item.period}
                          </p>
                        </div>
                        <div className="lg:ml-4">
                          <span className="inline-block px-3 py-1 text-sm font-medium bg-gradient-to-r from-green-400/20 to-green-600/20 text-green-700 dark:text-green-300 rounded-full border border-green-400/30 shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-green-400/50">
                            {item.status}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed transform transition-transform duration-300 group-hover:translate-x-0.5">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* 3D Border Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;