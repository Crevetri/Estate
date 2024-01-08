import { TestBed } from '@angular/core/testing';

import { PropertyRepositoryDummyImplService } from './property-repository-dummy-impl.service';

describe('PropertyRepositoryDummyImplService', () => {
  let service: PropertyRepositoryDummyImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyRepositoryDummyImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
