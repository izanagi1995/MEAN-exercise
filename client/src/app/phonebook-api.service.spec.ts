import { TestBed, inject } from '@angular/core/testing';

import { PhonebookAPIService } from './phonebook-api.service';

describe('PhonebookAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhonebookAPIService]
    });
  });

  it('should be created', inject([PhonebookAPIService], (service: PhonebookAPIService) => {
    expect(service).toBeTruthy();
  }));
});
