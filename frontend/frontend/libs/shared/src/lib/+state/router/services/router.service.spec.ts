import { TestBed } from '@angular/core/testing';

import { RouterService } from './router.service';
import { provideMockStore } from '@ngrx/store/testing';
import { provideAutoSpy } from 'jest-auto-spies';

describe('RouterService', () => {
  let service: RouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideAutoSpy(RouterService), provideMockStore()],
    });
    service = TestBed.inject(RouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
