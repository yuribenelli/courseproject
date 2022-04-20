import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/model/ingredient.model';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.scss']
})
export class ShoppinglisteditComponent{

  id!: number;
  constructor(private shoppingServ: ShoppingService, private currRoute: ActivatedRoute) { }

  addNewIng(nameEl: HTMLInputElement, amountEl: HTMLInputElement){
    this.currRoute.params.subscribe(
      (params: Params) => {
        this.id = params['id']
      }
    );
    this.shoppingServ.storeIng( this.id, nameEl.value,amountEl.valueAsNumber);
  }
//---------------------------------------------
//*********CLOSING CLASS DECLARATION***********
//---------------------------------------------
}
