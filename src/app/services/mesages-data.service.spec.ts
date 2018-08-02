import { TestBed, inject } from '@angular/core/testing';

import { MesagesDataService } from './mesages-data.service';

describe('MesagesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MesagesDataService]
    });
  });

  it('should be created', inject([MesagesDataService], (service: MesagesDataService) => {
    expect(service).toBeTruthy();
  }));
});
