import { Kt1238Entity } from './kt-1238.models';
import { kt1238Adapter, Kt1238PartialState, initialState } from './kt-1238.reducer';
import * as Kt1238Selectors from './kt-1238.selectors';

describe('Kt1238 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1238Id = (it: Kt1238Entity) => it.id;
  const createKt1238Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1238Entity);

  let state: Kt1238PartialState;

  beforeEach(() => {
    state = {
      kt1238: kt1238Adapter.setAll(
        [createKt1238Entity('PRODUCT-AAA'), createKt1238Entity('PRODUCT-BBB'), createKt1238Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1238 Selectors', () => {
    it('getAllKt1238() should return the list of Kt1238', () => {
      const results = Kt1238Selectors.getAllKt1238(state);
      const selId = getKt1238Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1238Selectors.getSelected(state) as Kt1238Entity;
      const selId = getKt1238Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1238Loaded() should return the current "loaded" status', () => {
      const result = Kt1238Selectors.getKt1238Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1238Error() should return the current "error" state', () => {
      const result = Kt1238Selectors.getKt1238Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
