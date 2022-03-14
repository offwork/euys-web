import { Kt1360Entity } from './kt-1360.models';
import {
  kt1360Adapter,
  Kt1360PartialState,
  initialState,
} from './kt-1360.reducer';
import * as Kt1360Selectors from './kt-1360.selectors';

describe('Kt1360 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1360Id = (it: Kt1360Entity) => it.id;
  const createKt1360Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1360Entity);

  let state: Kt1360PartialState;

  beforeEach(() => {
    state = {
      kt1360: kt1360Adapter.setAll(
        [
          createKt1360Entity('PRODUCT-AAA'),
          createKt1360Entity('PRODUCT-BBB'),
          createKt1360Entity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1360 Selectors', () => {
    it('getAllKt1360() should return the list of Kt1360', () => {
      const results = Kt1360Selectors.getAllKt1360(state);
      const selId = getKt1360Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1360Selectors.getSelected(state) as Kt1360Entity;
      const selId = getKt1360Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1360Loaded() should return the current "loaded" status', () => {
      const result = Kt1360Selectors.getKt1360Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1360Error() should return the current "error" state', () => {
      const result = Kt1360Selectors.getKt1360Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
