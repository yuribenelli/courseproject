import { Component, Input } from '@angular/core';
import { StoreData } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ StoreData ]
})
export class AppComponent {


}

