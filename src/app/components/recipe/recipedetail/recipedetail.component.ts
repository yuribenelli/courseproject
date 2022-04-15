import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/app/model/recipe.model';
import { StoreData } from 'src/app/services/store.service';


@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.scss']
})
export class RecipedetailComponent implements OnInit {

  constructor(private dataStore: StoreData,
    private currRoute: ActivatedRoute) {}

    selectedRecipe?: Recipe;
    id! :number;

  ngOnInit(): void {
    if(this.currRoute.snapshot.params !== undefined){
      this.id = this.currRoute.snapshot.params['id']
      this.selectedRecipe = this.dataStore.getRec(this.id);
      this.currRoute.params.subscribe(
      (params: Params) => {
          this.id = params['id']
          this.selectedRecipe = this.dataStore.getRec(this.id);
      }
      );
    }
  }

  onAddIngToShopping(){
    // pass ing list to service and add to shopping
  }
}
