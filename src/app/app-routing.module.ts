import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { RecipesComponent } from './components/recipe/recipes.component';
import { ShoppinglistComponent } from './components/shopping/shoppinglist/shoppinglist.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RecipehomeComponent } from './components/recipe/recipehome/recipehome.component';
import { RecipedetailComponent } from './components/recipe/recipedetail/recipedetail.component';


const routes: Routes = [
  { path: '', component: WellcomeComponent },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipehomeComponent, pathMatch: 'full' },
    { path: ':id', component: RecipedetailComponent },
  ]},
  { path: 'shopping', component: ShoppinglistComponent },

  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: 'notfound' },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
