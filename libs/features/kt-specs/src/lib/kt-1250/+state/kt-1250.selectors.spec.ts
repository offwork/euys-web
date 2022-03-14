import { Kt1250Entity } from './kt-1250.models';
import { kt1250Adapter, Kt1250PartialState, initialState } from './kt-1250.reducer';
import * as Kt1250Selectors from './kt-1250.selectors';

describe('Kt1250 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1250Id = (it: Kt1250Entity) => it.id;
  const createKt1250Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1250Entity);

  let state: Kt1250PartialState;

  beforeEach(() => {
    state = {
      kt1250: kt1250Adapter.setAll(
        [createKt1250Entity('PRODUCT-AAA'), createKt1250Entity('PRODUCT-BBB'), createKt1250Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1250 Selectors', () => {
    it('getAllKt1250() should return the list of Kt1250', () => {
      const results = Kt1250Selectors.getAllKt1250(state);
      const selId = getKt1250Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1250Selectors.getSelected(state) as Kt1250Entity;
      const selId = getKt1250Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1250Loaded() should return the current "loaded" status', () => {
      const result = Kt1250Selectors.getKt1250Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1250Error() should return the current "error" state', () => {
      const result = Kt1250Selectors.getKt1250Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
