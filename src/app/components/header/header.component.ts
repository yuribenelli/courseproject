import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataManageService } from 'src/app/services/datamanage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private dataManage: DataManageService) { }

  ngOnInit(): void {
  }

  onFetchData(){
    this.dataManage.getRecipes();
  }

}
