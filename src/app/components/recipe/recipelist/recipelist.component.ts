import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.scss']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[];


  constructor(serv : RecipeService) {
    this.recipes = serv.getAllRec()
   }

  ngOnInit(): void {}


}
