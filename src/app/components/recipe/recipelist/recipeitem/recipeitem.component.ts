import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe.model';
import { StoreData } from 'src/app/services/store.service';


@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.scss']
})
export class RecipeitemComponent {


  @Input() recipe!: Recipe;


  constructor(private dataStore: StoreData,
    private router: Router) {}

  onSelected(){
    //this.dataStore.getRec(this.recipe.name);
    this.router.navigate(['/recipes/'+ this.recipe.id]);
  }
}
