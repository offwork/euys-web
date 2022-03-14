import { Kt1206Entity } from './kt-1206.models';
import { kt1206Adapter, Kt1206PartialState, initialState } from './kt-1206.reducer';
import * as Kt1206Selectors from './kt-1206.selectors';

describe('Kt1206 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1206Id = (it: Kt1206Entity) => it.id;
  const createKt1206Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1206Entity);

  let state: Kt1206PartialState;

  beforeEach(() => {
    state = {
      kt1206: kt1206Adapter.setAll(
        [createKt1206Entity('PRODUCT-AAA'), createKt1206Entity('PRODUCT-BBB'), createKt1206Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1206 Selectors', () => {
    it('getAllKt1206() should return the list of Kt1206', () => {
      const results = Kt1206Selectors.getAllKt1206(state);
      const selId = getKt1206Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1206Selectors.getSelected(state) as Kt1206Entity;
      const selId = getKt1206Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1206Loaded() should return the current "loaded" status', () => {
      const result = Kt1206Selectors.getKt1206Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1206Error() should return the current "error" state', () => {
      const result = Kt1206Selectors.getKt1206Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
