import { Kt1226Entity } from './kt-1226.models';
import { kt1226Adapter, Kt1226PartialState, initialState } from './kt-1226.reducer';
import * as Kt1226Selectors from './kt-1226.selectors';

describe('Kt1226 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1226Id = (it: Kt1226Entity) => it.id;
  const createKt1226Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1226Entity);

  let state: Kt1226PartialState;

  beforeEach(() => {
    state = {
      kt1226: kt1226Adapter.setAll(
        [createKt1226Entity('PRODUCT-AAA'), createKt1226Entity('PRODUCT-BBB'), createKt1226Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1226 Selectors', () => {
    it('getAllKt1226() should return the list of Kt1226', () => {
      const results = Kt1226Selectors.getAllKt1226(state);
      const selId = getKt1226Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1226Selectors.getSelected(state) as Kt1226Entity;
      const selId = getKt1226Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1226Loaded() should return the current "loaded" status', () => {
      const result = Kt1226Selectors.getKt1226Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1226Error() should return the current "error" state', () => {
      const result = Kt1226Selectors.getKt1226Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
