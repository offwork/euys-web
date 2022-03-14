import { RaporIndirmeEntity } from './rapor-indirme.models';
import * as RaporIndirmeActions from './rapor-indirme.actions';
import { State, initialState, reducer } from './rapor-indirme.reducer';

describe('RaporIndirme Reducer', () => {
  const createRaporIndirmeEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as RaporIndirmeEntity);

  beforeEach(() => {});

  describe('valid RaporIndirme actions', () => {
    it('loadRaporIndirmeSuccess should return set the list of known RaporIndirme', () => {
      const raporIndirme = [createRaporIndirmeEntity('PRODUCT-AAA'), createRaporIndirmeEntity('PRODUCT-zzz')];
      const action = RaporIndirmeActions.loadRaporIndirmeSuccess({ raporIndirme });

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
