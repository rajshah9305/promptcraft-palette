import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Heart, Star, ExternalLink, Eye, Download, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface PromptCardProps {
  title: string;
  description: string;
  prompt: string;
  category: string;
  tags: string[];
  likes: number;
  rating: number;
  author: string;
  views: number;
  downloads: number;
  authorAvatar?: string;
  featured?: boolean;
}

const PromptCard = ({ 
  title, 
  description, 
  prompt, 
  category, 
  tags, 
  likes, 
  rating, 
  author, 
  views, 
  downloads,
  authorAvatar,
  featured = false 
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
      "Writing": "bg-orange-500/10 text-orange-600 border-orange-500/20",
      "Business": "bg-blue-500/10 text-blue-600 border-blue-500/20",
      "Coding": "bg-purple-500/10 text-purple-600 border-purple-500/20",
      "Midjourney": "bg-pink-500/10 text-pink-600 border-pink-500/20",
      "Education": "bg-green-500/10 text-green-600 border-green-500/20",
      "Marketing": "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
      "Analysis": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
    };
    return colors[category] || "bg-gray-500/10 text-gray-600 border-gray-500/20";
  };

  return (
    <Card className={`group bg-gradient-card border-border/50 hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] overflow-hidden animate-fade-in ${featured ? 'ring-2 ring-accent/20 shadow-glow' : ''}`}>
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Badge className={`text-xs border ${getCategoryColor(category)}`}>
              {category}
            </Badge>
            {featured && (
              <Badge className="text-xs bg-accent text-accent-foreground">
                Featured
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>
        
        <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
          {title}
        </CardTitle>
        
        <CardDescription className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="bg-muted/30 rounded-lg p-4 border border-border/30 group-hover:bg-muted/50 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground font-medium">PROMPT</span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleCopy}
              className="h-6 px-2 text-xs hover:bg-background/50"
            >
              <Copy className="w-3 h-3 mr-1" />
              Copy
            </Button>
          </div>
          <p className="text-sm font-mono text-foreground/90 line-clamp-3 leading-relaxed">
            "{prompt}"
          </p>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 4).map((tag, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs hover:bg-accent/10 cursor-pointer transition-colors"
            >
              {tag}
            </Badge>
          ))}
          {tags.length > 4 && (
            <Badge variant="outline" className="text-xs text-muted-foreground">
              +{tags.length - 4} more
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