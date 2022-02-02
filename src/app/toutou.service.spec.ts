import { TestBed } from '@angular/core/testing';

import { ToutouService } from './toutou.service';

describe('ToutouService', () => {
  let service: ToutouService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToutouService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
