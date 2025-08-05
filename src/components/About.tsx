import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const headerAnimation = useScrollAnimation('fade');
  const contentAnimation = useScrollAnimation('slideLeft');
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