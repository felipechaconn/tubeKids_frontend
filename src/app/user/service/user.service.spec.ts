import { TestBed } from '@angular/core/testing';

import { UserValidationService } from './user.service';

describe('UserValidationService', () => {
  let service: UserValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
