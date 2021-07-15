import { fromEvent, Observable, Observer } from 'rxjs';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hot-observables',
  templateUrl: './hot-observables.component.html',
  styleUrls: ['./hot-observables.component.css']
})
export class HotObservablesComponent implements OnInit, AfterViewInit {

  @ViewChild('myButton', { read: ElementRef }) button: ElementRef;

  n1: number = 0;
  n2: number = 0;
  s1: string = '';
  s2: string = '';

  constructor() { }

  ngOnInit(): void {
    class Producer {
      private myListeners = [];
      private n = 0;
      private id;


      addListner(l) {
        this.myListeners.push(l)
      }

      start() {
        this.id = setInterval(() => {
          this.n++;
          console.log('Fonte de Dados: ' + this.n);
          for (let l of this.myListeners) {
            l(this.n)
          }
        }, 1000)
      }

      clear() {
        clearInterval(this.id);
      }
    }

    let producer: Producer = new Producer()

    producer.start();

    setTimeout(() => {
      producer.addListner((n) => console.log('From Listner2', n))
      producer.addListner((n) => console.log('From Listner1', n))
    }, 2000)

    const myHotObservable = new Observable((observer:Observer<number>)=>{
      producer.addListner((n) => observer.next(n))
    })

    myHotObservable.subscribe((n)=> console.log('From Subscribe1', n))
    myHotObservable.subscribe((n)=> console.log('From Subscribe2', n))

  }

  ngAfterViewInit(): void {
    let myBtnObservable: Observable<number> = fromEvent(this.button.nativeElement, 'click');

    myBtnObservable.subscribe((event) => console.log('btn click 1: ' + event))
    myBtnObservable.subscribe((event) => console.log('btn click 2: ' + event))
  }




}
