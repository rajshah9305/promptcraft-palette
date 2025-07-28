import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Heart, Star, ExternalLink, Eye, Download, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface PromptCardProps {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  subcategory?: string;
  tags: string[];
  likes: number;
  rating: number;
  author: string;
  views: number;
  downloads: number;
  authorAvatar?: string;
  featured?: boolean;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  useCase: string;
}

const PromptCard = ({ 
  id,
  title, 
  description, 
  prompt, 
  category,
  subcategory,
  tags, 
  likes, 
  rating, 
  author, 
  views, 
  downloads,
  authorAvatar,
  featured = false,
  difficulty,
  useCase
}: PromptCardProps) => {
  const { toast } = useToast();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      toast({
        title: "Copied to clipboard!",
        description: "The prompt has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually.",
        variant: "destructive",
      });
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Productivity": "bg-blue-500/10 text-blue-600 border-blue-500/20",
      "Communication": "bg-green-500/10 text-green-600 border-green-500/20",
      "Business": "bg-purple-500/10 text-purple-600 border-purple-500/20",
      "Code Review": "bg-red-500/10 text-red-600 border-red-500/20",
      "Debugging": "bg-orange-500/10 text-orange-600 border-orange-500/20",
      "API Design": "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
      "Refactoring": "bg-violet-500/10 text-violet-600 border-violet-500/20",
      "Testing": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
      "Documentation": "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
      "Data Analysis": "bg-pink-500/10 text-pink-600 border-pink-500/20",
      "Education": "bg-lime-500/10 text-lime-600 border-lime-500/20",
      "Content Strategy": "bg-amber-500/10 text-amber-600 border-amber-500/20",
      "Business Strategy": "bg-teal-500/10 text-teal-600 border-teal-500/20",
      "Automation": "bg-slate-500/10 text-slate-600 border-slate-500/20"
    };
    return colors[category] || "bg-gray-500/10 text-gray-600 border-gray-500/20";
  };

  const getDifficultyColor = (difficulty?: string) => {
    const colors: Record<string, string> = {
      "beginner": "bg-green-500/10 text-green-600 border-green-500/20",
      "intermediate": "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
      "advanced": "bg-red-500/10 text-red-600 border-red-500/20"
    };
    return difficulty ? colors[difficulty] || "bg-gray-500/10 text-gray-600 border-gray-500/20" : "";
  };

  return (
    <Card className={`group bg-gradient-card border-border/50 hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] overflow-hidden animate-fade-in interactive-card ${featured ? 'ring-2 ring-accent/20 shadow-glow' : ''}`}>
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className={`text-xs border ${getCategoryColor(category)}`}>
              {category}
            </Badge>
            {difficulty && (
              <Badge className={`text-xs border ${getDifficultyColor(difficulty)}`}>
                {difficulty}
              </Badge>
            )}
            {featured && (
              <Badge className="text-xs bg-accent text-accent-foreground animate-pulse">
                ⭐ Featured
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>
        
        <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight line-clamp-2">
          {title}
        </CardTitle>
        
        <CardDescription className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {description}
        </CardDescription>
        
        {/* Use Case */}
        <div className="text-xs text-muted-foreground bg-muted/30 rounded-md px-2 py-1 border border-border/30">
          💡 {useCase}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="bg-muted/30 rounded-lg p-4 border border-border/30 group-hover:bg-muted/50 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground font-medium">PROMPT PREVIEW</span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleCopy}
              className="h-6 px-2 text-xs hover:bg-background/50 hover-glow transition-all duration-200"
            >
              <Copy className="w-3 h-3 mr-1" />
              Copy
            </Button>
          </div>
          <p className="text-sm font-mono text-foreground/90 line-clamp-3 leading-relaxed bg-background/30 rounded p-2 border border-border/20">
            "{prompt.length > 150 ? prompt.substring(0, 150) + "..." : prompt}"
          </p>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs hover:bg-accent/10 cursor-pointer transition-colors hover:scale-105"
            >
              #{tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs text-muted-foreground">
              +{tags.length - 3} more
            </Badge>
          )}
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-between pt-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{views.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="w-4 h-4" />
              <span>{downloads}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`h-8 px-2 transition-all duration-200 ${isLiked ? 'text-red-500' : 'text-muted-foreground hover:text-red-500'}`}
            >
              <Heart className={`w-4 h-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
              <span className="text-xs">{likeCount}</span>
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-2">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center gap-2 pt-2 border-t border-border/30">
          <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center">
            {authorAvatar ? (
              <img src={authorAvatar} alt={author} className="w-6 h-6 rounded-full" />
            ) : (
              <User className="w-3 h-3 text-white" />
            )}
          </div>
          <span className="text-sm text-muted-foreground">by</span>
          <span className="text-sm font-medium hover:text-primary cursor-pointer transition-colors">
            @{author}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PromptCard;