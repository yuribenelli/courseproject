import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../model/recipe.model";
import { environment } from "src/environments/environment";
import { RecipeService } from "./recipe.service";

@Injectable()
export class DataManageService{

recipes!: Recipe[]

  constructor(private http: HttpClient,private recServ: RecipeService){}

  getRecipes(){
    this.http.get<Recipe[]>(environment.apiUrl + '/recipes')
    .subscribe(recipes => {
      this.recServ.setRecipes(recipes);
      console.log(recipes);
    });
  }

}
