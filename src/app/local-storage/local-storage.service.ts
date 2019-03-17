import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  timesValue = new Subject();

  set times(value) {
    this.timesValue.next(value);
    localStorage.setItem('times', value);
  }

  get times() {
    return localStorage.getItem('times');
  }
}
