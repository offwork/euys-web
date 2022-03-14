import { Kt1224Entity } from './kt-1224.models';
import { kt1224Adapter, Kt1224PartialState, initialState } from './kt-1224.reducer';
import * as Kt1224Selectors from './kt-1224.selectors';

describe('Kt1224 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1224Id = (it: Kt1224Entity) => it.id;
  const createKt1224Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1224Entity);

  let state: Kt1224PartialState;

  beforeEach(() => {
    state = {
      kt1224: kt1224Adapter.setAll(
        [createKt1224Entity('PRODUCT-AAA'), createKt1224Entity('PRODUCT-BBB'), createKt1224Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1224 Selectors', () => {
    it('getAllKt1224() should return the list of Kt1224', () => {
      const results = Kt1224Selectors.getAllKt1224(state);
      const selId = getKt1224Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1224Selectors.getSelected(state) as Kt1224Entity;
      const selId = getKt1224Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1224Loaded() should return the current "loaded" status', () => {
      const result = Kt1224Selectors.getKt1224Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1224Error() should return the current "error" state', () => {
      const result = Kt1224Selectors.getKt1224Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
