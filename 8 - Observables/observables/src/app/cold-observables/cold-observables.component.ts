import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-cold-observables',
  templateUrl: './cold-observables.component.html',
  styleUrls: ['./cold-observables.component.css']
})
export class ColdObservablesComponent implements OnInit {

  constructor() { }

  mySubscription1: Subscription;
  mySubscription2: Subscription;

  n1: number = 0;
  n2: number = 0;
  s1: string = '';
  s2: string = '';

  ngOnInit(): void {
    this.s1 = 'Iniciando...'
    this.s2 = 'Iniciando...'

    const myIntervalntervalObservable = new Observable(
      (observer: Observer<any>) => {
        let i = 0;
        const idInterval = setInterval(() => {
          i++
          console.log('from observable: ', i)
          i == 10 ? observer.complete() : observer.next(i);
        }, 1000)
        return () => clearInterval(idInterval)
      }
    )

    this.mySubscription1 = myIntervalntervalObservable.subscribe(
      (_n) => { this.n1 = _n },
      (error) => { this.s1 = ' Erro ' + error },
      () => { this.s1 = 'completed' }
    )

    setInterval(() => {
      this.mySubscription2 = myIntervalntervalObservable.subscribe(
        (_n) => { this.n2 = _n },
        (error) => { this.s2 = ' Erro ' + error },
        () => { this.s2 = 'completed' }
      )
    }, 3000)

    setTimeout(() => {
      this.mySubscription1.unsubscribe()
      this.mySubscription2.unsubscribe()
    }, 5000)
  }

}
