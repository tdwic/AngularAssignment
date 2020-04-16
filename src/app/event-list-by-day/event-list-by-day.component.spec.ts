import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListByDayComponent } from './event-list-by-day.component';

describe('EventListByDayComponent', () => {
  let component: EventListByDayComponent;
  let fixture: ComponentFixture<EventListByDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListByDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListByDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
