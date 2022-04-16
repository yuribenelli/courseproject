import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Ingredient } from 'src/app/model/ingredient.model';
import { ShoppingService } from 'src/app/services/shopping.service';


@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.scss']
})
export class RecipedetailComponent implements OnInit {

  constructor(private recService: RecipeService,
    private shoService: ShoppingService,
    private currRoute: ActivatedRoute,
    private router: Router) {}

    selectedRecipe?: Recipe;
    id! :number;

  ngOnInit(): void {

  this.currRoute.params.subscribe(
    (params: Params) => {
        this.id = params['id']
        this.selectedRecipe = this.recService.getRec(this.id);
    }
    );
  }
  addIngToShopping(){
    for (let i = 0; i < this.selectedRecipe!.ingredients.length; i++) {
      const element = this.selectedRecipe?.ingredients[i];
      this.shoService.storeIng(element!.name,element!.amount)
      console.log(this.shoService.getAllIngs())
      this.router.navigate(['/shopping'])
    }
  }
}
