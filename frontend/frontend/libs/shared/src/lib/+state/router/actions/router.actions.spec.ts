import * as fromRouter from './router.actions';
import { RouterActionTypes } from './router.actions';

describe('loadRouters', () => {
  it('should return an action', () => {
    expect(fromRouter.appInitStarted().type).toBe(
      RouterActionTypes.AppInitStarted
    );
    expect(fromRouter.appInitCompleted().type).toBe(
      RouterActionTypes.AppInitCompleted
    );
  });
});
