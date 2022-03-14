import { Kt1237Entity } from './kt-1237.models';
import { kt1237Adapter, Kt1237PartialState, initialState } from './kt-1237.reducer';
import * as Kt1237Selectors from './kt-1237.selectors';

describe('Kt1237 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1237Id = (it: Kt1237Entity) => it.id;
  const createKt1237Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1237Entity);

  let state: Kt1237PartialState;

  beforeEach(() => {
    state = {
      kt1237: kt1237Adapter.setAll(
        [createKt1237Entity('PRODUCT-AAA'), createKt1237Entity('PRODUCT-BBB'), createKt1237Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1237 Selectors', () => {
    it('getAllKt1237() should return the list of Kt1237', () => {
      const results = Kt1237Selectors.getAllKt1237(state);
      const selId = getKt1237Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1237Selectors.getSelected(state) as Kt1237Entity;
      const selId = getKt1237Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1237Loaded() should return the current "loaded" status', () => {
      const result = Kt1237Selectors.getKt1237Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1237Error() should return the current "error" state', () => {
      const result = Kt1237Selectors.getKt1237Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
