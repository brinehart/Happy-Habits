import { TestBed } from '@angular/core/testing';

import { ActivityEffects } from './activity.effects';

describe('ActivityEffects', () => {
  let service: ActivityEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityEffects);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
