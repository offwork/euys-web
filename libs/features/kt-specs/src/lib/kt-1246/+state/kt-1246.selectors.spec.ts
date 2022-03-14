import { Kt1246Entity } from './kt-1246.models';
import { kt1246Adapter, Kt1246PartialState, initialState } from './kt-1246.reducer';
import * as Kt1246Selectors from './kt-1246.selectors';

describe('Kt1246 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1246Id = (it: Kt1246Entity) => it.id;
  const createKt1246Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1246Entity);

  let state: Kt1246PartialState;

  beforeEach(() => {
    state = {
      kt1246: kt1246Adapter.setAll(
        [createKt1246Entity('PRODUCT-AAA'), createKt1246Entity('PRODUCT-BBB'), createKt1246Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1246 Selectors', () => {
    it('getAllKt1246() should return the list of Kt1246', () => {
      const results = Kt1246Selectors.getAllKt1246(state);
      const selId = getKt1246Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1246Selectors.getSelected(state) as Kt1246Entity;
      const selId = getKt1246Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1246Loaded() should return the current "loaded" status', () => {
      const result = Kt1246Selectors.getKt1246Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1246Error() should return the current "error" state', () => {
      const result = Kt1246Selectors.getKt1246Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
