import { GraduationCap, Brain, MessageSquare, Globe } from "lucide-react";

const certifications = [
  {
    title: "Supervised Machine Learning",
    provider: "Coursera",
    score: "98.20%",
    icon: Brain,
    description: "Comprehensive course covering regression, classification, and neural networks",
    skills: ["Linear Regression", "Logistic Regression", "Neural Networks", "Decision Trees"],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "ChatGPT for Beginners",
    provider: "Coursera", 
    score: "97.5%",
    icon: MessageSquare,
    description: "Advanced techniques for prompt engineering and AI integration",
    skills: ["Prompt Engineering", "AI Integration", "Conversational AI", "GPT Applications"],
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Web Folio Wizard Workshop",
    provider: "Professional Development",
    score: "Participation Certificate",
    icon: Globe,
    description: "Workshop on creating professional portfolios and personal branding",
    skills: ["Portfolio Design", "Personal Branding", "Web Development", "UI/UX"],
    gradient: "from-purple-500/20 to-pink-500/20"
  }
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Continuous learning and skill development through professional certifications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="project-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.gradient} flex-shrink-0`}>
                    <cert.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground group-hover:gradient-text transition-all text-lg">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.provider}</p>
                  </div>
                </div>

                {/* Score Badge */}
                <div className="flex justify-center">
                  <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-sm font-bold text-primary">{cert.score}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Key Skills Learned:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs font-medium rounded-md glass-button"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certificate Icon */}
                <div className="flex justify-center pt-2">
                  <GraduationCap className="w-8 h-8 text-primary/60" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}