import * as IsgucleriActions from './isgucleri.actions';
import { IsgucleriEntity } from './isgucleri.models';
import { initialState, reducer, State } from './isgucleri.reducer';

describe('Isgucleri Reducer', () => {
  const createIsgucleriEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as IsgucleriEntity);

  beforeEach(() => {});

  describe('valid Isgucleri actions', () => {
    it('loadIsgucleriSuccess should return set the list of known Isgucleri', () => {
      const isgucleri = [createIsgucleriEntity('PRODUCT-AAA'), createIsgucleriEntity('PRODUCT-zzz')];
      const action = IsgucleriActions.loadIsgucleriSuccess({ isgucleri });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
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
