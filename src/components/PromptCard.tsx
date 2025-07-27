import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Heart, Star, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PromptCardProps {
  title: string;
  description: string;
  prompt: string;
  category: string;
  tags: string[];
  likes: number;
  rating: number;
  author: string;
}

const PromptCard = ({ title, description, prompt, category, tags, likes, rating, author }: PromptCardProps) => {
  const { toast } = useToast();

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

  return (
    <Card className="group bg-gradient-card border-border/50 hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] overflow-hidden">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span>{rating}</span>
          </div>
        </div>
        
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="bg-muted/50 rounded-lg p-3 border border-border/30">
          <p className="text-sm font-mono text-foreground/90 line-clamp-3">
            "{prompt}"
          </p>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>by {author}</span>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>{likes}</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleCopy}>
              <Copy className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PromptCard;