import { SogukTarihGecikmeAnaliziEntity } from './soguk-tarih-gecikme-analizi.models';
import * as SogukTarihGecikmeAnaliziActions from './soguk-tarih-gecikme-analizi.actions';
import { State, initialState, reducer } from './soguk-tarih-gecikme-analizi.reducer';

describe('SogukTarihGecikmeAnalizi Reducer', () => {
  const createSogukTarihGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SogukTarihGecikmeAnaliziEntity);

  beforeEach(() => {});

  describe('valid SogukTarihGecikmeAnalizi actions', () => {
    it('loadSogukTarihGecikmeAnaliziSuccess should return set the list of known SogukTarihGecikmeAnalizi', () => {
      const sogukTarihGecikmeAnalizi = [
        createSogukTarihGecikmeAnaliziEntity('PRODUCT-AAA'),
        createSogukTarihGecikmeAnaliziEntity('PRODUCT-zzz'),
      ];
      const action = SogukTarihGecikmeAnaliziActions.loadSogukTarihGecikmeAnaliziSuccess({ sogukTarihGecikmeAnalizi });

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
