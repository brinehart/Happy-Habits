import { outcomeReducer, initialState } from './outcome.reducer';

describe('Outcome Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = outcomeReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
