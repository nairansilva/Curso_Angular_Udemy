import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-name-changes',
  templateUrl: './name-changes.component.html',
  styleUrls: ['./name-changes.component.css']
})
export class NameChangesComponent implements OnInit, OnChanges {
  @Input() name: string;
  nameBefore: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    if( changes.hasOwnProperty('name')){
      console.log(changes)
      this.nameBefore = changes['name'].previousValue;
    }
  }

}
