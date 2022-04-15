import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})

export class RecipesComponent implements OnInit{


  constructor(private currRouter: ActivatedRoute){}

  ngOnInit(): void {
  }
}


