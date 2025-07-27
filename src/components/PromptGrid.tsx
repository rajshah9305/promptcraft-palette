import PromptCard from "./PromptCard";
import { Search } from "lucide-react";

// Enhanced sample prompts data with realistic metrics
const samplePrompts = [
  {
    title: "Advanced Code Reviewer",
    description: "A comprehensive system prompt for conducting thorough code reviews with security and performance insights.",
    prompt: "You are an expert code reviewer with deep knowledge of software engineering best practices. Review this code for: 1) Bugs and errors 2) Performance optimization 3) Security vulnerabilities 4) Code readability 5) Best practices adherence. Provide specific suggestions:\n\n[CODE HERE]",
    category: "Coding",
    tags: ["code-review", "security", "performance", "best-practices"],
    likes: 1250,
    rating: 4.8,
    author: "alexdev",
    views: 8900,
    downloads: 340,
    featured: true
  },
  {
    title: "Creative Writing Assistant",
    description: "Helps generate engaging stories, articles, and creative content with proper structure and flow.",
    prompt: "You are a creative writing assistant specializing in narrative development and storytelling. Help create [TYPE] content about [TOPIC] with: 1) Compelling characters 2) Engaging plot 3) Vivid descriptions 4) Natural dialogue 5) Proper pacing.",
    category: "Writing",
    tags: ["creative", "writing", "storytelling", "content"],
    likes: 980,
    rating: 4.6,
    author: "writerai",
    views: 5600,
    downloads: 210,
    featured: true
  },
  {
    title: "Data Analysis Expert",
    description: "Specialized prompt for analyzing datasets, generating insights, and creating visualizations.",
    prompt: "You are a data scientist with expertise in statistical analysis and data visualization. Analyze this dataset: 1) Identify patterns and trends 2) Provide statistical insights 3) Suggest visualizations 4) Recommend actions 5) Explain methodology clearly.",
    category: "Analysis",
    tags: ["analysis", "data", "statistics", "insights"],
    likes: 750,
    rating: 4.7,
    author: "datascience",
    views: 4200,
    downloads: 180,
    featured: true
  },
  {
    title: "Educational Tutor",
    description: "Patient and knowledgeable tutor that adapts to different learning styles and skill levels.",
    prompt: "You are an experienced educator who excels at breaking down complex concepts. Teach [SUBJECT] by: 1) Assessing current knowledge 2) Adapting to learning style 3) Using examples and analogies 4) Providing practice exercises 5) Encouraging questions.",
    category: "Education",
    tags: ["education", "tutoring", "learning", "adaptive"],
    likes: 650,
    rating: 4.9,
    author: "edutech",
    views: 3800,
    downloads: 150
  },
  {
    title: "Business Strategy Analyzer",
    description: "Comprehensive business analysis and strategic recommendations for market positioning.",
    prompt: "You are a senior business consultant specializing in strategic analysis. Analyze [COMPANY/SITUATION]: 1) Market position assessment 2) Competitive landscape 3) Growth opportunities 4) Risk factors 5) Strategic recommendations with timelines.",
    category: "Business",
    tags: ["strategy", "business", "analysis", "consulting"],
    likes: 520,
    rating: 4.5,
    author: "bizstrategy",
    views: 2900,
    downloads: 95
  },
  {
    title: "API Documentation Generator",
    description: "Creates comprehensive API documentation with examples and best practices.",
    prompt: "You are a technical writer specializing in API documentation. Create documentation for [API] including: 1) Clear endpoint descriptions 2) Request/response examples 3) Error handling 4) Authentication details 5) Code samples in multiple languages.",
    category: "Coding",
    tags: ["technical", "documentation", "api", "developer"],
    likes: 890,
    rating: 4.6,
    author: "devdocs",
    views: 6100,
    downloads: 220
  },
  {
    title: "Personal Assistant Pro",
    description: "Comprehensive personal assistant for task management, scheduling, and productivity.",
    prompt: "You are a highly organized personal assistant with expertise in productivity and time management. Help with [TASK TYPE]: 1) Prioritize tasks effectively 2) Create detailed schedules 3) Suggest productivity tools 4) Optimize workflows 5) Track progress and deadlines.",
    category: "Business",
    tags: ["assistant", "productivity", "scheduling", "organization"],
    likes: 430,
    rating: 4.4,
    author: "productivity",
    views: 2100,
    downloads: 87
  },
  {
    title: "Midjourney Portrait Master",
    description: "Professional portrait generation with specific styling, lighting, and mood control.",
    prompt: "Professional headshot portrait of [DESCRIPTION], [LIGHTING] lighting, [MOOD] expression, [BACKGROUND] background, shot with [CAMERA], [STYLE] photography style, ultra-detailed, 8k resolution, photorealistic --ar 2:3 --v 6 --style raw",
    category: "Midjourney",
    tags: ["portrait", "photography", "professional", "artistic"],
    likes: 670,
    rating: 4.7,
    author: "aiartist",
    views: 4500,
    downloads: 156
  },
  {
    title: "Social Media Campaign Strategist",
    description: "Complete social media strategy with content calendar, engagement tactics, and metrics.",
    prompt: "You are a social media marketing expert. Create a 30-day campaign for [BRAND/PRODUCT]: 1) Target audience analysis 2) Content themes and calendar 3) Platform-specific strategies 4) Hashtag research 5) Engagement tactics 6) Success metrics 7) Crisis management plan.",
    category: "Marketing",
    tags: ["social-media", "marketing", "campaign", "content-strategy"],
    likes: 380,
    rating: 4.3,
    author: "socialmedia",
    views: 1900,
    downloads: 72
  }
];

interface PromptGridProps {
  searchQuery?: string;
  activeCategory?: string;
  sortBy?: string;
}

const PromptGrid = ({ searchQuery = "", activeCategory = "all", sortBy = "popular" }: PromptGridProps) => {
  // Filter prompts based on search query and category
  let filteredPrompts = samplePrompts.filter(prompt => {
    const matchesSearch = searchQuery === "" || 
      prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === "all" || 
      prompt.category.toLowerCase().replace(/\s+/g, '-') === activeCategory ||
      prompt.tags.some(tag => tag.toLowerCase().replace(/\s+/g, '-') === activeCategory);
    
    return matchesSearch && matchesCategory;
  });

  // Sort prompts based on sortBy parameter
  if (sortBy === "popular") {
    filteredPrompts = filteredPrompts.sort((a, b) => b.likes - a.likes);
  } else if (sortBy === "rating") {
    filteredPrompts = filteredPrompts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "recent") {
    // For demo purposes, just reverse the array
    filteredPrompts = filteredPrompts.reverse();
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            {searchQuery || activeCategory !== "all" ? "Search Results" : "Featured Prompts"}
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            {filteredPrompts.length} prompt{filteredPrompts.length !== 1 ? 's' : ''} found
          </p>
        </div>
      </div>
        
      {filteredPrompts.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No prompts found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search terms or category filter to find what you're looking for.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPrompts.map((prompt, index) => (
            <PromptCard key={index} {...prompt} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PromptGrid;