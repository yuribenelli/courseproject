import { Ingredient } from "../model/ingredient.model";
import { Recipe } from "../model/recipe.model";

export class RecipeService{

  selectedRecipe?: Recipe;

  private recipes: Recipe[]=[];

  storeRec(id: number, name:string, description:string, imagePath: string, ingredients: Ingredient[]){
    this.recipes.push({id,name,description,imagePath, ingredients})
  }

  storeRecfromModel(rec: Recipe[]){
    this.recipes = rec;
  }

  getAllRec(): Recipe[]{
    return this.recipes.slice();
  }
  getRec(id: number): Recipe | undefined{
    this.selectedRecipe = this.recipes.find(r => r.id==id);
    return this.selectedRecipe;
  }

  setRecipes (recipes: Recipe[]){
    if (recipes) {
      this.recipes = recipes;
    }else{
      console.log('no recipes to show')
    }

  }
}
