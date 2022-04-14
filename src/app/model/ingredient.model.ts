import { named } from "./recipe.model";

export class Ingredient implements named{
  constructor(public name: string,public amount: number){}
}
