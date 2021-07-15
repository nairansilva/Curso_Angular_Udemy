import { ConnectableObservable, Observable, Observer, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { publish, refCount, share } from 'rxjs/operators'

@Component({
  selector: 'app-hot-observables-subjects',
  templateUrl: './hot-observables-subjects.component.html',
  styleUrls: ['./hot-observables-subjects.component.css']
})
export class HotObservablesSubjectsComponent implements OnInit {

  n: number = 0;
  n1: number = 0;
  n2: number = 0;
  n3: number = 0;
  s1: string = '';
  s2: string = '';
  s3: string = '';

  myObservable: Observable<number>;

  constructor() { }

  ngOnInit(): void {
    this.myObservable = new Observable((observer: Observer<number>) => {
      let i: number = 0;
      setInterval(() => {
        i++;
        (i == 6) ? observer.complete() : observer.next(i);
      }, 1000)
    });

    // this.usingSubjects();
    // this.usingPublish();
    this.usingShare()
  }

  usingSubjects() {
    const subject = new Subject<number>();
    this.myObservable.subscribe(subject)

    this.s1 = 'Waiting for interval...'
    setTimeout(() => {
      subject.subscribe(_n => {
        this.n1 = _n;
        this.s1 = 'Ok';
      })
    }, 2000);

    this.s2 = 'Waiting for interval...'
    setTimeout(() => {
      subject.subscribe(_n => {
        this.n2 = _n;
        this.s2 = 'Ok';
      })
    }, 4000);


    this.s3 = 'Waiting for interval...'
    setTimeout(() => {
      subject.subscribe(_n => {
        this.n3 = _n;
        this.s3 = 'Ok';
      })
    }, 8000);
  }

  usingPublish() {
    // const multicasted = this.myObservable.pipe(
    //   publish(),
    //   refCount()
    // )

    const multicasted: ConnectableObservable<number> = this.myObservable.pipe(
      publish()
    ) as ConnectableObservable<number>

    multicasted.connect();

    this.s1 = 'Waiting for interval...'
    setTimeout(() => {
      multicasted.subscribe(_n => {
        this.n1 = _n;
        this.s1 = 'Ok';
      })
    }, 2000);

    this.s2 = 'Waiting for interval...'
    setTimeout(() => {
      multicasted.subscribe(_n => {
        this.n2 = _n;
        this.s2 = 'Ok';
      })
    }, 4000);

    this.s3 = 'Waiting for interval...'
    setTimeout(() => {
      multicasted.subscribe(_n => {
        this.n3 = _n;
        this.s3 = 'Ok';
      })
    }, 8000);

  }

  usingShare() {
    const multicasted = this.myObservable.pipe(
      share()
    )

    this.s1 = 'Waiting for interval...'
    setTimeout(() => {
      multicasted.subscribe(_n => {
        this.n1 = _n;
        this.s1 = 'Ok';
      })
    }, 2000);

    this.s2 = 'Waiting for interval...'
    setTimeout(() => {
      multicasted.subscribe(_n => {
        this.n2 = _n;
        this.s2 = 'Ok';
      })
    }, 4000);

    this.s3 = 'Waiting for interval...'
    setTimeout(() => {
      multicasted.subscribe(_n => {
        this.n3 = _n;
        this.s3 = 'Ok';
      })
    }, 8000);

  }



}
