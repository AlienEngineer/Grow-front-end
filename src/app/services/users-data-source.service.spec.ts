import { TestBed, inject } from '@angular/core/testing';

import { UsersDataSourceService } from './users-data-source.service';

describe('UsersDataSourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersDataSourceService]
    });
  });

  it('should be created', inject([UsersDataSourceService], (service: UsersDataSourceService) => {
    expect(service).toBeTruthy();
  }));
});
