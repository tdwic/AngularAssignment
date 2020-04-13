import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventNextComponent } from './event-next.component';

describe('NextEventComponent', () => {
  let component: EventNextComponent;
  let fixture: ComponentFixture<EventNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
