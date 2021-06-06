import { TimerComponent } from './timer/timer.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  // @ViewChild(TimerComponent)
  @ViewChild('stopWatch2')
  private myTimer:TimerComponent

  @ViewChild('myP')
  private myP:ElementRef

  constructor() { }

  ngOnInit(): void {

  }

  start(){
    this.myTimer.start()
  }

  stop() {
    this.myTimer.stop()
  }

  clear(){
    this.myTimer.clear()
  }

  ngAfterViewInit() {
    this.myP.nativeElement.innerText = 'nairan'
    console.log(this.myP)
  }


}
