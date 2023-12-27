import { activityReducer, initialState } from './activity.reducer';

describe('Activity Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = activityReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
