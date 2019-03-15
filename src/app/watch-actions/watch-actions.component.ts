import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'watch-actions',
  templateUrl: './watch-actions.component.html',
  styleUrls: ['./watch-actions.component.scss']
})
export class WatchActionsComponent implements OnInit {
  @Output() start: EventEmitter<any> = new EventEmitter<any>();
  @Output() stop: EventEmitter<any> = new EventEmitter<any>();
  @Output() reset: EventEmitter<any> = new EventEmitter<any>();
  @Output() save: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  clickStart() {
    this.start.emit();
  }

  clickStop() {
    this.stop.emit();
  }

  clickReset() {
    this.reset.emit();
  }

  clickSave() {
    this.save.emit();
  }
}
