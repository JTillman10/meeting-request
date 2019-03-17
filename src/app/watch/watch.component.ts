import { Component, Input } from '@angular/core';

@Component({
  selector: 'watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent {
  @Input() currentSeconds: number;
  @Input() multiplier: number;
  @Input() numberOfPeople: number;

  constructor() {}
}
