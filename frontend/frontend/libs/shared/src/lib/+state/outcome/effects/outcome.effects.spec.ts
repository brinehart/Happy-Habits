import { TestBed } from '@angular/core/testing';

import { OutcomeEffects } from './outcome.effects';

describe('OutcomeEffects', () => {
  let service: OutcomeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutcomeEffects);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
