import { registerLocaleData } from '@angular/common';
import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { DataManageService } from 'src/app/services/datamanage.service';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.scss']
})
export class RecipelistComponent {
  recipes!: Recipe[];


  constructor(private serv : RecipeService ,private dataManage: DataManageService ) {
    dataManage.getRecipes()
  }

  

}
