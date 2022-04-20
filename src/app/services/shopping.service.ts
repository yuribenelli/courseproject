import { Ingredient } from "../model/ingredient.model";
import { named } from "../model/recipe.model";

export class ShoppingService {

  ingredients: Ingredient[] = [];
  selectedIng?: Ingredient;

  storeIng(name:string, amount:number){
    this.ingredients.push({name,amount})
  }
  getAllIngs(): Ingredient[] {
    return this.ingredients
  }
  getIng(name:string){
    this.selectedIng = this.searchEle(name,this.ingredients) as Ingredient
  }
  private searchEle(name: string, list: named[]): named | undefined{
    return list.find(i => i.name==name);
  }
//---------------------------------------------
//*********CLOSING CLASS DECLARATION***********
//---------------------------------------------

}
