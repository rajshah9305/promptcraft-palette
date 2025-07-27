import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Code, 
  PenTool, 
  Briefcase, 
  BarChart3,
  GraduationCap,
  Users,
  Filter
} from "lucide-react";

interface Category {
  id: string;
  name: string;
  count: number;
  icon: React.ReactNode;
}

const categories: Category[] = [
  { 
    id: "all", 
    name: "All Categories", 
    count: 245, 
    icon: <Filter className="w-4 h-4" /> 
  },
  { 
    id: "chatbots", 
    name: "Chatbots", 
    count: 42, 
    icon: <MessageSquare className="w-4 h-4" /> 
  },
  { 
    id: "code-assistant", 
    name: "Code Assistant", 
    count: 38, 
    icon: <Code className="w-4 h-4" /> 
  },
  { 
    id: "creative-writing", 
    name: "Creative Writing", 
    count: 29, 
    icon: <PenTool className="w-4 h-4" /> 
  },
  { 
    id: "data-analysis", 
    name: "Data Analysis", 
    count: 25, 
    icon: <BarChart3 className="w-4 h-4" /> 
  },
  { 
    id: "education", 
    name: "Education", 
    count: 22, 
    icon: <GraduationCap className="w-4 h-4" /> 
  },
  { 
    id: "business", 
    name: "Business", 
    count: 18, 
    icon: <Briefcase className="w-4 h-4" /> 
  },
  { 
    id: "assistant", 
    name: "Assistant", 
    count: 15, 
    icon: <Users className="w-4 h-4" /> 
  }
];

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2 p-1 bg-muted/30 rounded-lg border border-border/50">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "ghost"}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          className={`
            flex items-center gap-2 transition-all duration-200 hover:scale-105
            ${activeCategory === category.id 
              ? 'bg-primary text-primary-foreground shadow-card' 
              : 'hover:bg-accent hover:text-accent-foreground'
            }
          `}
        >
          {category.icon}
          <span className="font-medium">{category.name}</span>
          <Badge 
            variant={activeCategory === category.id ? "secondary" : "outline"}
            className={`
              text-xs ml-1
              ${activeCategory === category.id 
                ? 'bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30' 
                : 'bg-muted text-muted-foreground border-border'
              }
            `}
          >
            {category.count}
          </Badge>
        </Button>
      ))}
    </div>
  );
};

export default CategoryTabs;