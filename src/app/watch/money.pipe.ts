import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {
  transform(value: number, multiplier: number): string {
    if (value > 0) {
      const multiplierPerMilli = multiplier / 3600;
      const totalMoney = multiplierPerMilli * value;

      return `$${totalMoney.toFixed(2)}`;
    } else {
      return '$0.00';
    }
  }
}
