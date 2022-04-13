import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() navClick = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  onNavigationClick(openRecipes: boolean){
    this.navClick.emit(openRecipes);
  }

}
