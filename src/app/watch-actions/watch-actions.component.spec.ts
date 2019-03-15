import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchActionsComponent } from './watch-actions.component';

describe('WatchActionsComponent', () => {
  let component: WatchActionsComponent;
  let fixture: ComponentFixture<WatchActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
