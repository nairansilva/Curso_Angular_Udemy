import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {
  clients = [];
  name: string = "";
  adress: string = "";
  phone: string = "";
  city: string = "";
  age: number;
  cities = [
    { name: "São Paulo", state: "UF" },
    { name: "Paraguaçu", state: "MG" },
    { name: "Jundiaí", state: "SP" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.clients.push(
      {
        name: this.name,
        address: this.adress,
        phone: this.phone,
        age: this.age,
        city: this.city
      }
    )
    console.log(this.clients)
    this.cancel();
  }

  cancel() {
    this.name = ""
    this.adress = ""
    this.phone = ""
    this.age = 0
    this.cities = []
  }

  deleteClient(clientNumber) {
    this.clients.splice(clientNumber, 1)
  }
}
