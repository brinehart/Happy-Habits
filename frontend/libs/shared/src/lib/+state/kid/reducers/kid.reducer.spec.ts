import { initialState, kidsFeature } from './kid.reducer';

describe('Kid Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = kidsFeature.reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
