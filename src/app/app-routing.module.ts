import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { RecipesComponent } from './components/recipe/recipes.component';
import { ShoppinglistComponent } from './components/shopping/shoppinglist/shoppinglist.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [
  { path: '', component: WellcomeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping', component: ShoppinglistComponent },
  { path: 'recipes/:id', component: RecipesComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: 'notfound' },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
