// Comprehensive AI Prompts Library for Daily Use and Coding Tasks

export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  subcategory?: string;
  tags: string[];
  likes: number;
  rating: number;
  author: string;
  views: number;
  downloads: number;
  featured?: boolean;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  useCase: string;
}

export const promptsLibrary: Prompt[] = [
  // === DAILY PRODUCTIVITY PROMPTS ===
  {
    id: "daily-task-manager",
    title: "Smart Daily Task Manager",
    description: "AI assistant for organizing, prioritizing, and managing daily tasks with time estimates and productivity tips.",
    prompt: "You are a productivity expert and personal task manager. Help me organize my day by:\n\n1. TASK ANALYSIS: Review my task list and categorize by urgency/importance\n2. TIME ESTIMATION: Provide realistic time estimates for each task\n3. PRIORITIZATION: Rank tasks using the Eisenhower Matrix\n4. SCHEDULING: Create an optimal daily schedule with breaks\n5. PRODUCTIVITY TIPS: Suggest specific techniques for each task type\n\nTasks to organize: [LIST YOUR TASKS HERE]\n\nFormat your response with clear sections and actionable recommendations.",
    category: "Productivity",
    tags: ["task-management", "scheduling", "productivity", "daily-planning"],
    likes: 2150,
    rating: 4.9,
    author: "productivity_pro",
    views: 15400,
    downloads: 847,
    featured: true,
    difficulty: "beginner",
    useCase: "Daily task organization and time management"
  },
  {
    id: "email-composer",
    title: "Professional Email Composer",
    description: "Crafts professional, clear, and effective emails for any business situation.",
    prompt: "You are a professional communication expert. Help me compose a [TYPE] email that is:\n\n✅ Professional and appropriately toned\n✅ Clear and concise\n✅ Action-oriented with clear next steps\n✅ Properly structured with subject line\n\nEmail details:\n- Recipient: [RECIPIENT]\n- Purpose: [PURPOSE]\n- Key points: [KEY POINTS]\n- Desired outcome: [OUTCOME]\n\nProvide both the subject line and email body with explanations for word choices.",
    category: "Communication",
    tags: ["email", "professional", "business-communication", "writing"],
    likes: 1890,
    rating: 4.8,
    author: "comm_expert",
    views: 12300,
    downloads: 623,
    featured: true,
    difficulty: "beginner",
    useCase: "Professional email writing for any business context"
  },
  {
    id: "meeting-prep",
    title: "Meeting Preparation Assistant",
    description: "Comprehensive meeting preparation including agenda, talking points, and follow-up actions.",
    prompt: "You are a meeting facilitation expert. Help me prepare for my upcoming meeting:\n\nMeeting Details:\n- Type: [MEETING TYPE]\n- Duration: [DURATION]\n- Participants: [PARTICIPANTS]\n- Objective: [OBJECTIVE]\n\nPlease provide:\n\n1. 📋 STRUCTURED AGENDA with time allocations\n2. 🎯 KEY TALKING POINTS and questions to ask\n3. 📊 PREPARATION MATERIALS needed\n4. 🎤 OPENING AND CLOSING statements\n5. ✅ SUCCESS METRICS for the meeting\n6. 📝 FOLLOW-UP action template\n\nMake it actionable and time-efficient.",
    category: "Business",
    tags: ["meetings", "preparation", "agenda", "facilitation"],
    likes: 1340,
    rating: 4.7,
    author: "meeting_master",
    views: 8900,
    downloads: 445,
    difficulty: "intermediate",
    useCase: "Prepare for any type of business meeting"
  },

  // === CODING PROMPTS ===
  {
    id: "code-reviewer-pro",
    title: "Expert Code Reviewer",
    description: "Comprehensive code review focusing on best practices, security, performance, and maintainability.",
    prompt: "You are a senior software engineer with 15+ years of experience. Perform a thorough code review:\n\n🔍 REVIEW AREAS:\n1. **Logic & Functionality**: Correctness and edge cases\n2. **Security**: Vulnerabilities and best practices\n3. **Performance**: Optimization opportunities\n4. **Maintainability**: Code structure and readability\n5. **Best Practices**: Language-specific conventions\n6. **Testing**: Test coverage and quality\n\n📋 CODE TO REVIEW:\n```\n[PASTE YOUR CODE HERE]\n```\n\n📊 PROVIDE:\n- ✅ What's working well\n- ⚠️ Issues found (with severity levels)\n- 💡 Specific improvement suggestions\n- 🔧 Code examples for fixes\n- 📈 Overall quality score (1-10)",
    category: "Code Review",
    tags: ["code-review", "best-practices", "security", "performance", "maintainability"],
    likes: 3240,
    rating: 4.9,
    author: "senior_dev",
    views: 28500,
    downloads: 1340,
    featured: true,
    difficulty: "intermediate",
    useCase: "Get expert feedback on any code before production"
  },
  {
    id: "debug-assistant",
    title: "Smart Debug Assistant",
    description: "Systematically diagnose and fix bugs with step-by-step debugging methodology.",
    prompt: "You are an expert debugging specialist. Help me solve this bug using systematic debugging:\n\n🐛 BUG INFORMATION:\n- Error/Issue: [DESCRIBE THE BUG]\n- Expected behavior: [WHAT SHOULD HAPPEN]\n- Actual behavior: [WHAT'S HAPPENING]\n- Code snippet: [RELEVANT CODE]\n- Environment: [LANGUAGE/FRAMEWORK/VERSION]\n\n🔧 DEBUGGING PROCESS:\n1. **Issue Analysis**: Break down the problem\n2. **Root Cause Investigation**: Systematic approach to find the source\n3. **Solution Options**: Multiple approaches with pros/cons\n4. **Implementation**: Step-by-step fix\n5. **Testing Strategy**: How to verify the fix\n6. **Prevention**: Avoid similar issues in the future\n\nProvide code examples and debugging commands where applicable.",
    category: "Debugging",
    tags: ["debugging", "troubleshooting", "problem-solving", "bug-fixing"],
    likes: 2890,
    rating: 4.8,
    author: "debug_wizard",
    views: 19800,
    downloads: 976,
    featured: true,
    difficulty: "intermediate",
    useCase: "Systematic approach to debugging any programming issue"
  },
  {
    id: "api-designer",
    title: "RESTful API Designer",
    description: "Design robust, scalable APIs following REST principles and industry standards.",
    prompt: "You are an API architecture expert. Design a RESTful API for the following requirements:\n\n📋 PROJECT REQUIREMENTS:\n- Purpose: [API PURPOSE]\n- Main entities: [LIST ENTITIES]\n- Key operations: [LIST OPERATIONS]\n- Expected scale: [USER/REQUEST VOLUME]\n\n🏗️ DESIGN ELEMENTS:\n1. **Resource Design**: URL structure and naming conventions\n2. **HTTP Methods**: Proper verb usage for each endpoint\n3. **Request/Response**: JSON schemas and examples\n4. **Authentication**: Security approach and implementation\n5. **Error Handling**: Consistent error responses\n6. **Pagination**: For large datasets\n7. **Versioning**: API evolution strategy\n8. **Documentation**: OpenAPI/Swagger specification\n\n📝 DELIVERABLES:\n- Complete endpoint list\n- Example requests/responses\n- Error codes and messages\n- Implementation notes",
    category: "API Design",
    tags: ["api", "rest", "architecture", "backend", "design"],
    likes: 1750,
    rating: 4.7,
    author: "api_architect",
    views: 13200,
    downloads: 587,
    difficulty: "intermediate",
    useCase: "Design professional APIs from requirements"
  },
  {
    id: "refactoring-guide",
    title: "Code Refactoring Specialist",
    description: "Improve code quality through systematic refactoring while maintaining functionality.",
    prompt: "You are a code refactoring expert. Help me improve this code while preserving functionality:\n\n📝 CODE TO REFACTOR:\n```\n[PASTE CODE HERE]\n```\n\n🎯 REFACTORING GOALS:\n- Primary focus: [READABILITY/PERFORMANCE/MAINTAINABILITY]\n- Constraints: [ANY LIMITATIONS]\n\n🔄 REFACTORING PROCESS:\n1. **Code Analysis**: Current issues and technical debt\n2. **Improvement Plan**: Step-by-step refactoring strategy\n3. **Pattern Application**: Design patterns that could help\n4. **Refactored Code**: Clean, improved version\n5. **Performance Impact**: Before/after comparison\n6. **Testing Strategy**: Ensure functionality preservation\n7. **Migration Plan**: Safe deployment approach\n\n✅ ENSURE:\n- Backward compatibility\n- Improved readability\n- Better maintainability\n- Performance considerations",
    category: "Refactoring",
    tags: ["refactoring", "clean-code", "design-patterns", "code-quality"],
    likes: 2100,
    rating: 4.6,
    author: "clean_coder",
    views: 16700,
    downloads: 734,
    difficulty: "intermediate",
    useCase: "Systematically improve existing code quality"
  },
  {
    id: "test-generator",
    title: "Smart Test Case Generator",
    description: "Generate comprehensive test cases including unit tests, integration tests, and edge cases.",
    prompt: "You are a testing expert. Generate comprehensive test cases for the following code:\n\n📝 CODE TO TEST:\n```\n[PASTE CODE HERE]\n```\n\n🧪 TEST REQUIREMENTS:\n- Testing framework: [JEST/MOCHA/PYTEST/etc.]\n- Test types needed: [UNIT/INTEGRATION/E2E]\n- Coverage target: [PERCENTAGE]\n\n📋 TEST GENERATION:\n1. **Test Strategy**: Overall testing approach\n2. **Unit Tests**: Function-level testing\n3. **Integration Tests**: Component interaction testing\n4. **Edge Cases**: Boundary conditions and error scenarios\n5. **Mock Setup**: External dependencies mocking\n6. **Test Data**: Realistic test datasets\n7. **Assertions**: What to verify in each test\n8. **Coverage Analysis**: Areas covered and missed\n\n💡 INCLUDE:\n- Test file structure\n- Setup and teardown procedures\n- Parameterized tests for multiple scenarios\n- Performance benchmarks if applicable",
    category: "Testing",
    tags: ["testing", "unit-tests", "test-cases", "quality-assurance"],
    likes: 1640,
    rating: 4.5,
    author: "test_guru",
    views: 11500,
    downloads: 521,
    difficulty: "intermediate",
    useCase: "Generate comprehensive test suites for any code"
  },

  // === DOCUMENTATION PROMPTS ===
  {
    id: "tech-documentation",
    title: "Technical Documentation Writer",
    description: "Create clear, comprehensive technical documentation for any project or codebase.",
    prompt: "You are a technical writing expert. Create comprehensive documentation for:\n\n📋 PROJECT INFO:\n- Project name: [PROJECT NAME]\n- Type: [API/LIBRARY/APPLICATION]\n- Target audience: [DEVELOPERS/END-USERS/BOTH]\n- Tech stack: [TECHNOLOGIES USED]\n\n📚 DOCUMENTATION STRUCTURE:\n1. **Overview**: Project purpose and key features\n2. **Getting Started**: Installation and setup\n3. **Usage Examples**: Common use cases with code\n4. **API Reference**: Detailed function/endpoint docs\n5. **Configuration**: Settings and customization\n6. **Troubleshooting**: Common issues and solutions\n7. **Contributing**: Guidelines for contributors\n8. **Changelog**: Version history and updates\n\n✅ ENSURE:\n- Clear, jargon-free language\n- Code examples that work\n- Logical information hierarchy\n- Searchable content structure\n- Visual aids where helpful",
    category: "Documentation",
    tags: ["documentation", "technical-writing", "readme", "api-docs"],
    likes: 1420,
    rating: 4.6,
    author: "doc_specialist",
    views: 9800,
    downloads: 456,
    difficulty: "beginner",
    useCase: "Create professional documentation for any technical project"
  },

  // === DATA ANALYSIS PROMPTS ===
  {
    id: "data-analyst",
    title: "Advanced Data Analyst",
    description: "Analyze datasets, identify patterns, and generate actionable insights with visualizations.",
    prompt: "You are a senior data analyst with expertise in statistical analysis and business intelligence. Analyze the provided data:\n\n📊 DATA ANALYSIS REQUEST:\n- Dataset: [DESCRIBE YOUR DATA]\n- Business context: [WHAT DOMAIN/INDUSTRY]\n- Key questions: [WHAT YOU WANT TO LEARN]\n- Decision impact: [HOW RESULTS WILL BE USED]\n\n🔍 ANALYSIS FRAMEWORK:\n1. **Data Overview**: Structure, quality, and completeness assessment\n2. **Exploratory Analysis**: Key statistics and initial patterns\n3. **Trend Analysis**: Time-based patterns and seasonality\n4. **Correlation Analysis**: Relationships between variables\n5. **Segmentation**: Meaningful data groupings\n6. **Anomaly Detection**: Outliers and unusual patterns\n7. **Predictive Insights**: Forecasting and trend projection\n8. **Recommendations**: Actionable business insights\n\n📈 DELIVERABLES:\n- Executive summary with key findings\n- Statistical insights with confidence levels\n- Visualization recommendations\n- Action items with priority levels",
    category: "Data Analysis",
    tags: ["data-analysis", "statistics", "insights", "business-intelligence"],
    likes: 1890,
    rating: 4.7,
    author: "data_scientist",
    views: 14200,
    downloads: 678,
    difficulty: "intermediate",
    useCase: "Extract meaningful insights from any dataset"
  },

  // === LEARNING & EDUCATION PROMPTS ===
  {
    id: "coding-tutor",
    title: "Personal Coding Tutor",
    description: "Learn programming concepts through interactive explanations, examples, and practice exercises.",
    prompt: "You are an experienced programming instructor who excels at making complex concepts understandable. Teach me about [TOPIC]:\n\n🎯 LEARNING OBJECTIVE:\n- Topic: [SPECIFIC PROGRAMMING CONCEPT]\n- My level: [BEGINNER/INTERMEDIATE/ADVANCED]\n- Programming language: [LANGUAGE PREFERENCE]\n- Learning style: [VISUAL/HANDS-ON/THEORETICAL]\n\n📚 TEACHING APPROACH:\n1. **Concept Introduction**: Clear explanation with real-world analogies\n2. **Why It Matters**: Practical applications and benefits\n3. **Step-by-Step Breakdown**: Logical progression of ideas\n4. **Code Examples**: Multiple examples from simple to complex\n5. **Common Mistakes**: What to avoid and why\n6. **Practice Exercises**: Hands-on coding challenges\n7. **Best Practices**: Professional development tips\n8. **Further Learning**: Related concepts and next steps\n\n💡 TEACHING STYLE:\n- Use simple analogies for complex concepts\n- Provide immediately applicable examples\n- Encourage experimentation\n- Build confidence through progressive difficulty",
    category: "Education",
    tags: ["programming", "tutorial", "learning", "coding-education"],
    likes: 2340,
    rating: 4.9,
    author: "code_teacher",
    views: 18900,
    downloads: 892,
    featured: true,
    difficulty: "beginner",
    useCase: "Learn any programming concept through personalized instruction"
  },

  // === CREATIVE & CONTENT PROMPTS ===
  {
    id: "content-strategist",
    title: "Content Strategy Planner",
    description: "Develop comprehensive content strategies for blogs, social media, and marketing campaigns.",
    prompt: "You are a content marketing strategist with expertise in audience engagement and conversion optimization. Create a content strategy for:\n\n🎯 CONTENT BRIEF:\n- Brand/Business: [YOUR BRAND]\n- Target audience: [DEMOGRAPHICS AND INTERESTS]\n- Goals: [AWARENESS/ENGAGEMENT/CONVERSION]\n- Content types: [BLOG/SOCIAL/VIDEO/EMAIL]\n- Timeline: [DURATION]\n\n📋 STRATEGY COMPONENTS:\n1. **Audience Analysis**: Detailed audience personas and pain points\n2. **Content Pillars**: Core themes that align with business goals\n3. **Content Calendar**: 30-day calendar with specific topics\n4. **Platform Strategy**: Tailored approach for each channel\n5. **Content Types**: Mix of educational, entertaining, and promotional\n6. **SEO Strategy**: Keyword research and optimization\n7. **Engagement Tactics**: Community building and interaction strategies\n8. **Metrics & KPIs**: Success measurement framework\n\n✅ DELIVERABLES:\n- Content calendar with posting schedule\n- Template library for different content types\n- Hashtag and keyword strategies\n- Performance tracking recommendations",
    category: "Content Strategy",
    tags: ["content-marketing", "strategy", "social-media", "seo"],
    likes: 1560,
    rating: 4.5,
    author: "content_pro",
    views: 10800,
    downloads: 523,
    difficulty: "intermediate",
    useCase: "Plan and execute effective content marketing campaigns"
  },

  // === BUSINESS & STRATEGY PROMPTS ===
  {
    id: "business-analyzer",
    title: "Business Analysis Consultant",
    description: "Comprehensive business analysis including market research, competitive analysis, and strategic recommendations.",
    prompt: "You are a senior business consultant with expertise in strategic analysis and market research. Analyze the following business scenario:\n\n🏢 BUSINESS CONTEXT:\n- Company/Idea: [BUSINESS DESCRIPTION]\n- Industry: [INDUSTRY SECTOR]\n- Market: [TARGET MARKET]\n- Current situation: [CURRENT STATE]\n- Analysis goal: [WHAT YOU NEED TO UNDERSTAND]\n\n📊 ANALYSIS FRAMEWORK:\n1. **Market Analysis**: Size, trends, and growth opportunities\n2. **Competitive Landscape**: Key players and positioning\n3. **SWOT Analysis**: Strengths, weaknesses, opportunities, threats\n4. **Value Proposition**: Unique selling points and differentiation\n5. **Customer Analysis**: Needs, behaviors, and preferences\n6. **Financial Projections**: Revenue potential and cost structure\n7. **Risk Assessment**: Potential challenges and mitigation strategies\n8. **Strategic Recommendations**: Actionable next steps\n\n🎯 DELIVERABLES:\n- Executive summary with key insights\n- Market opportunity assessment\n- Competitive positioning strategy\n- Implementation roadmap with timelines",
    category: "Business Strategy",
    tags: ["business-analysis", "strategy", "market-research", "consulting"],
    likes: 1790,
    rating: 4.6,
    author: "biz_consultant",
    views: 12400,
    downloads: 634,
    difficulty: "advanced",
    useCase: "Make informed business decisions through comprehensive analysis"
  },

  // === AUTOMATION & WORKFLOW PROMPTS ===
  {
    id: "workflow-optimizer",
    title: "Workflow Automation Expert",
    description: "Design efficient workflows and automation solutions to streamline repetitive tasks.",
    prompt: "You are a workflow optimization specialist with expertise in process automation and efficiency improvement. Help me optimize this workflow:\n\n⚙️ CURRENT PROCESS:\n- Process description: [DESCRIBE THE CURRENT WORKFLOW]\n- Frequency: [HOW OFTEN IT HAPPENS]\n- Time required: [CURRENT TIME INVESTMENT]\n- Pain points: [WHAT'S FRUSTRATING OR INEFFICIENT]\n- Tools available: [SOFTWARE/TOOLS YOU HAVE ACCESS TO]\n\n🔄 OPTIMIZATION ANALYSIS:\n1. **Process Mapping**: Visual breakdown of current steps\n2. **Bottleneck Identification**: Where delays and inefficiencies occur\n3. **Automation Opportunities**: Tasks that can be automated\n4. **Tool Recommendations**: Software solutions for optimization\n5. **Redesigned Workflow**: Streamlined process flow\n6. **Implementation Plan**: Step-by-step optimization approach\n7. **Time Savings Calculation**: Expected efficiency gains\n8. **Quality Assurance**: Maintaining output quality\n\n📈 DELIVERABLES:\n- Before/after process comparison\n- Automation scripts or tool configurations\n- Implementation timeline and costs\n- ROI projections for the optimization",
    category: "Automation",
    tags: ["workflow", "automation", "efficiency", "process-improvement"],
    likes: 1450,
    rating: 4.4,
    author: "workflow_guru",
    views: 9600,
    downloads: 487,
    difficulty: "intermediate",
    useCase: "Automate and optimize any repetitive business process"
  }
];

export const getPromptsByCategory = (category: string): Prompt[] => {
  if (category === "all") return promptsLibrary;
  return promptsLibrary.filter(prompt => 
    prompt.category.toLowerCase().replace(/\s+/g, '-') === category ||
    prompt.tags.some(tag => tag.toLowerCase().replace(/\s+/g, '-') === category)
  );
};

export const searchPrompts = (query: string): Prompt[] => {
  const lowercaseQuery = query.toLowerCase();
  return promptsLibrary.filter(prompt =>
    prompt.title.toLowerCase().includes(lowercaseQuery) ||
    prompt.description.toLowerCase().includes(lowercaseQuery) ||
    prompt.category.toLowerCase().includes(lowercaseQuery) ||
    prompt.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    prompt.useCase.toLowerCase().includes(lowercaseQuery)
  );
};

export const getFeaturedPrompts = (): Prompt[] => {
  return promptsLibrary.filter(prompt => prompt.featured);
};

export const getPromptsByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced'): Prompt[] => {
  return promptsLibrary.filter(prompt => prompt.difficulty === difficulty);
};