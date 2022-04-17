import { Ingredient } from "../model/ingredient.model";
import { Recipe } from "../model/recipe.model";

export class RecipeService{

  selectedRecipe?: Recipe;

  private recipes: Recipe[]=[
    new Recipe(1,
      'Burger',
      'A tasty  burger',
      'https://www.bora.com/fileadmin/website_content/Erleben/Cooking/55_Team_Edition/Rezeptbilder/55_TeamEdition_Canada_Halloumi-Burger.jpg',
      [new Ingredient('Meat',1),
      new Ingredient('Cheese',20)]),
    new Recipe(2,
      'Pizza',
      'A wonderful Pizza',
       'https://www.giallozafferano.it/images/238-23809/Pizza-Margherita_450x300.jpg'
       ,[new Ingredient('Dough',1),
       new Ingredient('Cheese',20),
       new Ingredient('Tomato Sauce',20)]),
  ];

  storeRec(id: number, name:string, description:string, imagePath: string, ingredients: Ingredient[]){
    this.recipes.push({id,name,description,imagePath, ingredients})
  }
  getAllRec(): Recipe[]{
    return this.recipes.slice();
  }
  getRec(id: number): Recipe | undefined{
    this.selectedRecipe = this.recipes.find(r => r.id==id);
    return this.selectedRecipe;
  }

}
