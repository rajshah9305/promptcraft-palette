import { useState } from "react";
import CategoryTabs from "./CategoryTabs";
import PromptGrid from "./PromptGrid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, SortAsc } from "lucide-react";

const MainContent = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality handled by PromptGrid
  };

  return (
    <main className="flex-1 space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Browse System Prompts
            </h1>
            <p className="text-muted-foreground">
              Discover high-quality AI prompts from our curated collection
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                1,247 prompts available
              </span>
              <span>•</span>
              <span>Updated daily</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline" size="sm">
              <SortAsc className="w-4 h-4 mr-2" />
              Sort: Popular
            </Button>
          </div>
        </div>

        {/* Enhanced Search Bar */}
        <form onSubmit={handleSearch} className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 z-10" />
            <Input
              placeholder="Search prompts, categories, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 h-12 shadow-card border-border/50 focus:shadow-elevated transition-all duration-300 bg-gradient-to-r from-background to-muted/20 focus:from-background focus:to-accent/5"
            />
          </div>
          <Button type="submit" variant="gradient" size="lg" className="px-8 hover-glow">
            Search
          </Button>
        </form>

        {/* Category Tabs */}
        <CategoryTabs 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
      </div>

      {/* Prompt Grid */}
      <PromptGrid 
        searchQuery={searchQuery} 
        activeCategory={activeCategory}
        sortBy={sortBy}
      />
    </main>
  );
};

export default MainContent;