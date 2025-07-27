import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import SearchBar from "@/components/SearchBar";
import PromptGrid from "@/components/PromptGrid";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<string[]>([]);

  const handleSearch = (query: string, selectedFilters: string[]) => {
    setSearchQuery(query);
    setFilters(selectedFilters);
    
    // Scroll to results
    const resultsSection = document.getElementById("search-results");
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CategoryGrid />
      <SearchBar onSearch={handleSearch} />
      <div id="search-results">
        <PromptGrid searchQuery={searchQuery} filters={filters} />
      </div>
    </div>
  );
};

export default Index;
