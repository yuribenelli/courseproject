import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent implements OnInit {



  ingredients!: Ingredient[];

  constructor(private serv: ShoppingService) {
    this.ingredients = serv.getAllIngs();
  }

  ngOnInit(): void {
  }



}
