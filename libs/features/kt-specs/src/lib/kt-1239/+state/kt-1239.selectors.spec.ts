import { Kt1239Entity } from './kt-1239.models';
import { kt1239Adapter, Kt1239PartialState, initialState } from './kt-1239.reducer';
import * as Kt1239Selectors from './kt-1239.selectors';

describe('Kt1239 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1239Id = (it: Kt1239Entity) => it.id;
  const createKt1239Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1239Entity);

  let state: Kt1239PartialState;

  beforeEach(() => {
    state = {
      kt1239: kt1239Adapter.setAll(
        [createKt1239Entity('PRODUCT-AAA'), createKt1239Entity('PRODUCT-BBB'), createKt1239Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1239 Selectors', () => {
    it('getAllKt1239() should return the list of Kt1239', () => {
      const results = Kt1239Selectors.getAllKt1239(state);
      const selId = getKt1239Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1239Selectors.getSelected(state) as Kt1239Entity;
      const selId = getKt1239Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1239Loaded() should return the current "loaded" status', () => {
      const result = Kt1239Selectors.getKt1239Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1239Error() should return the current "error" state', () => {
      const result = Kt1239Selectors.getKt1239Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
