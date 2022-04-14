import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';
import { StoreData } from 'src/app/services/store.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent implements OnInit {


  ingredients: Ingredient[] = [
    new Ingredient('Aplles', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor(private dataStore: StoreData) { }

  ngOnInit(): void {
  }



}
