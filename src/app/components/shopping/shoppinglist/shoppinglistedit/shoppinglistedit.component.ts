import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';
import { StoreData } from 'src/app/services/store.service';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.scss']
})
export class ShoppinglisteditComponent implements OnInit {

  newIng!:Ingredient

  //@Output() newIngAdded = new EventEmitter<Ingredient>();

  constructor(private dataStore: StoreData) { }

  ngOnInit(): void {
  }

  addNewIng(nameEl: HTMLInputElement, amountEl: HTMLInputElement){
    const name = nameEl.value
    const amount = amountEl.valueAsNumber
    this.dataStore.storeIng(name,amount)
  }

}
