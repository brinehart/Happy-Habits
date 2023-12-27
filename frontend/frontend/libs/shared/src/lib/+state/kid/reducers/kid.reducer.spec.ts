import { kidReducer, initialState } from './kid.reducer';

describe('Kid Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = kidReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
