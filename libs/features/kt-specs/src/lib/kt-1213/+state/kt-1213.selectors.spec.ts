import { Kt1213Entity } from './kt-1213.models';
import { kt1213Adapter, Kt1213PartialState, initialState } from './kt-1213.reducer';
import * as Kt1213Selectors from './kt-1213.selectors';

describe('Kt1213 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1213Id = (it: Kt1213Entity) => it.id;
  const createKt1213Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1213Entity);

  let state: Kt1213PartialState;

  beforeEach(() => {
    state = {
      kt1213: kt1213Adapter.setAll(
        [createKt1213Entity('PRODUCT-AAA'), createKt1213Entity('PRODUCT-BBB'), createKt1213Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1213 Selectors', () => {
    it('getAllKt1213() should return the list of Kt1213', () => {
      const results = Kt1213Selectors.getAllKt1213(state);
      const selId = getKt1213Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1213Selectors.getSelected(state) as Kt1213Entity;
      const selId = getKt1213Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1213Loaded() should return the current "loaded" status', () => {
      const result = Kt1213Selectors.getKt1213Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1213Error() should return the current "error" state', () => {
      const result = Kt1213Selectors.getKt1213Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
