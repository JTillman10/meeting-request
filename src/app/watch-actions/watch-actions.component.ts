import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'watch-actions',
  templateUrl: './watch-actions.component.html',
  styleUrls: ['./watch-actions.component.scss']
})
export class WatchActionsComponent {
  @Input() isRunning: boolean;

  @Output() start: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() stop: EventEmitter<any> = new EventEmitter<any>();
  @Output() reset: EventEmitter<any> = new EventEmitter<any>();
  @Output() save: EventEmitter<any> = new EventEmitter<any>();

  form = this.fb.group({
    multiplier: [10, Validators.required],
    numberOfPeople: [10, Validators.required]
  });

  submitted = false;

  constructor(private fb: FormBuilder) {}

  onStart() {
    this.submitted = true;
    if (this.form.valid) {
      this.start.emit(this.form);
    }
  }

  onStop() {
    this.stop.emit();
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
    this.reset.emit();
  }

  onSave() {
    this.save.emit();
  }

  get multiplierInvalid() {
    const control = this.form.get('multiplier');
    return control.hasError('required') && (control.touched || this.submitted);
  }

  get numberOfPeopleInvalid() {
    const control = this.form.get('numberOfPeople');
    return control.hasError('required') && (control.touched || this.submitted);
  }
}
