import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Image, 
  Code, 
  PenTool, 
  Briefcase, 
  GraduationCap,
  Camera,
  Music,
  Gamepad2,
  Lightbulb,
  TrendingUp,
  Heart
} from "lucide-react";

interface Category {
  name: string;
  description: string;
  icon: React.ReactNode;
  count: number;
  color: string;
  trending?: boolean;
}

const categories: Category[] = [
  {
    name: "ChatGPT",
    description: "Conversation, analysis, and productivity prompts",
    icon: <MessageSquare className="w-6 h-6" />,
    count: 2450,
    color: "from-emerald-500 to-emerald-600",
    trending: true
  },
  {
    name: "Midjourney",
    description: "AI art generation and visual creativity",
    icon: <Image className="w-6 h-6" />,
    count: 1890,
    color: "from-violet-500 to-violet-600",
    trending: true
  },
  {
    name: "Coding",
    description: "Programming, debugging, and development",
    icon: <Code className="w-6 h-6" />,
    count: 1250,
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Writing",
    description: "Creative writing, copywriting, and content",
    icon: <PenTool className="w-6 h-6" />,
    count: 1680,
    color: "from-orange-500 to-orange-600"
  },
  {
    name: "Business",
    description: "Marketing, strategy, and professional tasks",
    icon: <Briefcase className="w-6 h-6" />,
    count: 980,
    color: "from-indigo-500 to-indigo-600"
  },
  {
    name: "Education",
    description: "Learning, teaching, and academic support",
    icon: <GraduationCap className="w-6 h-6" />,
    count: 760,
    color: "from-green-500 to-green-600"
  },
  {
    name: "Photography",
    description: "Photo editing and visual enhancement",
    icon: <Camera className="w-6 h-6" />,
    count: 450,
    color: "from-pink-500 to-pink-600"
  },
  {
    name: "Music",
    description: "Audio creation and music production",
    icon: <Music className="w-6 h-6" />,
    count: 320,
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "Gaming",
    description: "Game development and interactive content",
    icon: <Gamepad2 className="w-6 h-6" />,
    count: 280,
    color: "from-red-500 to-red-600"
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our curated collection of prompts organized by use case and platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-border/50 hover:shadow-elevated transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
            >
              <CardHeader className="relative">
                {category.trending && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </Badge>
                )}
                
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {category.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {category.count.toLocaleString()} prompts
                  </span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Heart className="w-4 h-4" />
                    <span>Popular</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;