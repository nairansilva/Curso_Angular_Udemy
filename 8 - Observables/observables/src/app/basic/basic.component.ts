import { Component, OnInit } from '@angular/core';
import { interval, Observer, Subscription } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }

  mySubscription1: Subscription;
  mySubscription2: Subscription;

  n1:number = 0;
  n2:number = 0;
  s1:string = '';
  s2:string = '';

  ngOnInit(): void {
    this.s1 = 'Iniciando...'
    this.s2 = 'Iniciando...'
    const myNewObservable = new Observable(
      (observer: Observer<number>) => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.next(4);
        observer.next(5);
        observer.error('Ocorreu um erro');
        observer.complete();
      });

    // myNewObservable.subscribe(
    //   (n: number) => console.log(n),
    //   (error) => console.error(error),
    //   () => console.log());

    // const timerCount = interval(1000)

    // timerCount.subscribe(n => console.log(n))
    // console.log('after Interval')

    const myIntervalntervalObservable = new Observable(
      (observer: Observer<any>) => {
        let i = 0;
        const idInterval = setInterval(() => {
          i++
          console.log('from observable: ', i)
          i == 10? observer.complete() : observer.next(i);
        },1000)
        return () => clearInterval(idInterval)
      }
    )

    this.mySubscription1 = myIntervalntervalObservable.subscribe(
      (_n) => {this.n1 = _n},
      (error) => {this.s1 = ' Erro ' + error},
      () => {this.s1 = 'completed'}
    )

    this.mySubscription2 = myIntervalntervalObservable.subscribe(
      (_n) => {this.n2 = _n},
      (error) => {this.s2 = ' Erro ' + error},
      () => {this.s2 = 'completed'}
    )

    setTimeout( () => {
      this.mySubscription1.unsubscribe()
      this.mySubscription2.unsubscribe()
    }, 5000)

  }

}
