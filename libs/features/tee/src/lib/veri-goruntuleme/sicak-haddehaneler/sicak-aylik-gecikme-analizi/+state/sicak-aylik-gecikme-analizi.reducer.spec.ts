import { SicakAylikGecikmeAnaliziEntity } from './sicak-aylik-gecikme-analizi.models';
import * as SicakAylikGecikmeAnaliziActions from './sicak-aylik-gecikme-analizi.actions';
import { State, initialState, reducer } from './sicak-aylik-gecikme-analizi.reducer';

describe('SicakAylikGecikmeAnalizi Reducer', () => {
  const createSicakAylikGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SicakAylikGecikmeAnaliziEntity);

  beforeEach(() => {});

  describe('valid SicakAylikGecikmeAnalizi actions', () => {
    it('loadSicakAylikGecikmeAnaliziSuccess should return set the list of known SicakAylikGecikmeAnalizi', () => {
      const sicakAylikGecikmeAnalizi = [
        createSicakAylikGecikmeAnaliziEntity('PRODUCT-AAA'),
        createSicakAylikGecikmeAnaliziEntity('PRODUCT-zzz'),
      ];
      const action = SicakAylikGecikmeAnaliziActions.loadSicakAylikGecikmeAnaliziSuccess({ sicakAylikGecikmeAnalizi });

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
