
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeroSectionProps {
  onSearch: (ingredients: string) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput);
    }
  };

  // Handle quick search button clicks
  const handleQuickSearch = (term: string) => {
    setSearchInput(term);
    onSearch(term);
  };

  return (
    <section className="relative bg-gradient-to-b from-nutri-light to-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          <span className="text-nutri-dark block">Find Delicious Recipes</span>
          <span className="text-nutri-primary">With What You Have</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-nutri-dark/80 font-medium">
          Enter ingredients you have on hand, and we'll suggest perfect recipes to make with them.
        </p>
        
        <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-nutri-dark/60" />
            <Input 
              type="text" 
              placeholder="Enter ingredients (e.g., chicken, rice, tomatoes...)" 
              className="w-full pl-10 py-6 text-base border-2 border-nutri-primary/20 focus-visible:ring-nutri-primary shadow-lg rounded-lg"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <Button 
            type="submit" 
            className="bg-nutri-primary hover:bg-nutri-primary/90 text-white h-12 px-8 font-semibold shadow-lg rounded-lg"
          >
            Find Recipes
          </Button>
        </form>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <span className="text-sm text-nutri-dark/70 font-medium">Popular searches:</span>
          <Button variant="outline" size="sm" onClick={() => handleQuickSearch("chicken")} className="font-medium border-nutri-primary/30 text-nutri-dark hover:bg-nutri-primary/10">Chicken</Button>
          <Button variant="outline" size="sm" onClick={() => handleQuickSearch("pasta")} className="font-medium border-nutri-primary/30 text-nutri-dark hover:bg-nutri-primary/10">Pasta</Button>
          <Button variant="outline" size="sm" onClick={() => handleQuickSearch("vegetarian")} className="font-medium border-nutri-primary/30 text-nutri-dark hover:bg-nutri-primary/10">Vegetarian</Button>
          <Button variant="outline" size="sm" onClick={() => handleQuickSearch("quick")} className="font-medium border-nutri-primary/30 text-nutri-dark hover:bg-nutri-primary/10">Quick Meals</Button>
        </div>
      </div>
      
      <div className="absolute -bottom-1 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,133.3C672,128,768,160,864,170.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
