import { Component, Input } from '@angular/core';
import { RecipeService } from './services/recipe.service';
import { ShoppingService } from './services/shopping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ RecipeService, ShoppingService ]
})
export class AppComponent {


}

