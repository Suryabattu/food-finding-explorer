
import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'}`}>
      <div className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-nutri-primary font-bold text-3xl mr-1">Nutri</span>
            <span className="text-nutri-secondary font-bold text-3xl">Find</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" className="text-nutri-dark font-semibold hover:text-nutri-primary hover:bg-nutri-light/70 rounded-lg">Home</Button>
            <Button variant="ghost" className="text-nutri-dark font-semibold hover:text-nutri-primary hover:bg-nutri-light/70 rounded-lg">Recipes</Button>
            <Button variant="ghost" className="text-nutri-dark font-semibold hover:text-nutri-primary hover:bg-nutri-light/70 rounded-lg">Favorites</Button>
            
            {/* Search button and dropdown */}
            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-nutri-dark hover:text-nutri-primary hover:bg-nutri-light/70 ml-1 rounded-full" 
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="h-5 w-5" />
              </Button>
              
              {searchOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white shadow-xl rounded-lg p-3 border border-muted animate-fade-in">
                  <form className="flex items-center">
                    <Input 
                      type="text" 
                      placeholder="Search recipes..." 
                      className="flex-grow border-nutri-primary/20 rounded-lg"
                      autoFocus
                    />
                    <Button type="submit" size="sm" className="ml-2 bg-nutri-primary hover:bg-nutri-primary/90 text-white font-medium rounded-lg">
                      <Search className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              )}
            </div>
            
            <Button className="bg-nutri-primary hover:bg-nutri-primary/90 text-white ml-3 font-semibold shadow-md rounded-lg">Sign In</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-nutri-dark hover:text-nutri-primary rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-muted mt-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="w-full justify-start text-nutri-dark font-semibold hover:text-nutri-primary hover:bg-nutri-light/50 rounded-lg">Home</Button>
              <Button variant="ghost" className="w-full justify-start text-nutri-dark font-semibold hover:text-nutri-primary hover:bg-nutri-light/50 rounded-lg">Recipes</Button>
              <Button variant="ghost" className="w-full justify-start text-nutri-dark font-semibold hover:text-nutri-primary hover:bg-nutri-light/50 rounded-lg">Favorites</Button>
              <div className="relative w-full pt-2">
                <form className="flex items-center">
                  <Input 
                    type="text" 
                    placeholder="Search recipes..." 
                    className="flex-grow border-nutri-primary/20 rounded-lg"
                  />
                  <Button type="submit" size="sm" className="ml-2 bg-nutri-primary hover:bg-nutri-primary/90 text-white font-medium rounded-lg">
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
              </div>
              <Button className="w-full bg-nutri-primary hover:bg-nutri-primary/90 text-white mt-2 font-semibold shadow-md rounded-lg">Sign In</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
