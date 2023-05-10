import { TestBed } from '@angular/core/testing';

import { MyCrudSerService } from './my-crud-ser.service';

describe('MyCrudSerService', () => {
  let service: MyCrudSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCrudSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
