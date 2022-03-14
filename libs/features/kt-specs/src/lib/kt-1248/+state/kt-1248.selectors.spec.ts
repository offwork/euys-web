import { Kt1248Entity } from './kt-1248.models';
import { kt1248Adapter, Kt1248PartialState, initialState } from './kt-1248.reducer';
import * as Kt1248Selectors from './kt-1248.selectors';

describe('Kt1248 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1248Id = (it: Kt1248Entity) => it.id;
  const createKt1248Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1248Entity);

  let state: Kt1248PartialState;

  beforeEach(() => {
    state = {
      kt1248: kt1248Adapter.setAll(
        [createKt1248Entity('PRODUCT-AAA'), createKt1248Entity('PRODUCT-BBB'), createKt1248Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1248 Selectors', () => {
    it('getAllKt1248() should return the list of Kt1248', () => {
      const results = Kt1248Selectors.getAllKt1248(state);
      const selId = getKt1248Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1248Selectors.getSelected(state) as Kt1248Entity;
      const selId = getKt1248Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1248Loaded() should return the current "loaded" status', () => {
      const result = Kt1248Selectors.getKt1248Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1248Error() should return the current "error" state', () => {
      const result = Kt1248Selectors.getKt1248Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
