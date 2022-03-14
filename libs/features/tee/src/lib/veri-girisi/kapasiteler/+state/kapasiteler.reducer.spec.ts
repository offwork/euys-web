import { KapasitelerEntity } from './kapasiteler.models';
import * as KapasitelerActions from './kapasiteler.actions';
import { State, initialState, reducer } from './kapasiteler.reducer';

describe('Kapasiteler Reducer', () => {
  const createKapasitelerEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as KapasitelerEntity);

  beforeEach(() => {});

  describe('valid Kapasiteler actions', () => {
    it('loadKapasitelerSuccess should return set the list of known Kapasiteler', () => {
      const kapasiteler = [createKapasitelerEntity('PRODUCT-AAA'), createKapasitelerEntity('PRODUCT-zzz')];
      const action = KapasitelerActions.loadKapasitelerSuccess({ kapasiteler });

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
