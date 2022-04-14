import { Ingredient } from "../model/ingredient.model";
import { Recipe } from "../model/recipe.model";
import { named } from "../model/recipe.model";
export class StoreData {

  ingredients: Ingredient[] = [];
  recipes: Recipe[]=[ new Recipe('A Test Recipe','this is a simple test','https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg'),];
  selectedIng?: Ingredient;
  selectedRecipe?: Recipe;

  storeIng(name:string, amount:number){
    this.ingredients.push({name,amount})
  }
  getAllIngs(): Ingredient[] {
    return this.ingredients
  }
  getIng(name:string){
    this.selectedIng = this.searchEle(name,this.ingredients) as Ingredient
  }
  storeRec(name:string, description:string, imagePath: string){
    this.recipes.push({name,description,imagePath})
  }
  getAllRec(): Recipe[]{
    return this.recipes
  }
  getRec(name: string){
    this.selectedRecipe = this.recipes.find(r => r.name==name);
  }

  private searchEle(name: string, list: named[]): named | undefined{
    return list.find(i => i.name==name);
  }
}
