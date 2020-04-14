import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAddNewComponent } from './event-add-new.component';

describe('EventAddNewComponent', () => {
  let component: EventAddNewComponent;
  let fixture: ComponentFixture<EventAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
