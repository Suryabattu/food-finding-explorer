
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Heart } from 'lucide-react';
import { Recipe } from '@/data/recipe-data';

interface RecipeCardProps {
  recipe: Recipe;
  onViewRecipe: (id: number) => void;
}

const RecipeCard = ({ recipe, onViewRecipe }: RecipeCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="bg-nutri-light text-nutri-primary">
            {recipe.cuisine}
          </Badge>
          <div className="flex items-center text-muted-foreground text-sm">
            <Clock className="h-3 w-3 mr-1" />
            <span>{recipe.cookTime}</span>
          </div>
        </div>
        <h3 className="font-semibold text-lg mb-2 text-nutri-dark">{recipe.name}</h3>
        <p className="text-muted-foreground text-sm mb-3">
          {recipe.ingredients.slice(0, 3).join(', ')}
          {recipe.ingredients.length > 3 ? '...' : ''}
        </p>
        <div className="flex flex-wrap gap-1 mb-2">
          {recipe.dietaryInfo.vegetarian && (
            <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">Vegetarian</Badge>
          )}
          {recipe.dietaryInfo.vegan && (
            <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">Vegan</Badge>
          )}
          {recipe.dietaryInfo.glutenFree && (
            <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">Gluten-Free</Badge>
          )}
          {recipe.dietaryInfo.dairyFree && (
            <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-800">Dairy-Free</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => onViewRecipe(recipe.id)}
          className="w-full bg-nutri-primary hover:bg-nutri-primary/90 text-white"
        >
          View Recipe
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
