import { DuAylikGecikmeAnaliziEntity } from './du-aylik-gecikme-analizi.models';
import * as DuAylikGecikmeAnaliziActions from './du-aylik-gecikme-analizi.actions';
import { State, initialState, reducer } from './du-aylik-gecikme-analizi.reducer';

describe('DuAylikGecikmeAnalizi Reducer', () => {
  const createDuAylikGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as DuAylikGecikmeAnaliziEntity);

  beforeEach(() => {});

  describe('valid DuAylikGecikmeAnalizi actions', () => {
    it('loadDuAylikGecikmeAnaliziSuccess should return set the list of known DuAylikGecikmeAnalizi', () => {
      const duAylikGecikmeAnalizi = [
        createDuAylikGecikmeAnaliziEntity('PRODUCT-AAA'),
        createDuAylikGecikmeAnaliziEntity('PRODUCT-zzz'),
      ];
      const action = DuAylikGecikmeAnaliziActions.loadDuAylikGecikmeAnaliziSuccess({ duAylikGecikmeAnalizi });

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
