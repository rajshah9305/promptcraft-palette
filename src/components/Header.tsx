import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  Search, 
  BookOpen, 
  Star, 
  User, 
  Github,
  Sparkles 
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              PromptLIB
            </span>
            <Badge variant="secondary" className="hidden sm:inline-flex text-xs">
              Beta
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#browse" 
              className="text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              Browse
            </a>
            <a 
              href="#categories" 
              className="text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Categories
            </a>
            <a 
              href="#favorites" 
              className="text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Star className="w-4 h-4" />
              Favorites
            </a>
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button variant="gradient" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
            <nav className="py-4 space-y-3">
              <a 
                href="#browse" 
                className="flex items-center gap-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Search className="w-4 h-4" />
                Browse Prompts
              </a>
              <a 
                href="#categories" 
                className="flex items-center gap-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="w-4 h-4" />
                Categories
              </a>
              <a 
                href="#favorites" 
                className="flex items-center gap-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Star className="w-4 h-4" />
                Favorites
              </a>
              <a 
                href="#about" 
                className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              
              <div className="pt-4 border-t border-border/30 space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                <Button variant="gradient" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;