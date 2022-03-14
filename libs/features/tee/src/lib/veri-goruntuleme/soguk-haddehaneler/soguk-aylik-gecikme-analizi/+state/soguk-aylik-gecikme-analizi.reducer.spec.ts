import { SogukAylikGecikmeAnaliziEntity } from './soguk-aylik-gecikme-analizi.models';
import * as SogukAylikGecikmeAnaliziActions from './soguk-aylik-gecikme-analizi.actions';
import { State, initialState, reducer } from './soguk-aylik-gecikme-analizi.reducer';

describe('SogukAylikGecikmeAnalizi Reducer', () => {
  const createSogukAylikGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SogukAylikGecikmeAnaliziEntity);

  beforeEach(() => {});

  describe('valid SogukAylikGecikmeAnalizi actions', () => {
    it('loadSogukAylikGecikmeAnaliziSuccess should return set the list of known SogukAylikGecikmeAnalizi', () => {
      const sogukAylikGecikmeAnalizi = [
        createSogukAylikGecikmeAnaliziEntity('PRODUCT-AAA'),
        createSogukAylikGecikmeAnaliziEntity('PRODUCT-zzz'),
      ];
      const action = SogukAylikGecikmeAnaliziActions.loadSogukAylikGecikmeAnaliziSuccess({ sogukAylikGecikmeAnalizi });

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
