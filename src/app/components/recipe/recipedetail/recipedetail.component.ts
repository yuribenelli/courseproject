import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { StoreData } from 'src/app/services/store.service';


@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.scss']
})
export class RecipedetailComponent implements OnInit {



  constructor(private dataStore: StoreData) {}

  get selectedRecipe(): Recipe | undefined{
    return this.dataStore.selectedRecipe;
  }

  ngOnInit(): void {

  }

}
