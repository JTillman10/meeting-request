import { Component } from '@angular/core';
import { timer, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  timer: Observable<number> = timer(0, 100);
  timerSubscription: Subscription;
  currentSeconds = 0;

  constructor() {}

  startWatch() {
    this.timerSubscription = this.timer.subscribe(t => {
      this.currentSeconds = t / 10;
    });
  }

  stopWatch() {
    this.timerSubscription.unsubscribe();
  }

  resetWatch() {
    this.currentSeconds = 0;
    this.stopWatch();
  }
}
