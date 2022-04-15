import { Ingredient } from "../model/ingredient.model";
import { Recipe } from "../model/recipe.model";
import { named } from "../model/recipe.model";
export class StoreData {

  ingredients: Ingredient[] = [];
  recipes: Recipe[]=[ new Recipe(1,'A Test Recipe','this is a simple test',
  'https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg'),
                      new Recipe(2,'A Second Recipe','this is a simple recipe',
  'https://www.simplyrecipes.com/thmb/JWjdE8YwikAae0KZuyy6ZJW7Utw=/3000x2001/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg'),
  ];
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
  storeRec(id: number, name:string, description:string, imagePath: string){
    this.recipes.push({id,name,description,imagePath})
  }
  getAllRec(): Recipe[]{
    return this.recipes
  }
  getRec(id: number): Recipe | undefined{
    this.selectedRecipe = this.recipes.find(r => r.id=id);
    return this.selectedRecipe;
  }

  private searchEle(name: string, list: named[]): named | undefined{
    return list.find(i => i.name==name);
  }
//---------------------------------------------
//*********CLOSING CLASS DECLARATION***********
//---------------------------------------------

}
