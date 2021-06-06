import { Client } from './../../input-binding/client.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-items-client',
  templateUrl: './items-client.component.html',
  styleUrls: ['./items-client.component.css']
})
export class ItemsClientComponent implements OnInit {

  name:string;
  age:number;
  @Input() client:Client;
  @Output() updatClient = new EventEmitter<Client>();
  @Output() removeClient = new EventEmitter();
  onEdit = false;

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.onEdit = false;
    this.updatClient.emit({name:this.name, age:this.age})
  }

  edit(){
    this.onEdit = true;
    this.name = this.client.name;
    this.age = this.client.age;
  }

  remove(){
    this.removeClient.emit();
  }

}
