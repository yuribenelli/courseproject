import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';


@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.scss']
})
export class RecipedetailComponent implements OnInit {

  @Input() selectedRecipe!: Recipe;


  constructor() { }

  ngOnInit(): void {

  }

}
