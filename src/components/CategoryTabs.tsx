import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Filter,
  CheckSquare, 
  MessageCircle, 
  Briefcase,
  Code2,
  Bug,
  Globe,
  RefreshCw,
  TestTube,
  FileText,
  BarChart3,
  GraduationCap,
  PenTool,
  TrendingUp,
  Settings
} from "lucide-react";

interface Category {
  id: string;
  name: string;
  count: number;
  icon: React.ReactNode;
  description: string;
}

const categories: Category[] = [
  { 
    id: "all", 
    name: "All Categories", 
    count: 18, 
    icon: <Filter className="w-4 h-4" />,
    description: "Browse all available prompts"
  },
  { 
    id: "productivity", 
    name: "Productivity", 
    count: 3, 
    icon: <CheckSquare className="w-4 h-4" />,
    description: "Task management and daily productivity"
  },
  { 
    id: "communication", 
    name: "Communication", 
    count: 2, 
    icon: <MessageCircle className="w-4 h-4" />,
    description: "Professional writing and messaging"
  },
  { 
    id: "business", 
    name: "Business", 
    count: 2, 
    icon: <Briefcase className="w-4 h-4" />,
    description: "Strategy and business analysis"
  },
  { 
    id: "code-review", 
    name: "Code Review", 
    count: 1, 
    icon: <Code2 className="w-4 h-4" />,
    description: "Expert code analysis and feedback"
  },
  { 
    id: "debugging", 
    name: "Debugging", 
    count: 1, 
    icon: <Bug className="w-4 h-4" />,
    description: "Systematic bug fixing assistance"
  },
  { 
    id: "api-design", 
    name: "API Design", 
    count: 1, 
    icon: <Globe className="w-4 h-4" />,
    description: "RESTful API architecture and design"
  },
  { 
    id: "refactoring", 
    name: "Refactoring", 
    count: 1, 
    icon: <RefreshCw className="w-4 h-4" />,
    description: "Code improvement and optimization"
  },
  { 
    id: "testing", 
    name: "Testing", 
    count: 1, 
    icon: <TestTube className="w-4 h-4" />,
    description: "Test case generation and QA"
  },
  { 
    id: "documentation", 
    name: "Documentation", 
    count: 1, 
    icon: <FileText className="w-4 h-4" />,
    description: "Technical writing and docs"
  },
  { 
    id: "data-analysis", 
    name: "Data Analysis", 
    count: 1, 
    icon: <BarChart3 className="w-4 h-4" />,
    description: "Statistical insights and analytics"
  },
  { 
    id: "education", 
    name: "Education", 
    count: 1, 
    icon: <GraduationCap className="w-4 h-4" />,
    description: "Learning and skill development"
  },
  { 
    id: "content-strategy", 
    name: "Content", 
    count: 1, 
    icon: <PenTool className="w-4 h-4" />,
    description: "Content marketing and strategy"
  },
  { 
    id: "business-strategy", 
    name: "Strategy", 
    count: 1, 
    icon: <TrendingUp className="w-4 h-4" />,
    description: "Business consulting and analysis"
  },
  { 
    id: "automation", 
    name: "Automation", 
    count: 1, 
    icon: <Settings className="w-4 h-4" />,
    description: "Workflow optimization and automation"
  }
];

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <div className="space-y-3">
      {/* Main Categories */}
      <div className="flex flex-wrap gap-2 p-1 bg-muted/30 rounded-lg border border-border/50">
        {categories.slice(0, 8).map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "ghost"}
            size="sm"
            onClick={() => onCategoryChange(category.id)}
            title={category.description}
            className={`
              flex items-center gap-2 transition-all duration-200 hover:scale-105 group
              ${activeCategory === category.id 
                ? 'bg-primary text-primary-foreground shadow-card hover-glow' 
                : 'hover:bg-accent hover:text-accent-foreground'
              }
            `}
          >
            {category.icon}
            <span className="font-medium">{category.name}</span>
            <Badge 
              variant={activeCategory === category.id ? "secondary" : "outline"}
              className={`
                text-xs ml-1 transition-all duration-200
                ${activeCategory === category.id 
                  ? 'bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30' 
                  : 'bg-muted text-muted-foreground border-border group-hover:bg-accent/20'
                }
              `}
            >
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>
      
      {/* Additional Categories */}
      {categories.length > 8 && (
        <div className="flex flex-wrap gap-2 p-1">
          {categories.slice(8).map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
              title={category.description}
              className={`
                flex items-center gap-2 transition-all duration-200 hover:scale-105
                ${activeCategory === category.id 
                  ? 'shadow-card hover-glow' 
                  : 'hover:shadow-card'
                }
              `}
            >
              {category.icon}
              <span className="font-medium">{category.name}</span>
              <Badge variant="outline" className="text-xs ml-1">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryTabs;