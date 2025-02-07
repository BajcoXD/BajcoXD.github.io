fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())
  .then((data) => {
    const recipes = data.recipes;

    // 1. All Desserts 🤤
    const desserts = recipes.filter((recipe) => recipe.mealType.includes("Dessert"));
    console.log("All Desserts:", desserts.map((r) => r.name));

    // 2. Recipes with more than 30 reviews
    const popularRecipes = recipes.filter((recipe) => recipe.reviewCount > 30);
    console.log("Recipes with >30 reviews:", popularRecipes.map((r) => r.name));

    // 3. Recipes that use Cinnamon as an ingredient
    const cinnamonRecipes = recipes.filter((recipe) => recipe.ingredients.includes("Cinnamon"));
    console.log("Recipes with Cinnamon:", cinnamonRecipes.map((r) => r.name));

    // 4. Recipes served as both Lunch and Dinner
    const lunchDinnerRecipes = recipes.filter((recipe) => recipe.mealType.includes("Lunch") && recipe.mealType.includes("Dinner"));
    console.log("Lunch & Dinner Recipes:", lunchDinnerRecipes.map((r) => r.name));

    // 5. Ingredients for "Mango Salsa Chicken"
    const mangoSalsaChicken = recipes.find((recipe) => recipe.name === "Mango Salsa Chicken");
    console.log("Ingredients for Mango Salsa Chicken:", mangoSalsaChicken ? mangoSalsaChicken.ingredients : "Not found");

    // 6. Average calories for all American cuisine recipes
    const americanRecipes = recipes.filter((recipe) => recipe.cuisine === "American");
    const avgCalories = americanRecipes.reduce((sum, recipe) => sum + recipe.caloriesPerServing, 0) / americanRecipes.length;
    console.log("Average calories (American cuisine):", avgCalories || "No American recipes found");

    // 7. Average cooking time of all pasta recipes
    const pastaRecipes = recipes.filter((recipe) => recipe.name.toLowerCase().includes("pasta"));
    const avgCookingTime = pastaRecipes.reduce((sum, recipe) => sum + recipe.cookTimeMinutes, 0) / pastaRecipes.length;
    console.log("Average cooking time (Pasta recipes):", avgCookingTime || "No pasta recipes found");

    // 8. Recipe with the lowest number of reviews
    const lowestReviewRecipe = recipes.reduce((min, recipe) => (recipe.reviewCount < min.reviewCount ? recipe : min), recipes[0]);
    console.log("Recipe with lowest reviews:", lowestReviewRecipe ? lowestReviewRecipe.name : "No recipes found");
  });
