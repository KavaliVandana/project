import { useState, useEffect } from "react";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "C", level: 80 },
      { name: "C#", level: 75 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 }
    ]
  },
  {
    category: "Data Science & AI",
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "XGBoost", level: 80 },
      { name: "R", level: 75 },
      { name: "Google Colab", level: 90 },
      { name: "Normalization", level: 85 }
    ]
  },
  {
    category: "Tools & Frameworks",
    skills: [
      { name: "Flask", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Git", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "GitHub", level: 90 }
    ]
  }
];

function SkillBar({ skill, index }: { skill: { name: string; level: number }; index: number }) {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(skill.level);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [skill.level, index]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedLevel}%` }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="skill-card animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skill.name} skill={skill} index={skillIndex} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Machine Learning", "Data Visualization", "NLP", "API Development", "Database Design", "Problem Solving", "Team Collaboration", "Project Management"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass-button text-sm font-medium hover:scale-105 transition-transform"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}