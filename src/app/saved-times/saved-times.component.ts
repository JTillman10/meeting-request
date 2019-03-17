import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'saved-times',
  templateUrl: './saved-times.component.html',
  styleUrls: ['./saved-times.component.scss']
})
export class SavedTimesComponent {
  @Input() times;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteAll: EventEmitter<any> = new EventEmitter<any>();

  columnsToDisplay: string[] = [
    'date',
    'multiplier',
    'numberOfPeople',
    'timeSpent',
    'moneySpent',
    'delete'
  ];

  constructor() {}

  onDelete(id) {
    this.delete.emit(id);
  }

  onDeleteAll() {
    this.deleteAll.emit();
  }
}
