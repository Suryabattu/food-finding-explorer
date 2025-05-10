
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';
import { Clock, BookOpen, ChefHat, X } from 'lucide-react';
import { Recipe } from '@/data/recipe-data';

interface RecipeDetailProps {
  recipe: Recipe | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RecipeDetail = ({ recipe, open, onOpenChange }: RecipeDetailProps) => {
  if (!recipe) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-nutri-dark">{recipe.name}</DialogTitle>
          <DialogDescription className="flex flex-wrap items-center gap-2 mt-2">
            <Badge className="bg-nutri-primary text-white">{recipe.cuisine}</Badge>
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              <span>{recipe.cookTime}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <ChefHat className="h-4 w-4 mr-1" />
              <span>{recipe.calories} calories</span>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 aspect-video overflow-hidden rounded-lg">
          <img 
            src={recipe.image} 
            alt={recipe.name} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium flex items-center mb-3 text-nutri-dark">
              <BookOpen className="mr-2 h-5 w-5 text-nutri-primary" />
              Ingredients
            </h3>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-baseline gap-2">
                  <span className="rounded-full h-1.5 w-1.5 bg-nutri-primary flex-shrink-0 mt-2"></span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium flex items-center mb-3 text-nutri-dark">
              <ChefHat className="mr-2 h-5 w-5 text-nutri-primary" />
              Instructions
            </h3>
            <ol className="space-y-3">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="font-semibold text-nutri-primary">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="text-sm text-muted-foreground mr-2">Dietary Info:</span>
          {recipe.dietaryInfo.vegetarian && (
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Vegetarian</Badge>
          )}
          {recipe.dietaryInfo.vegan && (
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Vegan</Badge>
          )}
          {recipe.dietaryInfo.glutenFree && (
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Gluten-Free</Badge>
          )}
          {recipe.dietaryInfo.dairyFree && (
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">Dairy-Free</Badge>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeDetail;
