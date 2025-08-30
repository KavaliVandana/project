import { Github, Linkedin, Mail, Code, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/KavaliVandana",
    label: "GitHub"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vandana-kavali/",
    label: "LinkedIn"
  },
  {
    icon: Code,
    href: "https://leetcode.com/u/vandanakavali2601/",
    label: "LeetCode"
  },
  {
    icon: Trophy,
    href: "https://www.hackerrank.com/profile/22241A0593",
    label: "HackerRank"
  },
  {
    icon: Mail,
    href: "mailto:vandanakavali2601@gmail.com",
    label: "Email"
  }
];

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-animation absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-xl"></div>
        <div className="floating-animation absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-xl" style={{ animationDelay: "2s" }}></div>
        <div className="floating-animation absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-r from-pink-300/20 to-blue-300/20 rounded-full blur-xl" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="glass-card max-w-4xl mx-auto text-center p-12 animate-fade-in">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold gradient-text">
              Kavali Vandana
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
              Aspiring Software Engineer | AI & Web Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about building scalable solutions with AI, data science, and web technologies.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map((link, index) => (
              <Button
                key={link.label}
                variant="ghost"
                size="lg"
                asChild
                className="glass-button h-14 w-14 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              </Button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-6 flex-wrap">
            <Button
              size="lg"
              className="h-14 px-8 text-lg font-medium bg-primary hover:bg-primary/90 animate-slide-up"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg font-medium glass-button animate-slide-up"
              style={{ animationDelay: "0.2s" }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}