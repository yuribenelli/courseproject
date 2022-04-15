import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe.model';



@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.scss']
})
export class RecipeitemComponent {


  @Input() recipe!: Recipe;
  @Input() index!: number;

  constructor() {}

}
