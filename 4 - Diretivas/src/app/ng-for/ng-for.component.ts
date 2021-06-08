import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = ['Nairan','Naira','Dante','Raul','Ba']
  cities = [
    {name: "São Paulo", state: "UF"},
    {name: "Paraguaçu", state: "MG"},
    {name: "Jundiaí", state: "SP"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
