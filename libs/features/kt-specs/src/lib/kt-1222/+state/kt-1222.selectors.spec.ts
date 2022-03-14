import { Kt1222Entity } from './kt-1222.models';
import { kt1222Adapter, Kt1222PartialState, initialState } from './kt-1222.reducer';
import * as Kt1222Selectors from './kt-1222.selectors';

describe('Kt1222 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1222Id = (it: Kt1222Entity) => it.id;
  const createKt1222Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1222Entity);

  let state: Kt1222PartialState;

  beforeEach(() => {
    state = {
      kt1222: kt1222Adapter.setAll(
        [createKt1222Entity('PRODUCT-AAA'), createKt1222Entity('PRODUCT-BBB'), createKt1222Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1222 Selectors', () => {
    it('getAllKt1222() should return the list of Kt1222', () => {
      const results = Kt1222Selectors.getAllKt1222(state);
      const selId = getKt1222Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1222Selectors.getSelected(state) as Kt1222Entity;
      const selId = getKt1222Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1222Loaded() should return the current "loaded" status', () => {
      const result = Kt1222Selectors.getKt1222Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1222Error() should return the current "error" state', () => {
      const result = Kt1222Selectors.getKt1222Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
