
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { ShoppinglisteditComponent } from './components/shopping/shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { RecipelistComponent } from './components/recipe/recipelist/recipelist.component';
import { RecipeitemComponent } from './components/recipe/recipelist/recipeitem/recipeitem.component';
import { RecipedetailComponent } from './components/recipe/recipedetail/recipedetail.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { RecipesComponent } from './components/recipe/recipes.component';
import { ShoppinglistComponent } from './components/shopping/shoppinglist/shoppinglist.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ShoppingService } from './services/shopping.service';
import { RecipehomeComponent } from './components/recipe/recipehome/recipehome.component';
import { RecipeService } from './services/recipe.service';
import { DataStorageService } from './services/datastorage.service';


@NgModule({
  declarations:[
    AppComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailComponent,
    HeaderComponent,
    RecipesComponent,
    WellcomeComponent,
    DropdownDirective,
    NotfoundComponent,
    RecipehomeComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ShoppingService , RecipeService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
