import { TestBed } from '@angular/core/testing';

import { GlobalCommonService } from './global-common.service';

describe('GlobalCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalCommonService = TestBed.get(GlobalCommonService);
    expect(service).toBeTruthy();
  });
});
