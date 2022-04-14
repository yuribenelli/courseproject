import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent implements OnInit {

  @Input() newIng!: Ingredient;

  ingredients: Ingredient[] = [
    new Ingredient('Aplles', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }
  addNewIng(ing: Ingredient){
    this.ingredients.push(ing)
    console.log(ing)
    console.log(this.ingredients)
  }

}
