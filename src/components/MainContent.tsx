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
          <div>
            <h1 className="text-3xl font-bold">Browse System Prompts</h1>
            <p className="text-muted-foreground mt-1">
              Explore our curated collection of system prompts
            </p>
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

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search system prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 shadow-card border-border/50 focus:shadow-elevated transition-all duration-300"
            />
          </div>
          <Button type="submit" variant="gradient">
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