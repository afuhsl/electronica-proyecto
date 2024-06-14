import { TestBed } from '@angular/core/testing';

import { IeFirestoreService } from './ie-firestore.service';

describe('IeFirestoreService', () => {
  let service: IeFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IeFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
