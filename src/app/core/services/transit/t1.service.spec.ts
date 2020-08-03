import { TestBed } from '@angular/core/testing';

import { T1Service } from './t1.service';

describe('T1Service', () => {
  let service: T1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(T1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
