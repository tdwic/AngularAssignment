import { TestBed } from '@angular/core/testing';

import { DataFromComponentHandlerService } from './data-from-component-handler.service';

describe('DataFromComponentHandlerService', () => {
  let service: DataFromComponentHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFromComponentHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
