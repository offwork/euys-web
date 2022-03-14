import { Kt1258Entity } from './kt-1258.models';
import { kt1258Adapter, Kt1258PartialState, initialState } from './kt-1258.reducer';
import * as Kt1258Selectors from './kt-1258.selectors';

describe('Kt1258 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1258Id = (it: Kt1258Entity) => it.id;
  const createKt1258Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1258Entity);

  let state: Kt1258PartialState;

  beforeEach(() => {
    state = {
      kt1258: kt1258Adapter.setAll(
        [createKt1258Entity('PRODUCT-AAA'), createKt1258Entity('PRODUCT-BBB'), createKt1258Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1258 Selectors', () => {
    it('getAllKt1258() should return the list of Kt1258', () => {
      const results = Kt1258Selectors.getAllKt1258(state);
      const selId = getKt1258Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1258Selectors.getSelected(state) as Kt1258Entity;
      const selId = getKt1258Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1258Loaded() should return the current "loaded" status', () => {
      const result = Kt1258Selectors.getKt1258Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1258Error() should return the current "error" state', () => {
      const result = Kt1258Selectors.getKt1258Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
