import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  title= 'My title';
  value:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  incBy(number) {
    this.value += number;
  }

}
