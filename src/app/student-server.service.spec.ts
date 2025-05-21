import { TestBed } from '@angular/core/testing';

import { StudentServerService } from './student-server.service';

describe('StudentServerService', () => {
  let service: StudentServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
