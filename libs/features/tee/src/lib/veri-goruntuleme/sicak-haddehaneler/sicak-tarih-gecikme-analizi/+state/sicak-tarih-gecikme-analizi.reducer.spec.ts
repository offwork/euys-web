import { SicakTarihGecikmeAnaliziEntity } from './sicak-tarih-gecikme-analizi.models';
import * as SicakTarihGecikmeAnaliziActions from './sicak-tarih-gecikme-analizi.actions';
import { State, initialState, reducer } from './sicak-tarih-gecikme-analizi.reducer';

describe('SicakTarihGecikmeAnalizi Reducer', () => {
  const createSicakTarihGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SicakTarihGecikmeAnaliziEntity);

  beforeEach(() => {});

  describe('valid SicakTarihGecikmeAnalizi actions', () => {
    it('loadSicakTarihGecikmeAnaliziSuccess should return set the list of known SicakTarihGecikmeAnalizi', () => {
      const sicakTarihGecikmeAnalizi = [
        createSicakTarihGecikmeAnaliziEntity('PRODUCT-AAA'),
        createSicakTarihGecikmeAnaliziEntity('PRODUCT-zzz'),
      ];
      const action = SicakTarihGecikmeAnaliziActions.loadSicakTarihGecikmeAnaliziSuccess({ sicakTarihGecikmeAnalizi });

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
