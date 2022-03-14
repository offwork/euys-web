import { CuAylikGecikmeAnaliziEntity } from './cu-aylik-gecikme-analizi.models';
import * as CuAylikGecikmeAnaliziActions from './cu-aylik-gecikme-analizi.actions';
import { State, initialState, reducer } from './cu-aylik-gecikme-analizi.reducer';

describe('CuAylikGecikmeAnalizi Reducer', () => {
  const createCuAylikGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CuAylikGecikmeAnaliziEntity);

  beforeEach(() => {});

  describe('valid CuAylikGecikmeAnalizi actions', () => {
    it('loadCuAylikGecikmeAnaliziSuccess should return set the list of known CuAylikGecikmeAnalizi', () => {
      const cuAylikGecikmeAnalizi = [
        createCuAylikGecikmeAnaliziEntity('PRODUCT-AAA'),
        createCuAylikGecikmeAnaliziEntity('PRODUCT-zzz'),
      ];
      const action = CuAylikGecikmeAnaliziActions.loadCuAylikGecikmeAnaliziSuccess({ cuAylikGecikmeAnalizi });

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
