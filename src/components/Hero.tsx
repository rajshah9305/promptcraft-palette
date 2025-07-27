import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Sparkles, BookOpen, Copy } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Discover Premium AI Prompts
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              PromptLIB
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            The ultimate collection of AI prompts for ChatGPT, Midjourney, and beyond. 
            Curated, tested, and ready to elevate your creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Search className="w-5 h-5 mr-2" />
              Explore Prompts
            </Button>
            
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6">
              <BookOpen className="w-5 h-5 mr-2" />
              Browse Categories
            </Button>
          </div>
          
          <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Copy className="w-4 h-4" />
              <span>10,000+ Prompts</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>50+ Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Weekly Updates</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-light/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-500" />
    </section>
  );
};

export default Hero;