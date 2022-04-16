import { Ingredient } from "../model/ingredient.model";
import { Recipe } from "../model/recipe.model";

export class RecipeService{

  selectedRecipe?: Recipe;

  private recipes: Recipe[]=[
    new Recipe(1,
      'Burger',
      'A tasty  burger',
      'https://www.buttalapasta.it/wp-content/uploads/2016/01/hamburger-di-carne-americano.jpg',
      [new Ingredient('Meat',1),
      new Ingredient('Cheese',20)]),
    new Recipe(2,
      'Pizza',
      'A wonderful Pizza',
       'https://blog.giallozafferano.it/dulcisinforno/wp-content/uploads/2021/03/Hamburger-ricetta-6613_Ok.jpg'
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
