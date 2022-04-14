import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() navDirection:string = "Home";

  navigationClicked(data: string){
    this.navDirection = data
  }

  /*ngDoCheck(){
    console.log(this.openRecipes)
  }*/
}

