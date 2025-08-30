import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResumeDownload() {
  const handleDownload = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/lovable-uploads/d5c1af56-7021-4c83-bf7d-70c8c7431999.png';
    link.download = 'Kavali_Vandana_Resume.png';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 text-center animate-fade-in">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-primary/10">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl font-bold gradient-text">
                Download My Resume
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get a comprehensive overview of my skills, experience, and achievements in a downloadable PDF format.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                onClick={handleDownload}
                className="h-14 px-8 text-lg font-medium bg-primary hover:bg-primary/90 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              
              <div className="text-sm text-muted-foreground">
                PDF • Last updated: December 2024
              </div>
            </div>

            {/* Resume Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">9.53</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">LeetCode Problems</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}