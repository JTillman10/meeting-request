import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    if (value > 0) {
      const hours = Math.floor(value / 3600);
      const minutes = Math.floor((value - hours * 3600) / 60);
      const seconds = Math.floor(value - hours * 3600 - minutes * 60);

      const hoursString = hours < 10 ? `0${hours}` : hours;
      const minutesString = minutes < 10 ? `0${minutes}` : minutes;
      const secondsString = seconds < 10 ? `0${seconds}` : seconds;

      return `${hoursString}:${minutesString}:${secondsString}`;
    } else {
      return '00:00:00';
    }
  }
}
