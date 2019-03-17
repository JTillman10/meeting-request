import { Component, OnInit } from '@angular/core';
import { timer, Subscription, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  timer: Observable<number> = timer(0, 100);
  timerSubscription: Subscription;
  isRunning = false;

  currentSeconds = 0;
  multiplier = 0;
  numberOfPeople = 0;

  times: Array<any> = [];
  nextId = 0;

  constructor() {}

  ngOnInit() {
    const storedTimes = JSON.parse(localStorage.getItem('times'));
    const storedNextId = JSON.parse(localStorage.getItem('nextId'));
    this.times = storedTimes ? storedTimes : [];
    this.nextId = storedNextId ? storedNextId : 0;
  }

  startWatch(event: FormGroup) {
    this.isRunning = true;
    const { multiplier, numberOfPeople } = event.value;
    this.multiplier = multiplier;
    this.numberOfPeople = numberOfPeople;

    this.timerSubscription = this.timer.subscribe(t => {
      this.currentSeconds = t / 10;
    });
  }

  stopWatch() {
    if (this.timerSubscription) {
      this.isRunning = false;
      this.timerSubscription.unsubscribe();
    }
  }

  resetWatch() {
    this.stopWatch();
    this.currentSeconds = 0;
  }

  save() {
    if (this.currentSeconds > 0) {
      this.times.push({
        id: this.nextId++,
        date: new Date(),
        time: this.currentSeconds,
        multiplier: this.multiplier,
        numberOfPeople: this.numberOfPeople
      });
      this.times = [...this.times];

      localStorage.setItem('times', JSON.stringify(this.times));
      localStorage.setItem('nextId', JSON.stringify(this.nextId));
    }
  }

  deleteTime(event: number) {
    const id = event;
    this.times = this.times.filter(i => i.id !== id);
    localStorage.setItem('times', JSON.stringify(this.times));
  }

  deleteAllTimes() {
    this.times = [];
    localStorage.setItem('times', JSON.stringify(this.times));
  }
}
