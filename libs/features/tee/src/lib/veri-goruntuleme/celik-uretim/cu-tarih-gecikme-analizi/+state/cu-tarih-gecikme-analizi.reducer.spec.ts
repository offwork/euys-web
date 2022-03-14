import { CuTarihGecikmeAnaliziEntity } from './cu-tarih-gecikme-analizi.models';
import * as CuTarihGecikmeAnaliziActions from './cu-tarih-gecikme-analizi.actions';
import { State, initialState, reducer } from './cu-tarih-gecikme-analizi.reducer';

describe('CuTarihGecikmeAnalizi Reducer', () => {
  const createCuTarihGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CuTarihGecikmeAnaliziEntity);

  beforeEach(() => {});

  describe('valid CuTarihGecikmeAnalizi actions', () => {
    it('loadCuTarihGecikmeAnaliziSuccess should return set the list of known CuTarihGecikmeAnalizi', () => {
      const cuTarihGecikmeAnalizi = [
        createCuTarihGecikmeAnaliziEntity('PRODUCT-AAA'),
        createCuTarihGecikmeAnaliziEntity('PRODUCT-zzz'),
      ];
      const action = CuTarihGecikmeAnaliziActions.loadCuTarihGecikmeAnaliziSuccess({ cuTarihGecikmeAnalizi });

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
