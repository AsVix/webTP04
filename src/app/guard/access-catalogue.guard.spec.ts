import { TestBed, async, inject } from '@angular/core/testing';

import { AccessCatalogueGuard } from './access-catalogue.guard';

describe('AccessCatalogueGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessCatalogueGuard]
    });
  });

  it('should ...', inject([AccessCatalogueGuard], (guard: AccessCatalogueGuard) => {
    expect(guard).toBeTruthy();
  }));
});
