import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './components/shopping/shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from './components/shopping/shoppinglistedit/shoppinglistedit.component';
import { RecipelistComponent } from './components/recipe/recipelist/recipelist.component';
import { RecipeitemComponent } from './components/recipe/recipeitem/recipeitem.component';
import { RecipedetailComponent } from './components/recipe/recipedetail/recipedetail.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipe/recipes.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailComponent,
    HeaderComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
