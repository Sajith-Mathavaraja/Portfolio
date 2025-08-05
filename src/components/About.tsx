import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Calendar } from "lucide-react";

const About = () => {
  const headerAnimation = useScrollAnimation('fade');
  const contentAnimation = useScrollAnimation('slideLeft');
  const educationAnimation = useScrollAnimation('slideRight');
  const educationCard1Animation = useScrollAnimation('scale');
  const educationCard2Animation = useScrollAnimation('flip');
  const educationHeaderAnimation = useScrollAnimation('rotate');
  const statsAnimation = useScrollAnimation('slideUp');
  
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div ref={headerAnimation.ref} className={`text-center mb-16 ${headerAnimation.animationClass}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div ref={contentAnimation.ref} className={`space-y-8 ${contentAnimation.animationClass}`}>
            <div className="glass p-8 rounded-2xl card-3d perspective-1000 group">
              {/* 3D Background Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6 transform transition-all duration-700 group-hover:text-foreground/90 group-hover:translate-x-2">
                  A passionate designer and developer with a strong eye for detail, blending creative design with technical expertise. I specialize in building responsive websites, functional prototypes, and data-driven user interfaces that deliver exceptional user experiences.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground mb-6 transform transition-all duration-700 group-hover:text-foreground/90 group-hover:translate-x-2">
                  Currently pursuing Software Engineering while actively building real-world applications, I bring a unique perspective that combines academic knowledge with practical implementation. My journey in web development and UI/UX design is driven by a commitment to creating digital solutions that are both beautiful and functional.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground transform transition-all duration-700 group-hover:text-foreground/90 group-hover:translate-x-2">
                  When I'm not coding or designing, I'm exploring new technologies, contributing to open-source projects, and constantly learning to stay at the forefront of modern web development trends.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div ref={educationAnimation.ref} className={`mt-16 ${educationAnimation.animationClass}`}>
              <h3 ref={educationHeaderAnimation.ref} className={`text-2xl font-bold mb-8 text-center ${educationHeaderAnimation.animationClass}`}>
                <span className="gradient-text animate-pulse">Education</span>
              </h3>
              
              <div className="relative">
                {/* Enhanced Timeline Structure */}
                <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-muted/20 via-muted/30 to-muted/20 rounded-full overflow-hidden">
                  {/* Animated Progress Line */}
                  <div className="absolute inset-0 w-full bg-gradient-to-b from-primary via-accent to-primary animate-timeline-progress opacity-0 animate-timeline-fade-in"></div>
                  
                  {/* Flowing Light Effect */}
                  <div className="absolute inset-0 w-full bg-gradient-to-b from-transparent via-primary/60 to-transparent animate-timeline-glow"></div>
                </div>
                
                <div className="space-y-12">
                  <div ref={educationCard1Animation.ref} className={`relative glass p-6 rounded-xl group perspective-1000 card-3d hover:scale-105 hover:rotate-1 transition-all duration-700 transform hover:shadow-2xl hover:shadow-primary/25 ${educationCard1Animation.animationClass} animate-slideInLeft ml-20`}>
                    {/* Enhanced Timeline Dot with Ring Animation */}
                    <div className="absolute -left-24 top-6 flex items-center justify-center">
                      <div className="absolute w-8 h-8 bg-primary/20 rounded-full animate-timeline-ring-1"></div>
                      <div className="absolute w-6 h-6 bg-primary/40 rounded-full animate-timeline-ring-2"></div>
                      <div className="relative w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg animate-timeline-dot-1 z-10">
                        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                      </div>
                    </div>
                    
                    {/* Connection Line to Card */}
                    <div className="absolute -left-16 top-8 w-8 h-0.5 bg-gradient-to-r from-primary/60 to-transparent animate-timeline-connect-1"></div>
                    
                    <div className="relative z-10">
                      {/* Enhanced 3D Background Layer */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-xl transform group-hover:scale-105 group-hover:rotate-1"></div>
                      
                      
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                              <GraduationCap className="h-5 w-5 text-primary" />
                            </div>
                            Higher National Diploma in Software Engineering
                          </h4>
                          <p className="text-muted-foreground mb-2 group-hover:text-foreground/80 transition-colors duration-300">
                            Esoft Metro Campus, Batticaloa
                          </p>
                          <p className="text-muted-foreground flex items-center gap-2 mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                            <Calendar className="h-4 w-4" />
                            March 2023 – Sep 2024
                          </p>
                        </div>
                        <div className="lg:ml-4">
                          <span className="inline-block px-3 py-1 text-sm font-medium bg-gradient-to-r from-green-400/20 to-green-600/20 text-green-700 dark:text-green-300 rounded-full border border-green-400/30 group-hover:scale-105 transition-transform duration-300">
                            Completed
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        Comprehensive program covering software development, web technologies, database management, and project management.
                      </p>
                    </div>
                  </div>

                  <div ref={educationCard2Animation.ref} className={`relative glass p-6 rounded-xl group perspective-1000 card-3d hover:scale-105 hover:-rotate-1 transition-all duration-700 transform hover:shadow-2xl hover:shadow-accent/25 ${educationCard2Animation.animationClass} animate-slideInRight ml-20`}>
                    {/* Enhanced Timeline Dot with Ring Animation */}
                    <div className="absolute -left-24 top-6 flex items-center justify-center">
                      <div className="absolute w-8 h-8 bg-accent/20 rounded-full animate-timeline-ring-3"></div>
                      <div className="absolute w-6 h-6 bg-accent/40 rounded-full animate-timeline-ring-4"></div>
                      <div className="relative w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg animate-timeline-dot-2 z-10">
                        <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75"></div>
                      </div>
                    </div>
                    
                    {/* Connection Line to Card */}
                    <div className="absolute -left-16 top-8 w-8 h-0.5 bg-gradient-to-r from-accent/60 to-transparent animate-timeline-connect-2"></div>
                    
                    <div className="relative z-10">
                      {/* Enhanced 3D Background Layer */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-xl transform group-hover:scale-105 group-hover:-rotate-1"></div>
                      
                      
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                            <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                              <GraduationCap className="h-5 w-5 text-accent" />
                            </div>
                            Diploma in Information Technology
                          </h4>
                          <p className="text-muted-foreground mb-2 group-hover:text-foreground/80 transition-colors duration-300">
                            Esoft Metro Campus, Batticaloa
                          </p>
                          <p className="text-muted-foreground flex items-center gap-2 mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                            <Calendar className="h-4 w-4" />
                            March 2023 – March 2024
                          </p>
                        </div>
                        <div className="lg:ml-4">
                          <span className="inline-block px-3 py-1 text-sm font-medium bg-gradient-to-r from-green-400/20 to-green-600/20 text-green-700 dark:text-green-300 rounded-full border border-green-400/30 group-hover:scale-105 transition-transform duration-300">
                            Completed
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        Foundation program in IT fundamentals, programming basics, and computer systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div ref={statsAnimation.ref} className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 ${statsAnimation.animationClass}`}>
              <div className="text-center card-3d glass p-6 rounded-xl group">
                <div className="text-2xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">6+</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Projects Completed</div>
              </div>
              <div className="text-center card-3d glass p-6 rounded-xl group">
                <div className="text-2xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">2+</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Years Learning</div>
              </div>
              <div className="text-center card-3d glass p-6 rounded-xl group">
                <div className="text-2xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">8+</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Certifications</div>
              </div>
              <div className="text-center card-3d glass p-6 rounded-xl group">
                <div className="text-2xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">∞</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Passion for Code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;