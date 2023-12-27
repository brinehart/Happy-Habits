import { TestBed } from '@angular/core/testing';

import { KidEffects } from './kid.effects';

describe('ActivityEffects', () => {
  let service: KidEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KidEffects);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
