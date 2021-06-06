import { Client } from './client.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  clients:Client[];

  constructor() {
    this.clients =[
      {
        id: 1,
        name:'Nairan',
        age: 10
      },
      {
        id: 2,
        name:'Nairan',
        age: 10
      },
      {
        id: 3,
        name:'Nairan',
        age: 10
      },
      {
        id: 4,
        name:'Nairan',
        age: 10
      }
    ]
   }

  ngOnInit(): void {
  }

}
