
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Filters from '@/components/Filters';
import RecipeCard from '@/components/RecipeCard';
import RecipeDetail from '@/components/RecipeDetail';
import Footer from '@/components/Footer';
import { recipes, Recipe } from '@/data/recipe-data';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);
  const [dietaryFilters, setDietaryFilters] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
  });
  const [cuisineFilter, setCuisineFilter] = useState('all');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showRecipeDetail, setShowRecipeDetail] = useState(false);

  // Handle search
  const handleSearch = (ingredients: string) => {
    setSearchQuery(ingredients.toLowerCase());
    
    // Show a toast notification for search
    if (ingredients.trim()) {
      toast({
        title: "Searching for recipes",
        description: `Finding recipes with: ${ingredients}`,
      });
    }
  };

  // Handle dietary filter changes
  const handleDietaryFilterChange = (filter: string, value: boolean) => {
    setDietaryFilters((prev) => ({
      ...prev,
      [filter]: value,
    }));
  };

  // Handle cuisine filter changes
  const handleCuisineFilterChange = (cuisine: string) => {
    setCuisineFilter(cuisine);
  };

  // Handle opening recipe detail
  const handleViewRecipe = (id: number) => {
    const recipe = recipes.find(r => r.id === id) || null;
    setSelectedRecipe(recipe);
    setShowRecipeDetail(true);
  };

  // Filter recipes based on search and filters
  useEffect(() => {
    let result = [...recipes];
    
    // Apply search filter if any
    if (searchQuery) {
      result = result.filter(recipe => {
        // Search in name
        if (recipe.name.toLowerCase().includes(searchQuery)) {
          return true;
        }
        
        // Search in ingredients
        if (recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(searchQuery)
        )) {
          return true;
        }
        
        // Search in cuisine
        if (recipe.cuisine.toLowerCase().includes(searchQuery)) {
          return true;
        }
        
        return false;
      });
    }
    
    // Apply dietary filters
    if (dietaryFilters.vegetarian) {
      result = result.filter(recipe => recipe.dietaryInfo.vegetarian);
    }
    
    if (dietaryFilters.vegan) {
      result = result.filter(recipe => recipe.dietaryInfo.vegan);
    }
    
    if (dietaryFilters.glutenFree) {
      result = result.filter(recipe => recipe.dietaryInfo.glutenFree);
    }
    
    if (dietaryFilters.dairyFree) {
      result = result.filter(recipe => recipe.dietaryInfo.dairyFree);
    }
    
    // Apply cuisine filter
    if (cuisineFilter !== 'all') {
      result = result.filter(recipe => recipe.cuisine === cuisineFilter);
    }
    
    setFilteredRecipes(result);
  }, [searchQuery, dietaryFilters, cuisineFilter]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection onSearch={handleSearch} />
        
        <section className="container mx-auto py-10 px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-nutri-dark">
            {searchQuery ? `Recipes with "${searchQuery}"` : "Discover Recipes"}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <aside className="lg:col-span-1">
              <Filters 
                dietaryFilters={dietaryFilters}
                onDietaryFilterChange={handleDietaryFilterChange}
                cuisineFilter={cuisineFilter}
                onCuisineFilterChange={handleCuisineFilterChange}
              />
            </aside>
            
            <div className="lg:col-span-3">
              {filteredRecipes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredRecipes.map(recipe => (
                    <RecipeCard 
                      key={recipe.id} 
                      recipe={recipe} 
                      onViewRecipe={handleViewRecipe}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <h3 className="text-xl font-medium mb-2 text-nutri-dark">No recipes found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or filters to find more recipes.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <RecipeDetail 
        recipe={selectedRecipe} 
        open={showRecipeDetail} 
        onOpenChange={setShowRecipeDetail}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
