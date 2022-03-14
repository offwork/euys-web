import { KtCgl12HavaSogutma } from '@euys/api-interfaces';
import { Kt1218PartialState, initialState } from './kt-1218.reducer';
import * as Kt1218Selectors from './kt-1218.selectors';

describe('Kt1218 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1218Id = (it: KtCgl12HavaSogutma) => it.id;

  let state: Kt1218PartialState;

  describe('Kt1218 Selectors', () => {
    it('getAllKt1218() should return the list of Kt1218', () => {
      const results = Kt1218Selectors.getAllKt1218(state);
      const selId = getKt1218Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1218Loaded() should return the current "loaded" status', () => {
      const result = Kt1218Selectors.getKt1218Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1218Error() should return the current "error" state', () => {
      const result = Kt1218Selectors.getKt1218Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
