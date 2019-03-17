import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedTimesComponent } from './saved-times.component';

describe('TimesComponent', () => {
  let component: SavedTimesComponent;
  let fixture: ComponentFixture<SavedTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SavedTimesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
