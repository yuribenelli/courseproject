import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.scss']
})
export class RecipedetailComponent implements OnInit {

  constructor(private serv: RecipeService,
    private currRoute: ActivatedRoute) {}

    selectedRecipe?: Recipe;
    id! :number;

  ngOnInit(): void {

  this.currRoute.params.subscribe(
    (params: Params) => {
        this.id = params['id']
        this.selectedRecipe = this.serv.getRec(this.id);
    }
    );
  }
}
