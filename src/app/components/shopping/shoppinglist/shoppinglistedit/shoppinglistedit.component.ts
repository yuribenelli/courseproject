import { Component } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';
import { ShoppingService } from 'src/app/services/shopping.service';

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
  constructor(private shoppingServ: ShoppingService) { }

  addNewIng(nameEl: HTMLInputElement, amountEl: HTMLInputElement){

    this.validName = nameEl.value !== "";
    this.validAmount = amountEl.value !== "";


    if (this.validName && this.validAmount){
      this.shoppingServ.storeIng(nameEl.value,amountEl.valueAsNumber);
      this.warningText = "";

    }else{
      this.warningText = "Name or Amount fields are Empty"
    }

  }
//---------------------------------------------
//*********CLOSING CLASS DECLARATION***********
//---------------------------------------------
}
