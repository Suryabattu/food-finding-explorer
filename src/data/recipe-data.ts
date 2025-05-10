
export interface Recipe {
  id: number;
  name: string;
  image: string;
  cookTime: string;
  ingredients: string[];
  instructions: string[];
  dietaryInfo: {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
  };
  cuisine: string;
  calories: number;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Vegetable Stir-Fry",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
    cookTime: "20 mins",
    ingredients: [
      "2 tablespoons olive oil",
      "1 onion, sliced",
      "2 carrots, julienned",
      "1 bell pepper, sliced",
      "1 cup broccoli florets",
      "2 cloves garlic, minced",
      "1 tablespoon soy sauce",
      "1 teaspoon sesame oil"
    ],
    instructions: [
      "Heat olive oil in a large wok or skillet over medium-high heat.",
      "Add onions and cook for 2 minutes until translucent.",
      "Add carrots, bell pepper, and broccoli. Stir-fry for 5-7 minutes.",
      "Add minced garlic and cook for 30 seconds until fragrant.",
      "Pour in soy sauce and sesame oil. Toss to coat vegetables.",
      "Serve hot over rice or noodles."
    ],
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true
    },
    cuisine: "Asian",
    calories: 240
  },
  {
    id: 2,
    name: "Pasta Carbonara",
    image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?q=80&w=2069&auto=format&fit=crop",
    cookTime: "25 mins",
    ingredients: [
      "8 oz spaghetti",
      "2 large eggs",
      "1 cup grated Parmesan cheese",
      "4 slices bacon, diced",
      "2 cloves garlic, minced",
      "Salt and black pepper to taste",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "Cook spaghetti according to package instructions. Reserve 1/2 cup pasta water.",
      "In a bowl, whisk eggs and Parmesan cheese together.",
      "In a large skillet, cook bacon until crispy. Add garlic and cook for 30 seconds.",
      "Add drained, hot pasta to the skillet and toss with bacon.",
      "Remove from heat and quickly stir in egg mixture, tossing continuously.",
      "Add pasta water as needed to create a creamy sauce.",
      "Season with salt and pepper, garnish with parsley."
    ],
    dietaryInfo: {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false
    },
    cuisine: "Italian",
    calories: 480
  },
  {
    id: 3,
    name: "Quinoa Salad",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1887&auto=format&fit=crop",
    cookTime: "15 mins",
    ingredients: [
      "1 cup cooked quinoa",
      "1 cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "1/4 red onion, finely diced",
      "1/2 cup feta cheese, crumbled",
      "2 tablespoons olive oil",
      "1 tablespoon lemon juice",
      "Salt and pepper to taste",
      "Fresh mint leaves, chopped"
    ],
    instructions: [
      "In a large bowl, combine cooked quinoa, cucumber, tomatoes, and red onion.",
      "In a small bowl, whisk together olive oil and lemon juice.",
      "Pour dressing over the salad and toss to combine.",
      "Add crumbled feta cheese and gently mix.",
      "Season with salt and pepper.",
      "Garnish with fresh mint leaves before serving."
    ],
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: true,
      dairyFree: false
    },
    cuisine: "Mediterranean",
    calories: 320
  },
  {
    id: 4,
    name: "Avocado Toast",
    image: "https://images.unsplash.com/photo-1603046891744-76bbd9f4ce92?q=80&w=1887&auto=format&fit=crop",
    cookTime: "10 mins",
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "1/2 lemon, juiced",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)",
      "2 eggs (optional)"
    ],
    instructions: [
      "Toast the bread slices until golden and crispy.",
      "In a bowl, mash the avocado with lemon juice, salt, and pepper.",
      "Spread the avocado mixture evenly on the toast.",
      "Sprinkle with red pepper flakes if desired.",
      "For extra protein, top with a poached or fried egg."
    ],
    dietaryInfo: {
      vegetarian: true,
      vegan: true,
      glutenFree: false,
      dairyFree: true
    },
    cuisine: "American",
    calories: 280
  },
  {
    id: 5,
    name: "Chicken Curry",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop",
    cookTime: "40 mins",
    ingredients: [
      "1.5 lbs chicken breast, cubed",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 tablespoon ginger, grated",
      "2 tablespoons curry powder",
      "1 can (14 oz) coconut milk",
      "1 cup chicken broth",
      "2 tablespoons vegetable oil",
      "Salt to taste",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "Heat oil in a large pot over medium heat.",
      "Add onions and cook until soft, about 3 minutes.",
      "Add garlic and ginger, cook for 30 seconds until fragrant.",
      "Add curry powder and stir for 1 minute.",
      "Add chicken pieces and cook until no longer pink on the outside.",
      "Pour in coconut milk and chicken broth, bring to a simmer.",
      "Reduce heat and cook for 20-25 minutes until chicken is cooked through.",
      "Season with salt to taste.",
      "Serve over rice, garnished with cilantro."
    ],
    dietaryInfo: {
      vegetarian: false,
      vegan: false,
      glutenFree: true,
      dairyFree: true
    },
    cuisine: "Indian",
    calories: 520
  },
  {
    id: 6,
    name: "Greek Salad",
    image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1964&auto=format&fit=crop",
    cookTime: "15 mins",
    ingredients: [
      "1 large cucumber, diced",
      "4 tomatoes, diced",
      "1 red onion, thinly sliced",
      "1 green bell pepper, diced",
      "1/2 cup kalamata olives",
      "200g feta cheese, cubed",
      "2 tablespoons olive oil",
      "1 tablespoon red wine vinegar",
      "1 teaspoon dried oregano",
      "Salt and pepper to taste"
    ],
    instructions: [
      "In a large bowl, combine cucumber, tomatoes, red onion, and bell pepper.",
      "Add kalamata olives and feta cheese.",
      "In a small bowl, whisk together olive oil, red wine vinegar, and oregano.",
      "Pour dressing over the salad and toss gently.",
      "Season with salt and pepper.",
      "Let sit for 10 minutes before serving to allow flavors to meld."
    ],
    dietaryInfo: {
      vegetarian: true,
      vegan: false,
      glutenFree: true,
      dairyFree: false
    },
    cuisine: "Greek",
    calories: 310
  }
];
