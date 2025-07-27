import PromptCard from "./PromptCard";
import { Search } from "lucide-react";

// Sample prompts data
const samplePrompts = [
  {
    title: "Creative Story Generator",
    description: "Generate engaging stories with compelling characters and plot twists",
    prompt: "Write a creative short story about [TOPIC] that includes [CHARACTER TYPE] as the main character. The story should have an unexpected plot twist and be approximately [LENGTH] words long. Include vivid descriptions and dialogue.",
    category: "Writing",
    tags: ["creative", "storytelling", "fiction", "character development"],
    likes: 245,
    rating: 4.8,
    author: "StoryMaster"
  },
  {
    title: "Business Strategy Analyzer",
    description: "Comprehensive business analysis and strategic recommendations",
    prompt: "Analyze the business strategy of [COMPANY/INDUSTRY] focusing on: 1) Market position 2) Competitive advantages 3) Growth opportunities 4) Potential threats 5) Actionable recommendations for the next 12 months.",
    category: "Business",
    tags: ["strategy", "analysis", "business", "consulting"],
    likes: 189,
    rating: 4.7,
    author: "BizConsult"
  },
  {
    title: "Code Review Assistant",
    description: "Detailed code review with optimization suggestions and best practices",
    prompt: "Review this [PROGRAMMING LANGUAGE] code for: 1) Bugs and errors 2) Performance optimization 3) Code readability 4) Security vulnerabilities 5) Best practices adherence. Provide specific suggestions for improvement:\n\n[CODE HERE]",
    category: "Coding",
    tags: ["programming", "debugging", "optimization", "review"],
    likes: 312,
    rating: 4.9,
    author: "CodeReviewer"
  },
  {
    title: "Midjourney Portrait Prompt",
    description: "Professional portrait generation with specific styling and mood",
    prompt: "Professional headshot portrait of [DESCRIPTION], [LIGHTING] lighting, [MOOD] expression, [BACKGROUND] background, shot with [CAMERA] camera, [STYLE] photography style, ultra-detailed, 8k resolution --ar 2:3 --v 6",
    category: "Midjourney",
    tags: ["portrait", "photography", "professional", "artistic"],
    likes: 156,
    rating: 4.6,
    author: "AIArtist"
  },
  {
    title: "Learning Path Creator",
    description: "Structured learning curriculum for any topic with milestones",
    prompt: "Create a comprehensive learning path for [SUBJECT/SKILL] including: 1) Prerequisites 2) Learning objectives 3) Step-by-step curriculum 4) Recommended resources 5) Practice exercises 6) Assessment milestones 7) Estimated timeline for [SKILL LEVEL] learner.",
    category: "Education",
    tags: ["learning", "curriculum", "education", "skill development"],
    likes: 203,
    rating: 4.8,
    author: "EduPlanner"
  },
  {
    title: "Social Media Campaign",
    description: "Complete social media strategy with content calendar and metrics",
    prompt: "Design a 30-day social media campaign for [BRAND/PRODUCT] targeting [AUDIENCE]. Include: 1) Campaign objectives 2) Content themes 3) Posting schedule 4) Hashtag strategy 5) Engagement tactics 6) Success metrics 7) Sample posts for each platform.",
    category: "Marketing",
    tags: ["social media", "marketing", "campaign", "content strategy"],
    likes: 178,
    rating: 4.5,
    author: "MarketingPro"
  }
];

interface PromptGridProps {
  searchQuery?: string;
  filters?: string[];
}

const PromptGrid = ({ searchQuery = "", filters = [] }: PromptGridProps) => {
  // Filter prompts based on search query and filters
  const filteredPrompts = samplePrompts.filter(prompt => {
    const matchesSearch = searchQuery === "" || 
      prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilters = filters.length === 0 || 
      filters.some(filter => 
        prompt.tags.includes(filter.toLowerCase()) ||
        prompt.category.toLowerCase() === filter.toLowerCase()
      );
    
    return matchesSearch && matchesFilters;
  });

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            {searchQuery || filters.length > 0 ? "Search Results" : "Featured Prompts"}
          </h2>
          <p className="text-muted-foreground">
            {filteredPrompts.length} prompt{filteredPrompts.length !== 1 ? 's' : ''} found
          </p>
        </div>
        
        {filteredPrompts.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No prompts found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrompts.map((prompt, index) => (
              <PromptCard key={index} {...prompt} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PromptGrid;