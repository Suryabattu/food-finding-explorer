
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FiltersProps {
  dietaryFilters: {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
  };
  onDietaryFilterChange: (filter: string, value: boolean) => void;
  cuisineFilter: string;
  onCuisineFilterChange: (cuisine: string) => void;
}

const Filters = ({
  dietaryFilters,
  onDietaryFilterChange,
  cuisineFilter,
  onCuisineFilterChange
}: FiltersProps) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-muted">
      <h2 className="text-xl font-medium mb-4 text-nutri-dark">Filters</h2>
      
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="font-medium text-sm text-muted-foreground">Dietary Preferences</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="vegetarian" 
                checked={dietaryFilters.vegetarian}
                onCheckedChange={(checked) => 
                  onDietaryFilterChange('vegetarian', checked === true)
                }
              />
              <Label htmlFor="vegetarian">Vegetarian</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="vegan" 
                checked={dietaryFilters.vegan}
                onCheckedChange={(checked) => 
                  onDietaryFilterChange('vegan', checked === true)
                }
              />
              <Label htmlFor="vegan">Vegan</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="glutenFree" 
                checked={dietaryFilters.glutenFree}
                onCheckedChange={(checked) => 
                  onDietaryFilterChange('glutenFree', checked === true)
                }
              />
              <Label htmlFor="glutenFree">Gluten-Free</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="dairyFree" 
                checked={dietaryFilters.dairyFree}
                onCheckedChange={(checked) => 
                  onDietaryFilterChange('dairyFree', checked === true)
                }
              />
              <Label htmlFor="dairyFree">Dairy-Free</Label>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-medium text-sm text-muted-foreground">Cuisine</h3>
          <Select value={cuisineFilter} onValueChange={onCuisineFilterChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Cuisines" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cuisines</SelectItem>
              <SelectItem value="Italian">Italian</SelectItem>
              <SelectItem value="Asian">Asian</SelectItem>
              <SelectItem value="Mediterranean">Mediterranean</SelectItem>
              <SelectItem value="American">American</SelectItem>
              <SelectItem value="Indian">Indian</SelectItem>
              <SelectItem value="Greek">Greek</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
