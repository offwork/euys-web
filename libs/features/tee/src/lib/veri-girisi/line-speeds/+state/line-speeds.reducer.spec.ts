import { LineSpeedsEntity } from './line-speeds.models';
import * as LineSpeedsActions from './line-speeds.actions';
import { State, initialState, reducer } from './line-speeds.reducer';

describe('LineSpeeds Reducer', () => {
  const createLineSpeedsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as LineSpeedsEntity);

  beforeEach(() => {});

  describe('valid LineSpeeds actions', () => {
    it('loadLineSpeedsSuccess should return set the list of known LineSpeeds', () => {
      const lineSpeeds = [createLineSpeedsEntity('PRODUCT-AAA'), createLineSpeedsEntity('PRODUCT-zzz')];
      const action = LineSpeedsActions.loadLineSpeedsSuccess({ lineSpeeds });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
