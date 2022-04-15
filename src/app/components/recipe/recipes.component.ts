import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})

export class RecipesComponent implements OnInit{
  isToDisplay:boolean = false;

  constructor(private currRouter: ActivatedRoute){}

  ngOnInit(): void {
    let isToDisplay:boolean;

    console.log(this.currRouter.snapshot.params['id'])
    if (this.currRouter.snapshot.params['id'] == undefined) {
      this.isToDisplay = false;
    }else{
      this.isToDisplay = true
    }
    this.currRouter.params.subscribe(
      (params: Params) => {
        if(params['id'] == undefined){
          this.isToDisplay = false;
        }else{
          this.isToDisplay= true;
        }
      }
    )
  }
}


