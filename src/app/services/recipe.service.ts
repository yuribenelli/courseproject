import { Recipe } from "../model/recipe.model";

export class RecipeService{

  selectedRecipe?: Recipe;

  private recipes: Recipe[]=[
    new Recipe(1,'A Test Recipe','this is a simple test', 'https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg'),
    new Recipe(2,'A Second Recipe','this is a simple recipe', 'https://www.simplyrecipes.com/thmb/JWjdE8YwikAae0KZuyy6ZJW7Utw=/3000x2001/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg'),
  ];

  storeRec(id: number, name:string, description:string, imagePath: string){
    this.recipes.push({id,name,description,imagePath})
  }
  getAllRec(): Recipe[]{
    return this.recipes.slice();
  }
  getRec(id: number): Recipe | undefined{
    this.selectedRecipe = this.recipes.find(r => r.id==id);
    return this.selectedRecipe;
  }

}
