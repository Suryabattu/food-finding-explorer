
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-nutri-primary font-bold text-3xl">Nutri</span>
            <span className="text-nutri-secondary font-bold text-3xl">Find</span>
          </div>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" className="text-nutri-dark hover:text-nutri-primary">Home</Button>
            <Button variant="ghost" className="text-nutri-dark hover:text-nutri-primary">Favorites</Button>
            <Button className="bg-nutri-primary hover:bg-nutri-primary/90 text-white">Sign In</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
