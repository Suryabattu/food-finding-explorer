
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
    onSearch(searchInput);
  };

  return (
    <section className="relative bg-gradient-to-r from-nutri-light to-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-nutri-dark">
          Find <span className="text-nutri-primary">Delicious Recipes</span> With What You Have
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-nutri-dark/80">
          Enter ingredients you have on hand, and we'll suggest perfect recipes to make with them.
        </p>
        
        <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Enter ingredients (e.g., chicken, rice, tomatoes...)" 
              className="w-full pl-10 py-6 text-base border-2 border-nutri-primary/20 focus-visible:ring-nutri-primary"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <Button 
            type="submit" 
            className="bg-nutri-primary hover:bg-nutri-primary/90 text-white h-12 px-8 font-medium"
          >
            Find Recipes
          </Button>
        </form>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <span className="text-sm text-muted-foreground">Popular searches:</span>
          <Button variant="outline" size="sm" onClick={() => onSearch("chicken")}>Chicken</Button>
          <Button variant="outline" size="sm" onClick={() => onSearch("pasta")}>Pasta</Button>
          <Button variant="outline" size="sm" onClick={() => onSearch("vegetarian")}>Vegetarian</Button>
          <Button variant="outline" size="sm" onClick={() => onSearch("quick")}>Quick Meals</Button>
        </div>
      </div>
      
      <div className="absolute -bottom-1 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,117.3C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
