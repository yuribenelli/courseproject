import { named } from "./recipe.model";

export class Ingredient implements named{
  constructor(public id: number, public name: string,public amount: number){}
}
