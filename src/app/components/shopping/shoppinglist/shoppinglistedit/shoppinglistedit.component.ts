import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.scss']
})
export class ShoppinglisteditComponent implements OnInit {

  newIng!:Ingredient

  @Output() newIngAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddIng(name: string, amount: number){
    this.newIng = new Ingredient(name,amount)
    this.newIngAdded.emit(this.newIng);
  }

}
