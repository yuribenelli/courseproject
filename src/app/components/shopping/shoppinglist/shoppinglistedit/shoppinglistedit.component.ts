import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';
import { StoreData } from 'src/app/services/store.service';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.scss']
})
export class ShoppinglisteditComponent{

  warningText: string = "";
  newIng!:Ingredient;
  validName :boolean = false;
  validAmount: boolean = false;
  constructor(private dataStore: StoreData) { }

  addNewIng(nameEl: HTMLInputElement, amountEl: HTMLInputElement){

    this.validName = nameEl.value !== "";
    this.validAmount = amountEl.value !== "";


    if (this.validName && this.validAmount){
      this.dataStore.storeIng(nameEl.value,amountEl.valueAsNumber);
      this.warningText = "";

    }else{
      this.warningText = "Name or Amount fields are Empty"
    }

  }
//---------------------------------------------
//*********CLOSING CLASS DECLARATION***********
//---------------------------------------------
}
