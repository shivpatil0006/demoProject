import { TestBed } from '@angular/core/testing';

import { App3Service } from './app3.service';

describe('App3Service', () => {
  let service: App3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(App3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
