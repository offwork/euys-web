import { HedeflerEntity } from './hedefler.models';
import * as HedeflerActions from './hedefler.actions';
import { State, initialState, reducer } from './hedefler.reducer';

describe('Hedefler Reducer', () => {
  const createHedeflerEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as HedeflerEntity);

  beforeEach(() => {});

  describe('valid Hedefler actions', () => {
    it('loadHedeflerSuccess should return set the list of known Hedefler', () => {
      const hedefler = [createHedeflerEntity('PRODUCT-AAA'), createHedeflerEntity('PRODUCT-zzz')];
      const action = HedeflerActions.loadHedeflerSuccess({ hedefler });

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
