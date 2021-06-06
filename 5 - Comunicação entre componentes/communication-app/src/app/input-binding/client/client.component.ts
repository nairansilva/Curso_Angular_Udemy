import { Client } from './../client.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  @Input() cliente:Client;
  constructor() { }

  ngOnInit(): void {
  }

}
