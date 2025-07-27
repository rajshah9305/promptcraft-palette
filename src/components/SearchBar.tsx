import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string, filters: string[]) => void;
}

const popularTags = [
  "creative", "business", "writing", "art", "productivity", 
  "marketing", "education", "coding", "analysis", "social media"
];

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleSearch = () => {
    onSearch(query, activeFilters);
  };

  const toggleFilter = (tag: string) => {
    setActiveFilters(prev => 
      prev.includes(tag) 
        ? prev.filter(f => f !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Search Input */}
          <div className="relative">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search for prompts... (e.g., 'creative writing', 'logo design', 'data analysis')"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10 pr-4 py-6 text-lg shadow-card border-border/50 focus:shadow-elevated transition-all duration-300"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Button 
                variant="gradient" 
                size="lg" 
                onClick={handleSearch}
                className="px-8"
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Popular Tags</h3>
              {activeFilters.length > 0 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear filters
                </Button>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={activeFilters.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                    activeFilters.includes(tag) 
                      ? "bg-primary text-primary-foreground shadow-glow" 
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                  onClick={() => toggleFilter(tag)}
                >
                  {tag}
                  {activeFilters.includes(tag) && (
                    <X className="w-3 h-3 ml-1" />
                  )}
                </Badge>
              ))}
            </div>
          </div>

          {/* Active Filters Display */}
          {activeFilters.length > 0 && (
            <div className="bg-muted/50 rounded-lg p-4 border border-border/30">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Filter className="w-4 h-4" />
                <span>Active filters:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeFilters.map((filter) => (
                  <Badge 
                    key={filter} 
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {filter}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchBar;