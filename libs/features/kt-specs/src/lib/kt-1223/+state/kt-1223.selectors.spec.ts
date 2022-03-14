import { Kt1223Entity } from './kt-1223.models';
import { kt1223Adapter, Kt1223PartialState, initialState } from './kt-1223.reducer';
import * as Kt1223Selectors from './kt-1223.selectors';

describe('Kt1223 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1223Id = (it: Kt1223Entity) => it.id;
  const createKt1223Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1223Entity);

  let state: Kt1223PartialState;

  beforeEach(() => {
    state = {
      kt1223: kt1223Adapter.setAll(
        [createKt1223Entity('PRODUCT-AAA'), createKt1223Entity('PRODUCT-BBB'), createKt1223Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1223 Selectors', () => {
    it('getAllKt1223() should return the list of Kt1223', () => {
      const results = Kt1223Selectors.getAllKt1223(state);
      const selId = getKt1223Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1223Selectors.getSelected(state) as Kt1223Entity;
      const selId = getKt1223Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1223Loaded() should return the current "loaded" status', () => {
      const result = Kt1223Selectors.getKt1223Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1223Error() should return the current "error" state', () => {
      const result = Kt1223Selectors.getKt1223Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
