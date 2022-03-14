import { Kt1212Entity } from './kt-1212.models';
import { kt1212Adapter, Kt1212PartialState, initialState } from './kt-1212.reducer';
import * as Kt1212Selectors from './kt-1212.selectors';

describe('Kt1212 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1212Id = (it: Kt1212Entity) => it.id;
  const createKt1212Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1212Entity);

  let state: Kt1212PartialState;

  beforeEach(() => {
    state = {
      kt1212: kt1212Adapter.setAll(
        [createKt1212Entity('PRODUCT-AAA'), createKt1212Entity('PRODUCT-BBB'), createKt1212Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1212 Selectors', () => {
    it('getAllKt1212() should return the list of Kt1212', () => {
      const results = Kt1212Selectors.getAllKt1212(state);
      const selId = getKt1212Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1212Selectors.getSelected(state) as Kt1212Entity;
      const selId = getKt1212Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1212Loaded() should return the current "loaded" status', () => {
      const result = Kt1212Selectors.getKt1212Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1212Error() should return the current "error" state', () => {
      const result = Kt1212Selectors.getKt1212Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
