
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-muted mt-16">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-nutri-primary font-bold text-2xl">Nutri</span>
              <span className="text-nutri-secondary font-bold text-2xl">Find</span>
            </div>
            <p className="text-muted-foreground">
              Discover delicious recipes with ingredients you already have at home.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-nutri-dark">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-nutri-primary transition-colors">Home</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-nutri-primary transition-colors">Browse Recipes</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-nutri-primary transition-colors">Meal Plans</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-nutri-primary transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-nutri-dark">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-nutri-primary transition-colors">Facebook</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-nutri-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-nutri-primary transition-colors">Pinterest</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-nutri-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NutriFind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
