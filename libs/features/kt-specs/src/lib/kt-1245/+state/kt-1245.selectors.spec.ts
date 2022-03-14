import { Kt1245Entity } from './kt-1245.models';
import { kt1245Adapter, Kt1245PartialState, initialState } from './kt-1245.reducer';
import * as Kt1245Selectors from './kt-1245.selectors';

describe('Kt1245 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1245Id = (it: Kt1245Entity) => it.id;
  const createKt1245Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1245Entity);

  let state: Kt1245PartialState;

  beforeEach(() => {
    state = {
      kt1245: kt1245Adapter.setAll(
        [createKt1245Entity('PRODUCT-AAA'), createKt1245Entity('PRODUCT-BBB'), createKt1245Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1245 Selectors', () => {
    it('getAllKt1245() should return the list of Kt1245', () => {
      const results = Kt1245Selectors.getAllKt1245(state);
      const selId = getKt1245Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1245Selectors.getSelected(state) as Kt1245Entity;
      const selId = getKt1245Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1245Loaded() should return the current "loaded" status', () => {
      const result = Kt1245Selectors.getKt1245Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1245Error() should return the current "error" state', () => {
      const result = Kt1245Selectors.getKt1245Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
