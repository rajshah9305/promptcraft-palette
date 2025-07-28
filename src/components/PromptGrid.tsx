import PromptCard from "./PromptCard";
import { Search, Filter, TrendingUp, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { promptsLibrary, getPromptsByCategory, searchPrompts, getFeaturedPrompts } from "@/data/prompts";
import { useState } from "react";

interface PromptGridProps {
  searchQuery?: string;
  activeCategory?: string;
  sortBy?: string;
}

const PromptGrid = ({ searchQuery = "", activeCategory = "all", sortBy = "popular" }: PromptGridProps) => {
  const [viewMode, setViewMode] = useState<"featured" | "all" | "recent">("featured");
  
  // Get prompts based on view mode and filters
  let filteredPrompts = promptsLibrary;
  
  // Apply view mode filter
  if (viewMode === "featured") {
    filteredPrompts = getFeaturedPrompts();
  } else if (viewMode === "recent") {
    filteredPrompts = [...promptsLibrary].reverse().slice(0, 12);
  }
  
  // Apply search filter
  if (searchQuery) {
    filteredPrompts = searchPrompts(searchQuery);
  }
  
  // Apply category filter
  if (activeCategory !== "all") {
    filteredPrompts = getPromptsByCategory(activeCategory);
  }
  
  // Apply both search and category filters if both exist
  if (searchQuery && activeCategory !== "all") {
    filteredPrompts = promptsLibrary.filter(prompt => {
      const matchesSearch = 
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        prompt.useCase.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        prompt.category.toLowerCase().replace(/\s+/g, '-') === activeCategory ||
        prompt.tags.some(tag => tag.toLowerCase().replace(/\s+/g, '-') === activeCategory);
      
      return matchesSearch && matchesCategory;
    });
  }

  // Sort prompts
  if (sortBy === "popular") {
    filteredPrompts = filteredPrompts.sort((a, b) => b.likes - a.likes);
  } else if (sortBy === "rating") {
    filteredPrompts = filteredPrompts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "recent") {
    filteredPrompts = [...filteredPrompts].reverse();
  }

  const getTotalPrompts = () => {
    return searchQuery || activeCategory !== "all" ? filteredPrompts.length : promptsLibrary.length;
  };

  return (
    <section className="space-y-6">
      {/* Enhanced Header with View Modes */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {searchQuery 
                ? `Search Results for "${searchQuery}"` 
                : activeCategory !== "all" 
                  ? `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Prompts`
                  : viewMode === "featured" 
                    ? "Featured Prompts" 
                    : viewMode === "recent" 
                      ? "Recently Added" 
                      : "All Prompts"
              }
            </h2>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                {getTotalPrompts()} prompt{getTotalPrompts() !== 1 ? 's' : ''} available
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Updated daily
              </span>
              <span>•</span>
              <span>{promptsLibrary.filter(p => p.featured).length} featured</span>
            </div>
          </div>
        </div>

        {/* View Mode Toggle */}
        {!searchQuery && activeCategory === "all" && (
          <div className="flex items-center gap-2 p-1 bg-muted/30 rounded-lg border border-border/50 w-fit">
            <Button
              variant={viewMode === "featured" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("featured")}
              className="flex items-center gap-2"
            >
              <Star className="w-4 h-4" />
              Featured
            </Button>
            <Button
              variant={viewMode === "recent" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("recent")}
              className="flex items-center gap-2"
            >
              <Clock className="w-4 h-4" />
              Recent
            </Button>
            <Button
              variant={viewMode === "all" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("all")}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              All
            </Button>
          </div>
        )}
      </div>
        
      {filteredPrompts.length === 0 ? (
        <div className="text-center py-16 space-y-4">
          <div className="w-20 h-20 bg-gradient-to-br from-muted to-muted/50 rounded-full flex items-center justify-center mx-auto">
            <Search className="w-10 h-10 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">No prompts found</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Try adjusting your search terms or category filter to discover more AI prompts.
            </p>
          </div>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Browse All Prompts
          </Button>
        </div>
      ) : (
        <>
          {/* Category Stats for filtered results */}
          {(searchQuery || activeCategory !== "all") && (
            <div className="flex items-center gap-2 p-3 bg-accent/5 border border-accent/20 rounded-lg">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-primary/10">
                    {filteredPrompts.length} found
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Star className="w-4 h-4" />
                  Avg rating: {(filteredPrompts.reduce((acc, p) => acc + p.rating, 0) / filteredPrompts.length).toFixed(1)}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <TrendingUp className="w-4 h-4" />
                  {filteredPrompts.reduce((acc, p) => acc + p.downloads, 0).toLocaleString()} total downloads
                </div>
              </div>
            </div>
          )}

          {/* Enhanced Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPrompts.map((prompt) => (
              <PromptCard key={prompt.id} {...prompt} />
            ))}
          </div>

          {/* Load More Button for large result sets */}
          {filteredPrompts.length >= 12 && (
            <div className="text-center pt-6">
              <Button variant="outline" size="lg" className="hover-glow">
                Load More Prompts
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default PromptGrid;