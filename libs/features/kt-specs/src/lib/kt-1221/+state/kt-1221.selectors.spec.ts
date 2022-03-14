import { Kt1221Entity } from './kt-1221.models';
import { kt1221Adapter, Kt1221PartialState, initialState } from './kt-1221.reducer';
import * as Kt1221Selectors from './kt-1221.selectors';

describe('Kt1221 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1221Id = (it: Kt1221Entity) => it.id;
  const createKt1221Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1221Entity);

  let state: Kt1221PartialState;

  beforeEach(() => {
    state = {
      kt1221: kt1221Adapter.setAll(
        [createKt1221Entity('PRODUCT-AAA'), createKt1221Entity('PRODUCT-BBB'), createKt1221Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1221 Selectors', () => {
    it('getAllKt1221() should return the list of Kt1221', () => {
      const results = Kt1221Selectors.getAllKt1221(state);
      const selId = getKt1221Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1221Selectors.getSelected(state) as Kt1221Entity;
      const selId = getKt1221Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1221Loaded() should return the current "loaded" status', () => {
      const result = Kt1221Selectors.getKt1221Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1221Error() should return the current "error" state', () => {
      const result = Kt1221Selectors.getKt1221Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
