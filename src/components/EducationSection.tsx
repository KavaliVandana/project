import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-purple-500"></div>
          
          <div className="relative">
            <div className="flex items-start space-x-6 animate-slide-up">
              {/* Timeline dot */}
              <div className="relative">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center glass-card">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 glass-card p-8">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      B.Tech in Computer Science and Engineering
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">2022 - 2026</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Gokaraju Rangaraju Institute of Engineering & Technology, Hyderabad</span>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">9.53</div>
                      <div className="text-sm text-muted-foreground">Current CGPA</div>
                    </div>
                    <div className="w-px h-12 bg-border"></div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-foreground">Final Year</div>
                      <div className="text-sm text-muted-foreground">Expected Graduation: 2026</div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="font-semibold text-foreground mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Data Structures", "Algorithms", "Database Systems", "Machine Learning", "Web Development", "Software Engineering"].map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 rounded-full text-sm font-medium glass-button"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}