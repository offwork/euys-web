import { KtCalHattiYuzdeUzama } from '@euys/api-interfaces';
import { Kt1217PartialState } from './kt-1217.reducer';
import * as Kt1217Selectors from './kt-1217.selectors';

describe('Kt1217 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1217Id = (it: KtCalHattiYuzdeUzama) => it.id;
  let state: Kt1217PartialState;


  describe('Kt1217 Selectors', () => {
    it('getAllKt1217() should return the list of Kt1217', () => {
      const results = Kt1217Selectors.getAllKt1217(state);
      const selId = getKt1217Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1217Loaded() should return the current "loaded" status', () => {
      const result = Kt1217Selectors.getKt1217Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1217Error() should return the current "error" state', () => {
      const result = Kt1217Selectors.getKt1217Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
