import { DuTarihGecikmeAnaliziEntity } from './du-tarih-gecikme-analizi.models';
import * as DuTarihGecikmeAnaliziActions from './du-tarih-gecikme-analizi.actions';
import { State, initialState, reducer } from './du-tarih-gecikme-analizi.reducer';

describe('DuTarihGecikmeAnalizi Reducer', () => {
  const createDuTarihGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as DuTarihGecikmeAnaliziEntity);

  beforeEach(() => {});

  describe('valid DuTarihGecikmeAnalizi actions', () => {
    it('loadDuTarihGecikmeAnaliziSuccess should return set the list of known DuTarihGecikmeAnalizi', () => {
      const duTarihGecikmeAnalizi = [
        createDuTarihGecikmeAnaliziEntity('PRODUCT-AAA'),
        createDuTarihGecikmeAnaliziEntity('PRODUCT-zzz'),
      ];
      const action = DuTarihGecikmeAnaliziActions.loadDuTarihGecikmeAnaliziSuccess({ duTarihGecikmeAnalizi });

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
