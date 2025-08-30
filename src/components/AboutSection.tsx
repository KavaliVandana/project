export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto"></div>
        </div>

        <div className="glass-card p-8 md:p-12 animate-fade-in">
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              Career Objective
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Aspiring software engineer with a strong foundation in Java, data science, and competitive programming. 
              Passionate about solving real-world problems using scalable, efficient, and innovative solutions. Eager 
              to learn, build, and contribute to impactful projects that make a difference in people's lives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">LeetCode Problems</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">9.53</div>
                <div className="text-muted-foreground">CGPA</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">98.05%</div>
                <div className="text-muted-foreground">Best Project Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}