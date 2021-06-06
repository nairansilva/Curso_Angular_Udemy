import { Client } from './../input-binding/client.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  name: string;
  age: number;
  clients: Client[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.clients.push({
      name: this.name, age: this.age
    });
    this.clearVariables();
  }

  clearVariables() {
    this.name = ''
    this.age = 0
  }

  alterClient(client: Client, index) {
    this.clients[index].name = client.name;
    this.clients[index].age = client.age;
  }

  deleteClient(index) {
    this.clients.splice(index, 1)
  }

}
