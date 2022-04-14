import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() openRecipes!:string;

  navigationClicked(data: string){
    this.openRecipes = data
  }

}
