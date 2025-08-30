import { Trophy, Code, Award, Users, Target, Star } from "lucide-react";

const achievements = [
  {
    icon: Code,
    title: "LeetCode 500+ Problems",
    description: "Solved over 500 coding problems with focus on algorithms and data structures",
    metric: "500+",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Trophy,
    title: "Python & Problem Solving Certified",
    description: "Earned certifications in Python programming and advanced problem-solving techniques",
    metric: "2 Certs",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Award,
    title: "Foundation for Excellence Scholar",
    description: "Awarded scholarship for academic merit and leadership potential",
    metric: "Scholar",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Users,
    title: "Hackathon Participant",
    description: "Active participant in Vivian'24 and Explore'25 hackathons with innovative solutions",
    metric: "2 Events",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Target,
    title: "Career Development",
    description: "Mentored peers in career development and participated in skill-building workshops",
    metric: "Mentor",
    color: "from-red-400 to-rose-500"
  },
  {
    icon: Star,
    title: "High Academic Performance",
    description: "Maintained excellent CGPA of 9.53 throughout computer science program",
    metric: "9.53 CGPA",
    color: "from-indigo-400 to-purple-500"
  }
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Recognition for academic excellence, technical skills, and leadership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="group skill-card hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Icon and Metric */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color}/20`}>
                    <achievement.icon className={`w-6 h-6 bg-gradient-to-br ${achievement.color} bg-clip-text text-transparent`} />
                  </div>
                  <div className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color}/10 text-foreground`}>
                    {achievement.metric}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-bold text-foreground group-hover:gradient-text transition-all">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}