import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { RecipeService } from "src/app/services/recipe.service";


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})

export class RecipesComponent implements OnInit{


  constructor(private currRouter: ActivatedRoute){}

  ngOnInit(): void {
  }
  
}


