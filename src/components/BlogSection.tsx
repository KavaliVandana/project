import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

// Placeholder blog posts - can be expanded later
const blogPosts = [
  {
    title: "Getting Started with Machine Learning in Python",
    excerpt: "A beginner's guide to implementing your first ML model using TensorFlow and scikit-learn.",
    date: "Coming Soon",
    readTime: "5 min read",
    category: "Machine Learning",
    slug: "#"
  },
  {
    title: "Building Scalable React Applications",
    excerpt: "Best practices for structuring React projects and optimizing performance for large-scale applications.",
    date: "Coming Soon", 
    readTime: "8 min read",
    category: "Web Development",
    slug: "#"
  },
  {
    title: "LeetCode Problem Solving Strategies",
    excerpt: "Effective approaches and patterns for solving algorithmic problems on competitive programming platforms.",
    date: "Coming Soon",
    readTime: "6 min read", 
    category: "Algorithms",
    slug: "#"
  }
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Blog & Notes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on technology, programming, and personal growth
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="glass-card p-8 text-center mb-12 animate-fade-in">
          <BookOpen className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">Blog Coming Soon!</h3>
          <p className="text-muted-foreground">
            I'm currently working on creating valuable content about machine learning, web development, and problem-solving. 
            Stay tuned for in-depth tutorials and insights!
          </p>
        </div>

        {/* Preview Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.title}
              className="project-card group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Category Badge */}
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    {post.category}
                  </span>
                  <div className="opacity-50">
                    <BookOpen className="w-5 h-5" />
                  </div>
                </div>

                {/* Title & Excerpt */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:gradient-text transition-all">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Want to be notified when I publish new articles? Connect with me on LinkedIn or follow my GitHub for updates!
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="glass-button" asChild>
                <a href="https://linkedin.com/in/kavali-vandana-9b72b1279" target="_blank" rel="noopener noreferrer">
                  Follow on LinkedIn
                </a>
              </Button>
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <a href="https://github.com/vandanavkavali2601" target="_blank" rel="noopener noreferrer">
                  Follow on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}