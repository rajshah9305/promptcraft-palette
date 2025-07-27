import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Star, 
  Plus,
  Code,
  PenTool,
  BarChart3,
  Users,
  MessageSquare,
  GraduationCap,
  Briefcase,
  Github,
  User
} from "lucide-react";

const recentActivity = [
  {
    type: "new",
    title: "SQL Query Optimizer",
    time: "2 hours ago",
    author: "DataExpert",
    category: "Coding"
  },
  {
    type: "updated", 
    title: "Creative Writing Assistant",
    time: "5 hours ago",
    author: "WriteMaster",
    category: "Writing"
  },
  {
    type: "forked",
    title: "Data Analysis Expert", 
    time: "1 day ago",
    author: "AnalyticsPro",
    category: "Analysis"
  },
  {
    type: "contributor",
    title: "New contributor joined",
    time: "2 days ago",
    author: "AIEnthusiast",
    category: "Community"
  }
];

const popularCategories = [
  { name: "Creative", count: 67, icon: <PenTool className="w-4 h-4" />, color: "text-orange-500" },
  { name: "Technical", count: 89, icon: <Code className="w-4 h-4" />, color: "text-blue-500" },
  { name: "Assistant", count: 45, icon: <Users className="w-4 h-4" />, color: "text-green-500" },
  { name: "Coding", count: 34, icon: <Code className="w-4 h-4" />, color: "text-purple-500" },
  { name: "Analysis", count: 28, icon: <BarChart3 className="w-4 h-4" />, color: "text-indigo-500" },
  { name: "Education", count: 22, icon: <GraduationCap className="w-4 h-4" />, color: "text-emerald-500" },
  { name: "Business", count: 19, icon: <Briefcase className="w-4 h-4" />, color: "text-amber-500" }
];

const quickActions = [
  { 
    label: "Browse All Prompts", 
    icon: <MessageSquare className="w-4 h-4" />,
    variant: "default" as const
  },
  { 
    label: "Submit Prompt", 
    icon: <Plus className="w-4 h-4" />,
    variant: "outline" as const
  },
  { 
    label: "Join Community", 
    icon: <Users className="w-4 h-4" />,
    variant: "ghost" as const
  }
];

const Sidebar = () => {
  return (
    <aside className="w-80 space-y-6 animate-slide-in-right">
      {/* Quick Actions */}
      <Card className="bg-gradient-card border-border/50 shadow-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {quickActions.map((action, index) => (
            <Button 
              key={index}
              variant={action.variant}
              size="sm" 
              className="w-full justify-start transition-all duration-200 hover:scale-105"
            >
              {action.icon}
              {action.label}
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="bg-gradient-card border-border/50 shadow-card">
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-start gap-3 group hover:bg-muted/50 rounded-lg p-2 -m-2 transition-colors">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 group-hover:scale-125 transition-transform" />
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {activity.type === "new" && "New prompt added:"}
                    {activity.type === "updated" && "Updated:"}
                    {activity.type === "forked" && "Forked:"}
                    {activity.type === "contributor" && "Community:"}
                  </span>
                </div>
                <p className="text-sm text-foreground/90 font-medium">{activity.title}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{activity.time}</span>
                  <span>•</span>
                  <span>by {activity.author}</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Popular Categories */}
      <Card className="bg-gradient-card border-border/50 shadow-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Star className="w-5 h-5 text-accent" />
            Popular Categories
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {popularCategories.map((category, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-all duration-200 hover:scale-105 group"
            >
              <div className="flex items-center gap-3">
                <div className={`${category.color} group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  {category.name}
                </span>
              </div>
              <Badge variant="secondary" className="text-xs font-medium">
                {category.count}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Community */}
      <Card className="bg-gradient-card border-border/50 shadow-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Github className="w-5 h-5 text-foreground" />
            Community
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Contributors</span>
            <span className="font-semibold">156</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Total Prompts</span>
            <span className="font-semibold">2,500+</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Active Users</span>
            <span className="font-semibold">12.5K</span>
          </div>
          <Button variant="outline" size="sm" className="w-full mt-4">
            <User className="w-4 h-4 mr-2" />
            Join Community
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
};

export default Sidebar;