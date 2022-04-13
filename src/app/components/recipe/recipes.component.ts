import { Component } from "@angular/core";
import { Recipe } from "src/app/model/recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})

export class RecipesComponent{

  selectedRecipe!: Recipe;


}
