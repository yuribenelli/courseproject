import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';
import { StoreData } from 'src/app/services/store.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent implements OnInit {



  ingredients!: Ingredient[];

  constructor(private dataStore: StoreData) {
    this.ingredients = dataStore.getAllIngs();
  }

  ngOnInit(): void {
  }



}
