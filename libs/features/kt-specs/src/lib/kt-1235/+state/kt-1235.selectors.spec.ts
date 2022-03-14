import { Kt1235Entity } from './kt-1235.models';
import { kt1235Adapter, Kt1235PartialState, initialState } from './kt-1235.reducer';
import * as Kt1235Selectors from './kt-1235.selectors';

describe('Kt1235 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1235Id = (it: Kt1235Entity) => it.id;
  const createKt1235Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1235Entity);

  let state: Kt1235PartialState;

  beforeEach(() => {
    state = {
      kt1235: kt1235Adapter.setAll(
        [createKt1235Entity('PRODUCT-AAA'), createKt1235Entity('PRODUCT-BBB'), createKt1235Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1235 Selectors', () => {
    it('getAllKt1235() should return the list of Kt1235', () => {
      const results = Kt1235Selectors.getAllKt1235(state);
      const selId = getKt1235Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1235Selectors.getSelected(state) as Kt1235Entity;
      const selId = getKt1235Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1235Loaded() should return the current "loaded" status', () => {
      const result = Kt1235Selectors.getKt1235Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1235Error() should return the current "error" state', () => {
      const result = Kt1235Selectors.getKt1235Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
