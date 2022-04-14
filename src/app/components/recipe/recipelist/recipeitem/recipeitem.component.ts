import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { StoreData } from 'src/app/services/store.service';


@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.scss']
})
export class RecipeitemComponent implements OnInit {

  @Input() recipe!: Recipe;

  constructor(private dataStore: StoreData) {}
  ngOnInit(): void {
  }
  onSelected(){
    this.dataStore.getRec(this.recipe.name);
  }
}
