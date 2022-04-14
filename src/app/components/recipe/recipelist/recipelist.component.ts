import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { StoreData } from 'src/app/services/store.service';


@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.scss']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[];


  constructor(dataStore: StoreData) {
    this.recipes = dataStore.getAllRec()
   }

  ngOnInit(): void {}


}
