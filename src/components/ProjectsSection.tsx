import { ExternalLink, Github, Cpu, Heart, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Flower Image Classification",
    description: "Deep learning model using TensorFlow for classifying flower species with 98.05% accuracy. Trained EfficientNet-B3 model with data augmentation and preprocessing techniques. Implemented comprehensive data analysis and visualization for better understanding of flower characteristics and classification patterns.",
    icon: Cpu,
    tech: ["TensorFlow", "Python", "EfficientNet", "Data Augmentation", "Google Colab", "Data Analysis"],
    accuracy: "98.05%",
    github: "https://github.com/KavaliVandana/DataSet",
    demo: "https://github.com/KavaliVandana/DataSet",
    gradient: "from-green-400/20 to-blue-500/20"
  },
  {
    title: "MatriSense - Maternal Health Risk Prediction",
    description: "Full-stack web application predicting maternal health risks using machine learning. Built with React frontend, Flask backend, and XGBoost algorithm for accurate risk assessment. Features comprehensive data visualization, user-friendly interface, and real-time risk prediction capabilities.",
    icon: Heart,
    tech: ["React", "Flask", "MongoDB", "XGBoost", "Machine Learning", "Healthcare", "Data Visualization"],
    accuracy: "95%+",
    github: "https://github.com/KavaliVandana/MatriSense-Level-2",
    demo: "https://github.com/KavaliVandana/MatriSense-Level-2",
    gradient: "from-pink-400/20 to-purple-500/20"
  },
  {
    title: "AI Research Paper Formatter",
    description: "Intelligent tool that automatically formats research papers to IEEE standards using NLP techniques. Streamlines the publication process for researchers and academics. Includes automated citation formatting, reference management, and template compliance checking.",
    icon: FileText,
    tech: ["Python", "NLP", "IEEE Standards", "Text Processing", "Automation", "Academic Writing"],
    accuracy: "Format Compliant",
    github: "https://github.com/KavaliVandana",
    demo: "https://github.com/KavaliVandana",
    gradient: "from-yellow-400/20 to-orange-500/20"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing innovative solutions in AI, web development, and data science
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-6">
                {/* Project Icon & Title */}
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}>
                    <project.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <div className="text-sm font-medium text-primary">
                      {project.accuracy}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium rounded-md glass-button"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 glass-button group-hover:scale-105 transition-transform"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 group-hover:scale-105 transition-transform"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="glass-button"
            asChild
          >
            <a href="https://github.com/KavaliVandana" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}