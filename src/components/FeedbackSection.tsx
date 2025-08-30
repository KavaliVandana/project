import { useState } from "react";
import { MessageCircle, Star, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function FeedbackSection() {
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    rating: 5,
    feedback: "",
    category: "general"
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with feedback data
    const mailtoLink = `mailto:vandanavkavali2601@gmail.com?subject=Portfolio Feedback - ${feedbackData.category}&body=${encodeURIComponent(
      `Name: ${feedbackData.name}\nEmail: ${feedbackData.email}\nRating: ${feedbackData.rating}/5 stars\nCategory: ${feedbackData.category}\n\nFeedback:\n${feedbackData.feedback}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Thank you for your feedback!",
      description: "Your feedback has been prepared in your email client.",
    });
    
    // Reset form
    setFeedbackData({ name: "", email: "", rating: 5, feedback: "", category: "general" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFeedbackData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const StarRating = ({ rating, onRatingChange }: { rating: number; onRatingChange: (rating: number) => void }) => (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRatingChange(star)}
          className="focus:outline-none"
        >
          <Star
            className={`w-6 h-6 transition-colors ${
              star <= rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300 hover:text-yellow-400"
            }`}
          />
        </button>
      ))}
    </div>
  );

  return (
    <section id="feedback" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Your Feedback Matters
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Help me improve by sharing your thoughts about my portfolio, projects, or any suggestions you might have!
          </p>
        </div>

        <div className="glass-card p-8 animate-fade-in">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 rounded-lg bg-primary/10">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Share Your Thoughts</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="feedback-name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="feedback-name"
                  name="name"
                  value={feedbackData.name}
                  onChange={handleInputChange}
                  required
                  className="glass-button"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="feedback-email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="feedback-email"
                  name="email"
                  type="email"
                  value={feedbackData.email}
                  onChange={handleInputChange}
                  required
                  className="glass-button"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Overall Rating
                </label>
                <div className="flex items-center space-x-3">
                  <StarRating
                    rating={feedbackData.rating}
                    onRatingChange={(rating) => setFeedbackData(prev => ({ ...prev, rating }))}
                  />
                  <span className="text-sm text-muted-foreground">
                    {feedbackData.rating} out of 5
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="feedback-category" className="text-sm font-medium text-foreground">
                  Feedback Category
                </label>
                <select
                  id="feedback-category"
                  name="category"
                  value={feedbackData.category}
                  onChange={handleInputChange}
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 glass-button"
                >
                  <option value="general">General Feedback</option>
                  <option value="design">Portfolio Design</option>
                  <option value="projects">Projects</option>
                  <option value="content">Content</option>
                  <option value="technical">Technical Aspects</option>
                  <option value="career">Career Opportunities</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="feedback-message" className="text-sm font-medium text-foreground">
                Your Feedback
              </label>
              <Textarea
                id="feedback-message"
                name="feedback"
                value={feedbackData.feedback}
                onChange={handleInputChange}
                required
                rows={6}
                className="glass-button resize-none"
                placeholder="Share your thoughts, suggestions, or any feedback about my portfolio..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Feedback
            </Button>
          </form>

          {/* Feedback Categories */}
          <div className="mt-8 pt-8 border-t border-border">
            <h4 className="font-semibold text-foreground mb-4">What kind of feedback are you looking for?</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              <div className="glass-button p-3 text-center">
                <div className="font-medium text-foreground">Portfolio Design</div>
                <div className="text-muted-foreground text-xs">UI/UX improvements</div>
              </div>
              <div className="glass-button p-3 text-center">
                <div className="font-medium text-foreground">Project Feedback</div>
                <div className="text-muted-foreground text-xs">Technical insights</div>
              </div>
              <div className="glass-button p-3 text-center">
                <div className="font-medium text-foreground">Career Advice</div>
                <div className="text-muted-foreground text-xs">Professional guidance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}